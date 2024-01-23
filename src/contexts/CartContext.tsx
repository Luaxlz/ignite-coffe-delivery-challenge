import { ReactNode, createContext, useReducer } from 'react';
import { Item, cartReducer } from '../reducers/cart/reducer';
import {
  ActionTypes,
  AddItemAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions';

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
