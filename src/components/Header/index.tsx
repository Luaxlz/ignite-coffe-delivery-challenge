import { HeaderContainer } from './styles';
import LogoCoffeeDelivery from '../../assets/Logo/Logo@ignite-coffe-delivery.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt='' />
      <nav>
        <NavLink to='/' id='location'>
          <MapPin size={22} weight='fill' />
          <span>Porto Alegre, RS</span>
        </NavLink>
        <NavLink to='/checkout' id='cart'>
          <ShoppingCart size={22} weight='fill' />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
