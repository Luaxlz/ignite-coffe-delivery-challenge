import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react';
import {
  CartContainer,
  CheckoutContainer,
  CheckoutTitle,
  Divider,
  InputContainer,
  OrderForm,
  OrderFormContainer,
  OrderProductsContainer,
  PaymentActions,
  PaymentContainer,
  ResumeContainer,
} from './styles';
import { TitleInfo } from './components/TitleInfo';
import { CartCoffeeCard } from './components/CartCoffeeCard';
export function Checkout() {
  return (
    <>
      <CheckoutContainer>
        <OrderFormContainer>
          <CheckoutTitle>Complete o seu pedido</CheckoutTitle>
          <OrderForm>
            <TitleInfo
              Icon={MapPinLine}
              title='Endereço de Entrega'
              subtitle='Informe o endereço onde deseja receber seu pedido'
              color='yellow-dark'
            />
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
          <PaymentContainer>
            <TitleInfo
              Icon={CurrencyDollar}
              title='Pagamento'
              subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
              color='purple'
            />

            <PaymentActions>
              <button>
                <CreditCard size={22} className='paymentButtonIcon' />
                Cartão de Crédito
              </button>
              <button>
                <Bank size={22} className='paymentButtonIcon' />
                Cartão de Débito
              </button>
              <button>
                <Money size={22} className='paymentButtonIcon' />
                Dinheiro
              </button>
            </PaymentActions>
          </PaymentContainer>
        </OrderFormContainer>
        <OrderProductsContainer>
          <CheckoutTitle>Cafés selecionados</CheckoutTitle>
          <CartContainer>
            <div id='productsContainer'>
              {Array.from({ length: 2 }).map(() => (
                <>
                  <CartCoffeeCard />
                  <Divider />
                </>
              ))}
            </div>
            <ResumeContainer>
              <div className='resumeInfo'>
                <span>Total de itens</span>
                <span className='resumeValue'>R$ 29,70</span>
              </div>
              <div className='resumeInfo'>
                <span>Entrega</span>
                <span className='resumeValue'>R$ 3,50</span>
              </div>
              <div className='resumeInfo' id='totalInfo'>
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </ResumeContainer>
            <button id='confirmOrderButton'>Confirmar pedido</button>
          </CartContainer>
        </OrderProductsContainer>
      </CheckoutContainer>
    </>
  );
}
