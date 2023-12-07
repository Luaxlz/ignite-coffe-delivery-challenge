import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 2rem;
  padding: 2.5rem 10rem;
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
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const OrderForm = styled.div`
  display: flex;
  width: 40rem;
  height: 23.25rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`;

export const PaymentContainer = styled.div`
  display: flex;
  width: 40rem;
  height: 12.93rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`;

export const FormInfo = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme['yellow-dark']};
  gap: 0.5rem;
`;

export const FormInfoText = styled.div`
  display: flex;
  flex-direction: column;

  #title {
    font-size: ${(props) => props.theme.fontSize['text-m']};
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-weight: 400;
  }
`;

export const OrderProductsContainer = styled.div``;
