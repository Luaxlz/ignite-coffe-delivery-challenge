import { ReactNode, createContext, useState } from 'react';

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

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<Item[]>([]);

  function addItemToCart(coffee: Item) {
    const isItemAlreadyAdded = cart.find((item) => item.id === coffee.id);

    if (isItemAlreadyAdded) {
      setCart((state) =>
        state.map((item) => {
          if (item.id === coffee.id) {
            return { ...item, quantity: coffee.quantity };
          } else {
            return item;
          }
        })
      );
    } else {
      setCart((state) => [
        ...state,
        { id: coffee.id, quantity: coffee.quantity },
      ]);
    }
  }

  function incrementCartItemQuantity(coffeeId: string) {
    setCart((state) =>
      state.map((item) => {
        if (item.id === coffeeId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  }

  function decrementCartItemQuantity(coffeeId: string) {
    setCart((state) =>
      state.map((item) => {
        if (item.id === coffeeId) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
    );
  }

  function removeCartItem(coffeeId: string) {
    const currentItemIndex = cart.findIndex((item) => item.id === coffeeId);
    if (currentItemIndex >= 0) {
      setCart((state) => state.splice(currentItemIndex, 1));
    }
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
