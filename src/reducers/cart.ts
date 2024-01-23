import { OrderInfo } from '../Pages/Checkout';

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

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
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
    case ActionTypes.INCREMENT_ITEM_QUANTITY:
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
    case ActionTypes.DECREMENT_ITEM_QUANTITY:
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
    case ActionTypes.REMOVE_ITEM:
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
}
