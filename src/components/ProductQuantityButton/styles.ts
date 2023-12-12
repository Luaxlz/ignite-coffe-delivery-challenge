import styled from 'styled-components';

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

  button:hover {
    color: ${(props) => props.theme['purple-dark']};
    transition: all 0.2s;
  }

  #counter {
    font-size: ${(props) => props.theme.fontSize['text-m']};
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }
`;
