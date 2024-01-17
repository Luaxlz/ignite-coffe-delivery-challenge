import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  width: 100%;
  height: 100%;

  form {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 40px 160px;
  }
`;

export const CheckoutTitle = styled.div`
  font-family: 'Baloo 2';
  font-size: ${(props) => props.theme.fontSize['title-xs']};
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 130%;
  font-weight: 700;
  margin-bottom: 0.93rem;
`;

export const OrderFormContainer = styled.div`
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const OrderForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 23.25rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  gap: 2rem;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  input {
    height: 2.625rem;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    color: ${(props) => props.theme['base-text']};
    padding: 0.75rem;
    outline: none;
    font-size: ${(props) => props.theme.fontSize['text-s']};
  }

  input:focus {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  input input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  #cepInput {
    width: 12.5rem;
  }

  #streetInput {
    width: 100%;
  }

  #inputWrapper1 {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;

    #numberInput {
      width: 12.5rem;
    }

    #complementInput {
      flex: 1;
    }
  }

  #inputWrapper2 {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;

    #bairroInput {
      width: 12.5rem;
    }

    #cityInput {
      flex: 1;
    }

    #ufInput {
      width: 3.75rem;
    }
  }
`;

export const PaymentActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  width: 35rem;
  height: 3.1875rem;

  button {
    display: flex;
    flex: 1;
    gap: 0.75rem;
    padding: 0 1rem;
    align-items: center;
    justify-content: flex-start;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    cursor: pointer;
    .paymentButtonIcon {
      color: ${(props) => props.theme['purple']};
    }
  }

  button:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    transition: all 0.2s;
  }

  button:active {
    background-color: ${(props) => props.theme['purple-light']};
  }
`;

export const OrderProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  max-height: 100%;
  gap: 0.75rem;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
  gap: 2rem;

  #productsContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  #confirmOrderButton {
    border: 0;
    border-radius: 6px;
    width: 100%;
    height: 2.875rem;
    background-color: ${(props) => props.theme['yellow']};
    color: ${(props) => props.theme['white']};
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize['button-g']};
    font-weight: 700;
    line-height: 160%;
    cursor: pointer;
  }

  #confirmOrderButton:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    transition: all 0.2s;
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 5.75rem;
  gap: 0.75rem;
  align-items: flex-start;

  .resumeInfo {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    font-size: ${(props) => props.theme.fontSize['text-s']};
    color: ${(props) => props.theme['base-text']};

    .resumeValue {
      font-size: ${(props) => props.theme.fontSize['text-m']};
    }
  }

  #totalInfo {
    font-size: ${(props) => props.theme.fontSize['text-l']};
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid ${(props) => props.theme['base-button']};
`;
