import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import {
  InfoContent,
  InfoContainer,
  Order,
  OrderTitle,
  SuccessContainer,
} from './styles';
import SuccessImage from '../../assets/SuccessIllustration.svg';
import { useTheme } from 'styled-components';

export function Success() {
  const theme = useTheme();
  return (
    <SuccessContainer>
      <Order>
        <OrderTitle>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </OrderTitle>
        <InfoContainer>
          <InfoContent>
            <div>
              <MapPin
                color={theme.white}
                style={{ backgroundColor: theme.purple }}
                size={32}
              />

              <div>
                <span>
                  Entrega em <strong>Rua Qualquer, Numero</strong>
                </span>
                <span>Bairro - Cidade, UF</span>
              </div>
            </div>

            <div>
              <Timer
                color={theme.white}
                style={{ backgroundColor: theme.yellow }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={theme.white}
                style={{ backgroundColor: theme['yellow-dark'] }}
                size={32}
              />

              <div>
                <span>Pamento na entrega</span>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </InfoContent>
        </InfoContainer>
      </Order>

      <img src={SuccessImage} alt='Pedido realizado' />
    </SuccessContainer>
  );
}
