import { MapPinLine } from '@phosphor-icons/react';
import {
  CheckoutContainer,
  CheckoutTitle,
  FormInfo,
  FormInfoText,
  InputContainer,
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
            <form action=''>
              <InputContainer>
                <input id='cepInput' type='text' placeholder='CEP' />
                <input id='streetInput' type='text' placeholder='Rua' />
                <div id='inputWrapper1'>
                  <input id='numberInput' type='text' placeholder='Número' />
                  <input
                    id='complementInput'
                    type='text'
                    placeholder='Complemento'
                  />
                </div>
                <div id='inputWrapper2'>
                  <input id='bairroInput' type='text' placeholder='Bairro' />
                  <input id='cityInput' type='text' placeholder='Cidade' />
                  <input id='ufInput' type='text' placeholder='UF' />
                </div>
              </InputContainer>
            </form>
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
