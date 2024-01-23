import { ReactNode, createContext, useReducer } from 'react';
import { Item, cartReducer } from '../reducers/cart';

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

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    orders: [],
  });

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
