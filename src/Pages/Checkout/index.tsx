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
import { Fragment, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { coffees } from '../../../data.json';

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
  const { cart } = useContext(CartContext);
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

  const cartHasItems = cart.length >= 1;
  const deliveryFee = 3.5;

  function handleCheckout(data: any) {
    console.log(data);

    reset();
  }

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error('Café não encontrado');
    }

    return { ...coffeeInfo, quantity: item.quantity };
  });

  const coffeesInCartTotalPrice = coffeesInCart.reduce(
    (previousValue, currentCoffee) => {
      return (previousValue += currentCoffee.price * currentCoffee.quantity);
    },
    0
  );

  const orderTotalPrice = coffeesInCartTotalPrice + deliveryFee;

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
                {cartHasItems ? (
                  coffeesInCart.map((coffee) => (
                    <Fragment key={coffee.id}>
                      <CartCoffeeCard coffee={coffee} />
                      <Divider />
                    </Fragment>
                  ))
                ) : (
                  <span>Nenhum item no carrinho</span>
                )}
              </div>
              <ResumeContainer>
                <div className='resumeInfo'>
                  <span>Total dos itens</span>
                  <span className='resumeValue'>
                    R$ {coffeesInCartTotalPrice.toFixed(2)}
                  </span>
                </div>
                <div className='resumeInfo'>
                  <span>Entrega</span>
                  <span className='resumeValue'>
                    R$ {deliveryFee.toFixed(2)}
                  </span>
                </div>
                <div className='resumeInfo' id='totalInfo'>
                  <span>Total</span>
                  <span>R$ {orderTotalPrice.toFixed(2)}</span>
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
