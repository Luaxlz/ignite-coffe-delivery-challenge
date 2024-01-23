import { NavigateFunction } from 'react-router-dom';
import { OrderInfo } from '../../Pages/Checkout';
import { Item } from './reducer';

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CHECKOUT = 'CHECKOUT',
}

export function AddItemAction(coffee: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      id: coffee.id,
      quantity: coffee.quantity,
    },
  };
}

export function incrementItemQuantityAction(itemId: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  };
}

export function decrementItemQuantityAction(itemId: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  };
}

export function removeItemAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  };
}

export function checkoutAction(order: OrderInfo, callback: NavigateFunction) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      order,
      callback,
    },
  };
}
