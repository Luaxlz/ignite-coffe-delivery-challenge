import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px;
  nav {
    display: flex;
    gap: 0.75rem;

    #location {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 0.45rem;
      width: 8.9375rem;
      height: 2.37rem;
      border-radius: 6px;
      text-decoration: none;
      color: ${(props) => props.theme['purple']};
      background: ${(props) => props.theme['purple-light']};
    }
    #location > span {
      margin: 0;
      font-size: ${(props) => props.theme.fontSize['text-s']};
      color: ${(props) => props.theme['purple-dark']};
    }

    #cart {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 2.37rem;
      height: 2.37rem;
      border-radius: 6px;
      text-decoration: none;
      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
    }
    #cartContainer {
      display: flex;
      z-index: 1;
    }
  }
`;

export const CartCounter = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  left: -10px;
  top: -10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-dark']};
  z-index: 100;

  font-size: ${(props) => props.theme.fontSize['text-s']};
  font-weight: 400;
  color: ${(props) => props.theme.white};
`;
