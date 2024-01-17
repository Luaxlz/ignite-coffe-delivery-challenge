import styled from 'styled-components';

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

export const Tags = styled.div`
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

export const Actions = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme['yellow-dark'] : theme['purple-dark']};
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
`;
