import styled from 'styled-components';
import backgroundImage from '../../assets/Home/Background@ignite-coffe-delivery.svg';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 10rem;
`;

export const IntroGridContainer = styled.div`
  display: grid;
  grid-template-columns: 36.75rem 29rem;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 0px;
  height: 34rem;
  background-image: url(${backgroundImage});
  background-size: contain;
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
    width: 100%;
    height: auto;
  }
`;

export const CoffeeListGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 40px;
`;
