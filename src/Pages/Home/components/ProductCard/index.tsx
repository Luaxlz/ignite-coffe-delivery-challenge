import { CheckFat, ShoppingCartSimple } from '@phosphor-icons/react';
import { QuantityButton } from '../../../../components/QuantityButton';
import {
  CoffeeCard,
  CoffeeCardInfoContainer,
  CoffeeCardPrice,
  Actions,
  Tags,
} from './styles';
import { useTheme } from 'styled-components';
import { useState, useEffect } from 'react';
import { useCart } from '../../../../hooks/useCart';

export type CoffeeProps = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function ProductCard({ coffee }: CoffeeProps) {
  const { addItemToCart } = useCart();
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    setQuantity((state) => state - 1);
  }

  function handleAddItem() {
    addItemToCart({
      ...coffee,
      quantity,
    });
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
      <div>
        {coffee.tags.map((tag) => (
          <Tags key={tag}>
            <span>{tag}</span>
          </Tags>
        ))}
      </div>
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
