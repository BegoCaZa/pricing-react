import { PRICING_INFO } from '../../constants/PRICING_INFO';
import {
  StyledCardsContainer,
  StyledCard,
  StyledPlanTitle,
  StyledPrice,
  StyledStorageUsersContainer,
  StyledButton,
  StyledCardPlanInfoText,
  StyledInfoContainer
} from './cardsContainer.styles';

//todo el contenedri va a recivir si esta en activo o no para pintar la informacion
const CardsContainer = ({ active }) => {
  return (
    // estilo del contenedor principal
    <StyledCardsContainer>
      {/* //estilo de cada card */}
      {PRICING_INFO.map((info, index) => (
        <StyledCard plan={info.plan} key={index}>
          <StyledInfoContainer>
            <StyledPlanTitle>{info.plan}</StyledPlanTitle>
            <StyledPrice>
              {active ? `$${info.annually}` : `$${info.monthly}`}
            </StyledPrice>
            <StyledStorageUsersContainer>
              <StyledCardPlanInfoText>{info.storage}</StyledCardPlanInfoText>
              <StyledCardPlanInfoText>{info.users}</StyledCardPlanInfoText>
              <StyledCardPlanInfoText>{info.send}</StyledCardPlanInfoText>
            </StyledStorageUsersContainer>
          </StyledInfoContainer>
          <StyledButton>LEARN MORE</StyledButton>
        </StyledCard>
      ))}
    </StyledCardsContainer>
  );
};
export default CardsContainer;
