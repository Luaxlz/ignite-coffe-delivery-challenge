import {
  CoffeeCard,
  CoffeeCardActions,
  CoffeeCardBadge,
  CoffeeCardInfoContainer,
  CoffeeCardPrice,
  CoffeeListGridContainer,
  CoffeeCounterButton,
  HomeContainer,
  IntroGridContainer,
  IntroImageGrid,
  IntroItemsGrid,
  IntroTitleContainer,
  IntroTitleGrid,
  IntroTopicGridContainer,
  IntroTopicItem,
} from './styles';
import IntroImage from '../../assets/Home/Imagem@ignite-coffee-delivery.svg';
import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  ShoppingCartSimple,
  Timer,
} from '@phosphor-icons/react';
import TradicionalExpresso from '../../assets/Coffe/Type=Expresso@ignite-coffe-delivery.svg';

export function Home() {
  return (
    <HomeContainer>
      <IntroGridContainer>
        <IntroTitleGrid>
          <IntroTitleContainer>
            <span>Encontre o café perfeito para qualquer hora do dia</span>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </IntroTitleContainer>
        </IntroTitleGrid>
        <IntroImageGrid>
          <img src={IntroImage} alt='' />
        </IntroImageGrid>
        <IntroItemsGrid>
          <IntroTopicGridContainer>
            <IntroTopicItem>
              <div id='icon1'>
                <ShoppingCart size={16} weight='fill' />
              </div>
              <span>Compra simples e segura</span>
            </IntroTopicItem>
            <IntroTopicItem>
              <div id='icon2'>
                <Package size={16} weight='fill' />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </IntroTopicItem>
            <IntroTopicItem>
              <div id='icon3'>
                <Timer size={16} weight='fill' />
              </div>
              <span>Entrega rápida e rastreada</span>
            </IntroTopicItem>
            <IntroTopicItem>
              <div id='icon4'>
                <Coffee size={16} weight='fill' />
              </div>
              <span>O café chega fresquinho até você</span>
            </IntroTopicItem>
          </IntroTopicGridContainer>
        </IntroItemsGrid>
      </IntroGridContainer>
      <h1 id='coffeeListTitle'>Nossos Cafés</h1>
      <CoffeeListGridContainer>
        {Array.from({ length: 14 }).map(() => (
          <CoffeeCard>
            <img src={TradicionalExpresso} alt='' />
            <CoffeeCardBadge>
              <span>tradicional</span>
            </CoffeeCardBadge>
            <span id='cardTitle'>Expresso Tradicional</span>
            <p id='cardSubTitle'>
              O tradicional café feito com água quente e grãos moídos
            </p>
            <CoffeeCardInfoContainer>
              <CoffeeCardPrice>
                <span id='prefix'>R$</span>
                <span id='price'>9,90</span>
              </CoffeeCardPrice>

              <CoffeeCardActions>
                <CoffeeCounterButton>
                  <button>
                    <Minus size={14} weight='bold' />
                  </button>
                  <span id='counter'>1</span>
                  <button>
                    <Plus size={14} weight='bold' />
                  </button>
                </CoffeeCounterButton>

                <button id='buy'>
                  <ShoppingCartSimple size={22} weight='fill' />
                </button>
              </CoffeeCardActions>
            </CoffeeCardInfoContainer>
          </CoffeeCard>
        ))}
      </CoffeeListGridContainer>
    </HomeContainer>
  );
}
