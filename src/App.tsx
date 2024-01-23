import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';
import { CartContextProvider } from './contexts/CartContext';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  );
}
