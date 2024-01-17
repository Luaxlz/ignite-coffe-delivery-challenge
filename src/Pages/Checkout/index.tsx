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
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const deliveryAddressSchema = zod.object({
  cep: zod.string().min(1),
  city: zod.string().min(1),
  complement: zod.string().min(1),
  district: zod.string().min(1),
  number: zod.string().min(1),
  state: zod.string().min(1),
  street: zod.string().min(1),
});

export type OrderInfo = zod.infer<typeof deliveryAddressSchema>;

export function Checkout() {
  const { register, handleSubmit, reset } = useForm<OrderInfo>({
    resolver: zodResolver(deliveryAddressSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      district: '',
      number: '',
      state: '',
      street: '',
    },
  });

  function handleCheckout(data: any) {
    console.log(data);

    reset();
  }

  return (
    <>
      <CheckoutContainer>
        <form onSubmit={handleSubmit(handleCheckout)}>
          <OrderFormContainer>
            <CheckoutTitle>Complete o seu pedido</CheckoutTitle>
            <OrderForm>
              <TitleInfo
                Icon={MapPinLine}
                title='Endereço de Entrega'
                subtitle='Informe o endereço onde deseja receber seu pedido'
                color='yellow-dark'
              />

              <InputContainer>
                <input
                  id='cepInput'
                  type='text'
                  required
                  placeholder='CEP'
                  {...register('cep')}
                />
                <input
                  id='streetInput'
                  type='text'
                  required
                  placeholder='Rua'
                  {...register('street')}
                />
                <div id='inputWrapper1'>
                  <input
                    id='numberInput'
                    type='text'
                    required
                    placeholder='Número'
                    {...register('number')}
                  />
                  <input
                    id='complementInput'
                    type='text'
                    placeholder='Complemento'
                    {...register('complement')}
                  />
                </div>
                <div id='inputWrapper2'>
                  <input
                    id='bairroInput'
                    type='text'
                    required
                    placeholder='Bairro'
                    {...register('district')}
                  />
                  <input
                    id='cityInput'
                    type='text'
                    required
                    placeholder='Cidade'
                    {...register('city')}
                  />
                  <input
                    id='ufInput'
                    type='text'
                    required
                    placeholder='UF'
                    {...register('state')}
                  />
                </div>
              </InputContainer>
            </OrderForm>
            <PaymentContainer>
              <TitleInfo
                Icon={CurrencyDollar}
                title='Pagamento'
                subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
                color='purple'
              />

              <PaymentActions>
                <button type='button'>
                  <CreditCard size={22} className='paymentButtonIcon' />
                  Cartão de Crédito
                </button>
                <button type='button'>
                  <Bank size={22} className='paymentButtonIcon' />
                  Cartão de Débito
                </button>
                <button type='button'>
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
              <button id='confirmOrderButton' type='submit'>
                Confirmar pedido
              </button>
            </CartContainer>
          </OrderProductsContainer>
        </form>
      </CheckoutContainer>
    </>
  );
}
