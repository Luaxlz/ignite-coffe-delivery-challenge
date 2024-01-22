import { ReactNode, createContext, useReducer } from 'react';
import { OrderInfo } from '../Pages/Checkout';

export interface Item {
  id: string;
  quantity: number;
}

interface CartContextType {
  cart: Item[];
  addItemToCart: (coffee: Item) => void;
  incrementCartItemQuantity: (coffeeId: string) => void;
  decrementCartItemQuantity: (coffeeId: string) => void;
  removeCartItem: (coffeeId: string) => void;
}

interface CartContextProps {
  children: ReactNode;
}

interface Order extends OrderInfo {
  id: string;
  items: Item[];
}

interface CartState {
  cart: Item[];
  orders: Order[];
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProps) {
  const [cartState, dispatch] = useReducer(
    (state: CartState, action: any) => {
      switch (action.type) {
        case 'ADD_ITEM':
          const itemAlreadyAdded = state.cart.find(
            (item) => item.id === action.payload.id
          );

          if (itemAlreadyAdded) {
            return {
              ...state,
              cart: state.cart.map((item) => {
                if (item.id === action.payload.id) {
                  return { ...item, quantity: action.payload.quantity };
                } else {
                  return item;
                }
              }),
            };
          } else {
            return {
              ...state,
              cart: [...state.cart, { ...action.payload }],
            };
          }
        case 'INCREMENT_ITEM_QUANTITY':
          return {
            ...state,
            cart: state.cart.map((item) => {
              if (item.id === action.payload.coffeeId) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            }),
          };
        case 'DECREMENT_ITEM_QUANTITY':
          return {
            ...state,
            cart: state.cart.map((item) => {
              if (item.id === action.payload.coffeeId) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return item;
              }
            }),
          };
        case 'REMOVE_ITEM':
          const currentItemIndex = state.cart.findIndex(
            (item) => item.id === action.payload.coffeeId
          );

          if (currentItemIndex >= 0) {
            return {
              ...state,
              cart: state.cart.splice(currentItemIndex, 1),
            };
          }
        default:
          return state;
      }
    },
    {
      cart: [],
      orders: [],
    }
  );

  const { cart } = cartState;

  function addItemToCart(coffee: Item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: coffee.id,
        quantity: coffee.quantity,
      },
    });
  }

  function incrementCartItemQuantity(coffeeId: string) {
    dispatch({
      type: 'INCREMENT_ITEM_QUANTITY',
      payload: {
        coffeeId,
      },
    });
  }

  function decrementCartItemQuantity(coffeeId: string) {
    dispatch({
      type: 'DECREMENT_ITEM_QUANTITY',
      payload: {
        coffeeId,
      },
    });
  }

  function removeCartItem(coffeeId: string) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        coffeeId,
      },
    });
  }

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        cart,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
