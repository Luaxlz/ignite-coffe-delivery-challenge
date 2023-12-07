import styled from 'styled-components';
import backgroundImage from '../../assets/Home/Background@ignite-coffe-delivery.svg';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  #coffeeListTitle {
    padding: 0 10rem;
    font-family: 'Baloo 2';
    font-size: ${(props) => props.theme.fontSize['title-l']};
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3rem;
  }
`;

export const IntroGridContainer = styled.div`
  display: grid;
  grid-template-columns: 36.75rem 29rem;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 0px;
  width: 100%;
  height: 34rem;
  background-image: url(${backgroundImage});
  background-size: auto;
  background-position: center;
  box-shadow: 0 0 8px 8px ${(props) => props.theme['background']} inset;
  margin-bottom: 5rem;
  padding: 0 10rem;
`;

export const IntroTitleGrid = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

export const IntroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-family: 'Baloo 2';
    font-size: ${(props) => props.theme.fontSize['title-xl']};
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    font-weight: 800;
  }

  p {
    font-family: 'Roboto';
    font-size: ${(props) => props.theme.fontSize['text-l']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const IntroItemsGrid = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  margin-top: 4rem;
`;

export const IntroTopicGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 20px;
`;

export const IntroTopicItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: ${(props) => props.theme['background']};
  }

  #icon1 {
    background: ${(props) => props.theme['yellow-dark']};
  }
  #icon2 {
    background: ${(props) => props.theme['base-text']};
  }
  #icon3 {
    background: ${(props) => props.theme['yellow']};
  }
  #icon4 {
    background: ${(props) => props.theme['purple']};
  }

  span {
    font-size: ${(props) => props.theme.fontSize['text-m']};
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const IntroImageGrid = styled.div`
  grid-area: 1 / 2 / 3 / 3;

  img {
    width: auto;
    height: auto;
  }
`;

export const CoffeeListGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 40px;
  padding: 0 10rem;
`;

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }

  #cardTitle {
    font-family: 'Baloo 2';
    font-size: ${(props) => props.theme.fontSize['title-s']};
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  #cardSubTitle {
    font-size: ${(props) => props.theme.fontSize['text-s']};
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    max-width: 13.5rem;
    margin-bottom: 2.06rem;
  }
`;

export const CoffeeCardBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.06rem;
  height: 1.31rem;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  margin: 0.75rem auto 1rem;

  span {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: ${(props) => props.theme.fontSize['tag']};
    line-height: 130%;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const CoffeeCardInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 13rem;
  gap: 1.43rem;
`;
export const CoffeeCardPrice = styled.div`
  text-align: right;

  #prefix {
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    font-size: ${(props) => props.theme.fontSize['text-s']};
    margin-right: 0.2rem;
  }

  #price {
    font-family: 'Baloo 2';
    font-size: ${(props) => props.theme.fontSize['title-m']};
    color: ${(props) => props.theme['base-text']};
    font-weight: 800;
  }
`;

export const CoffeeCardActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  #buy {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    border: 0;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const CoffeeCounterButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 4.5rem;
  height: 2.375rem;
  background: ${(props) => props.theme['base-button']};
  padding: 0 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;

  button {
    color: ${(props) => props.theme['purple']};
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  #counter {
    font-size: ${(props) => props.theme.fontSize['text-m']};
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }
`;
