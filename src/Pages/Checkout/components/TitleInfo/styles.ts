import styled from 'styled-components';

interface InfoContainerProps {
  color: string;
}

export const InfoContainer = styled.div<InfoContainerProps>`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme[props.color]};
  gap: 0.5rem;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;

  #title {
    font-size: ${(props) => props.theme.fontSize['text-m']};
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-weight: 400;
  }

  #subtitle {
    font-size: ${(props) => props.theme.fontSize['text-s']};
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-weight: 400;
  }
`;
