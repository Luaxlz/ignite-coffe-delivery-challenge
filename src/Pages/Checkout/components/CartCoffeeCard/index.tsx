import {
  CardInfoContainer,
  CoffeeCardContainer,
  ProductValueInfo,
} from './styles';
import CoffeeImage from '../../../../assets/Coffe/Type=Expresso@ignite-coffe-delivery.svg';
import { ProductQuantityButton } from '../../../../components/ProductQuantityButton';
import { Trash } from '@phosphor-icons/react';

export function CartCoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CardInfoContainer>
        <div id='productImageContainer'>
          <img src={CoffeeImage} alt='' />
        </div>
        <div id='productInfoContainer'>
          <span id='productTitle'>Expresso Tradicional</span>
          <div id='actionButtonsContainer'>
            <ProductQuantityButton />
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
