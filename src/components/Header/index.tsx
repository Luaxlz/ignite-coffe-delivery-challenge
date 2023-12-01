import { HeaderContainer } from './styles';
import LogoCoffeeDelivery from '../../assets/Logo/Logo@ignite-coffe-delivery.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt='' />
      <nav>
        <a href='' id='location'>
          <MapPin size={22} weight='fill' />
          <span>Porto Alegre, RS</span>
        </a>
        <a href='' id='cart'>
          <ShoppingCart size={22} weight='fill' />
        </a>
      </nav>
    </HeaderContainer>
  );
}
