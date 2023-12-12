import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 23rem;
  height: 5rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 0.5rem 0.25rem;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;

  #productImageContainer {
    width: 4rem;
    height: 4rem;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  #productInfoContainer {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;

    #productTitle {
      font-size: ${(props) => props.theme.fontSize['text-m']};
      color: ${(props) => props.theme['base-subtitle']};
    }

    #actionButtonsContainer {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

      #removeProductButton {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0 0.5rem;
        border: 0;
        border-radius: 6px;
        background-color: ${(props) => props.theme['base-button']};
        font-size: ${(props) => props.theme.fontSize['button-m']};
        color: ${(props) => props.theme['base-text']};
        text-transform: uppercase;
        cursor: pointer;

        #trashIcon {
          color: ${(props) => props.theme['purple']};
        }
      }

      #removeProductButton:hover {
        background-color: ${(props) => props.theme['base-hover']};
        color: ${(props) => props.theme['base-subtitle']};
        transition: all 0.2s;

        #trashIcon {
          color: ${(props) => props.theme['purple-dark']};
        }
      }
    }
  }
`;

export const ProductValueInfo = styled.div`
  font-size: ${(props) => props.theme.fontSize['text-m']};
  font-weight: 700;
  color: ${(props) => props.theme['base-text']};
`;
