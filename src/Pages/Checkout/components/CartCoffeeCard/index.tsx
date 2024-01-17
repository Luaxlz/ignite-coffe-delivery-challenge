import {
  CardInfoContainer,
  CoffeeCardContainer,
  ProductValueInfo,
} from './styles';
import { QuantityButton } from '../../../../components/QuantityButton';
import { Trash } from '@phosphor-icons/react';

export function CartCoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CardInfoContainer>
        <div id='productImageContainer' />
        <div id='productInfoContainer'>
          <span id='productTitle'>Expresso Tradicional</span>
          <div id='actionButtonsContainer'>
            <QuantityButton quantity={1} />
            <button id='removeProductButton'>
              <div id='trashIcon'>
                <Trash size={16} />
              </div>
              Remover
            </button>
          </div>
        </div>
      </CardInfoContainer>
      <ProductValueInfo>R$ 9,90</ProductValueInfo>
    </CoffeeCardContainer>
  );
}
