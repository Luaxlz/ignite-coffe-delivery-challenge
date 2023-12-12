import { InfoContainer, InfoText } from './styles';

interface TitleInfoProps {
  Icon: React.ElementType;
  title: string;
  subtitle: string;
  color: string;
}

export const TitleInfo = ({ Icon, title, subtitle, color }: TitleInfoProps) => {
  return (
    <InfoContainer color={color}>
      <Icon size={22} />
      <InfoText>
        <span id='title'>{title}</span>
        <span id='subtitle'>{subtitle}</span>
      </InfoText>
    </InfoContainer>
  );
};
