import styled from 'styled-components';

export const SuccessContainer = styled.main`
  display: flex;
  padding: 80px 160px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;

  img {
    margin-bottom: -13px;
  }
`;

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const OrderTitle = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;

  h2 {
    font-family: 'Baloo 2';
    font-size: ${(props) => props.theme.fontSize['title-l']};
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 800;
    line-height: 1.3;
  }

  span {
    font-size: ${(props) => props.theme.fontSize['text-l']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const InfoContainer = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
`;

export const InfoContent = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 6px 36px;
`;
