import { Minus, Plus } from '@phosphor-icons/react';
import { CoffeeCounterButton } from './styles';

export function ProductQuantityButton() {
  return (
    <CoffeeCounterButton>
      <button>
        <Minus size={14} weight='bold' />
      </button>
      <span id='counter'>1</span>
      <button>
        <Plus size={14} weight='bold' />
      </button>
    </CoffeeCounterButton>
  );
}
