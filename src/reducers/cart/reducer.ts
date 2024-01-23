import { produce } from 'immer';
import { OrderInfo } from '../../Pages/Checkout';
import { ActionTypes } from './actions';

interface CartState {
  cart: Item[];
  orders: Order[];
}

export interface Item {
  id: string;
  quantity: number;
}

interface Order extends OrderInfo {
  id: string;
  items: Item[];
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      return produce(state, (draft) => {
        const itemAlreadyInCart = draft.cart.find(
          (item) => item.id === action.payload.id
        );
        if (itemAlreadyInCart) {
          itemAlreadyInCart.quantity = action.payload.quantity;
        } else {
          draft.cart.push(action.payload);
        }
      });
    }
    case ActionTypes.INCREMENT_ITEM_QUANTITY: {
      return produce(state, (draft) => {
        const indexToIncrement = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId
        );

        if (indexToIncrement >= 0) {
          draft.cart[indexToIncrement].quantity += 1;
        }
      });
    }
    case ActionTypes.DECREMENT_ITEM_QUANTITY: {
      return produce(state, (draft) => {
        const indexToDecrement = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId
        );

        if (indexToDecrement >= 0) {
          draft.cart[indexToDecrement].quantity -= 1;
        }
      });
    }
    case ActionTypes.REMOVE_ITEM: {
      return produce(state, (draft) => {
        const indexToRemove = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId
        );

        if (indexToRemove >= 0) {
          draft.cart.splice(indexToRemove, 1);
        }
      });
    }
    default:
      return state;
  }
}
