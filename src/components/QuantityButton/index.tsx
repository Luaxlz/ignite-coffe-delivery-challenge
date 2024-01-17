import { Minus, Plus } from '@phosphor-icons/react';
import { CoffeeCounterButton } from './styles';

type Props = {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
};

export function QuantityButton({
  quantity,
  decrementQuantity,
  incrementQuantity,
}: Props) {
  return (
    <CoffeeCounterButton>
      <button onClick={decrementQuantity} disabled={quantity === 1}>
        <Minus size={14} weight='bold' />
      </button>
      <span id='counter'>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} weight='bold' />
      </button>
    </CoffeeCounterButton>
  );
}
