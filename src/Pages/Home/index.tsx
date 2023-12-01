import {
  CoffeeListGridContainer,
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
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

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
      <CoffeeListGridContainer>Coffee List</CoffeeListGridContainer>
    </HomeContainer>
  );
}
