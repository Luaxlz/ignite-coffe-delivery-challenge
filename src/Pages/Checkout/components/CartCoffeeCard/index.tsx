import {
  CardInfoContainer,
  CoffeeCardContainer,
  ProductValueInfo,
} from './styles';
import { QuantityButton } from '../../../../components/QuantityButton';
import { Trash } from '@phosphor-icons/react';
import { CartContext } from '../../../../contexts/CartContext';
import { useContext } from 'react';

interface CartCoffeeCardProps {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
    quantity: number;
  };
}

export function CartCoffeeCard({ coffee }: CartCoffeeCardProps) {
  const {
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeCartItem,
  } = useContext(CartContext);

  function handleCartIncrement() {
    incrementCartItemQuantity(coffee.id);
  }

  function handleCartDecrement() {
    decrementCartItemQuantity(coffee.id);
  }

  function handleCartItemRemove() {
    removeCartItem(coffee.id);
  }

  return (
    <CoffeeCardContainer>
      <CardInfoContainer>
        <div id='productImageContainer'>
          <img src={coffee.image} alt='' />
        </div>
        <div id='productInfoContainer'>
          <span id='productTitle'>{coffee.title}</span>
          <div id='actionButtonsContainer'>
            <QuantityButton
              quantity={coffee.quantity}
              incrementQuantity={handleCartIncrement}
              decrementQuantity={handleCartDecrement}
            />
            <button id='removeProductButton' onClick={handleCartItemRemove}>
              <div id='trashIcon'>
                <Trash size={16} />
              </div>
              Remover
            </button>
          </div>
        </div>
      </CardInfoContainer>
      <ProductValueInfo>R$ {coffee.price.toFixed(2)}</ProductValueInfo>
    </CoffeeCardContainer>
  );
}
