import { MapPinLine } from '@phosphor-icons/react';
import {
  CheckoutContainer,
  CheckoutTitle,
  FormInfo,
  FormInfoText,
  OrderForm,
  OrderFormContainer,
  OrderProductsContainer,
  PaymentContainer,
} from './styles';

export function Checkout() {
  return (
    <>
      <CheckoutContainer>
        <OrderFormContainer>
          <CheckoutTitle>Complete o seu pedido</CheckoutTitle>
          <OrderForm>
            <FormInfo>
              <MapPinLine size={22} />
              <FormInfoText>
                <span id='title'>Endereço de Entrega</span>
                <span id='subtitle'>
                  Informe o endereço onde deseja receber o seu pedido
                </span>
              </FormInfoText>
            </FormInfo>
          </OrderForm>
          <PaymentContainer>Payment</PaymentContainer>
        </OrderFormContainer>
        <OrderProductsContainer>
          <CheckoutTitle>Cafés selecionados</CheckoutTitle>
        </OrderProductsContainer>
      </CheckoutContainer>
    </>
  );
}
