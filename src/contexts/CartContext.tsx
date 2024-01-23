import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { Item, Order, cartReducer } from '../reducers/cart/reducer';
import {
  AddItemAction,
  checkoutAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions';
import { OrderInfo } from '../Pages/Checkout';
import { useNavigate } from 'react-router-dom';

interface CartContextType {
  cart: Item[];
  orders: Order[];
  addItemToCart: (coffee: Item) => void;
  incrementCartItemQuantity: (coffeeId: string) => void;
  decrementCartItemQuantity: (coffeeId: string) => void;
  removeCartItem: (coffeeId: string) => void;
  checkout: (order: OrderInfo) => void;
}

interface CartContextProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0'
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return initialState;
    }
  );

  const { cart, orders } = cartState;
  const navigate = useNavigate();

  function addItemToCart(coffee: Item) {
    dispatch(AddItemAction(coffee));
  }

  function incrementCartItemQuantity(coffeeId: string) {
    dispatch(incrementItemQuantityAction(coffeeId));
  }

  function decrementCartItemQuantity(coffeeId: string) {
    dispatch(decrementItemQuantityAction(coffeeId));
  }

  function removeCartItem(coffeeId: string) {
    dispatch(removeItemAction(coffeeId));
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutAction(order, navigate));
  }

  // useEffect(() => {
  //   const stateJSON = JSON.stringify(cartState);

  //   localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
  // }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        cart,
        orders,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
