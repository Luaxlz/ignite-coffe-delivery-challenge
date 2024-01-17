import { CheckFat, ShoppingCartSimple } from '@phosphor-icons/react';
import { QuantityButton } from '../../../../components/QuantityButton';
import {
  CoffeeCard,
  CoffeeCardInfoContainer,
  CoffeeCardPrice,
  Actions,
  Tags,
} from './styles';
import { createContext, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
    quantity: 1;
  };
};

interface Item {
  id: string;
  quantity: number;
}

interface CartContextType {
  Items: Item[];
}

const CartContext = createContext({});

export function ProductCard({ coffee }: Props) {
  const theme = useTheme();
  const [cart, setCart] = useState<Item[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    setQuantity((state) => state - 1);
  }

  function handleAddItem() {
    const isItemAlreadyAdded = cart.find((item) => item.id === coffee.id);

    if (isItemAlreadyAdded) {
      setCart((state) =>
        state.map((item) => {
          if (item.id === coffee.id) {
            return { ...item, quantity: quantity };
          } else {
            return item;
          }
        })
      );
    } else {
      setCart((state) => [...state, { id: coffee.id, quantity }]);
    }
    setIsItemAdded(true);
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);
  return (
    <CoffeeCard>
      <img src={coffee.image} alt={coffee.title} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <span id='cardTitle'>{coffee.title}</span>
      <p id='cardSubTitle'>{coffee.description}</p>
      <CoffeeCardInfoContainer>
        <CoffeeCardPrice>
          <span id='prefix'>R$</span>
          <span id='price'>{coffee.price.toFixed(2)}</span>
        </CoffeeCardPrice>

        <Actions $itemAdded={isItemAdded}>
          <QuantityButton
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button onClick={handleAddItem} disabled={isItemAdded}>
            {isItemAdded ? (
              <CheckFat size={22} weight='fill' color={theme['base-card']} />
            ) : (
              <ShoppingCartSimple
                size={22}
                weight='fill'
                color={theme['base-card']}
              />
            )}
          </button>
        </Actions>
      </CoffeeCardInfoContainer>
    </CoffeeCard>
  );
}
