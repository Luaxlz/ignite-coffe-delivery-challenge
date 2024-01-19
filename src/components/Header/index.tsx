import { CartCounter, HeaderContainer } from './styles';
import LogoCoffeeDelivery from '../../assets/Logo/Logo@ignite-coffe-delivery.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Header() {
  const { cart } = useContext(CartContext);
  const cartItemsCount = cart.reduce((previuosValue, currentItem) => {
    return (previuosValue += currentItem.quantity);
  }, 0);

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={LogoCoffeeDelivery} alt='' />
      </NavLink>
      <nav>
        <div id='location'>
          <MapPin size={22} weight='fill' />
          <span>Porto Alegre, RS</span>
        </div>
        <div id='cartContainer'>
          <NavLink to='/checkout' id='cart'>
            <ShoppingCart size={22} weight='fill' />
          </NavLink>
          {cartItemsCount >= 1 ? (
            <CartCounter>
              {cartItemsCount > 99 ? 99 : cartItemsCount}
            </CartCounter>
          ) : null}
        </div>
      </nav>
    </HeaderContainer>
  );
}
