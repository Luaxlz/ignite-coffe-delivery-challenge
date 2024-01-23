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

export function cartReducer(state: CartState, action: any) {
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
}
