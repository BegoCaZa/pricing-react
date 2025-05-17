import { PRICING_INFO } from '../../constants/PRICING_INFO';
import {
  StyledCardsContainer,
  StyledCard,
  StyledPlanTitle,
  StyledPrice,
  StyledStorage,
  StyledUsers,
  StyledSend,
  StyledButton
} from './cardsContainer.styles';

//todo el contenedri va a recivir si esta en activo o no para pintar la informacion
const CardsContainer = ({ active }) => {
  return (
    // estilo del contenedor principal
    <StyledCardsContainer>
      {/* //estilo de cada card */}
      {PRICING_INFO.map((info, index) => (
        <StyledCard plan={info.plan} key={index} active={active}>
          <StyledPlanTitle>{info.plan}</StyledPlanTitle>
          <StyledPrice>
            {active ? `$${info.annually}` : `$${info.monthly}`}
          </StyledPrice>
          <StyledStorage>{info.storage}</StyledStorage>
          <StyledUsers>{info.users}</StyledUsers>
          <StyledSend>{info.send}</StyledSend>
          <StyledButton>LEARN MORE</StyledButton>
        </StyledCard>
      ))}
    </StyledCardsContainer>
  );
};
export default CardsContainer;
