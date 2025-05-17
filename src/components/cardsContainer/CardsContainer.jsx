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

//todo el contenedor va a recivir si esta en activo o no para pintar la informacion
const CardsContainer = ({ active }) => {
  return (
    // estilo del contenedor principal
    <StyledCardsContainer>
      {/* //estilo de cada card */}
      {PRICING_INFO.map((info, index) => (
        <StyledCard plan={info.plan} key={index}>
          <StyledInfoContainer>
            <StyledPlanTitle plan={info.plan}>{info.plan}</StyledPlanTitle>
            <StyledPrice plan={info.plan}>
              {active ? `$${info.annually}` : `$${info.monthly}`}
            </StyledPrice>
            <StyledStorageUsersContainer plan={info.plan}>
              <StyledCardPlanInfoText plan={info.plan}>
                {info.storage}
              </StyledCardPlanInfoText>
              <StyledCardPlanInfoText plan={info.plan}>
                {info.users}
              </StyledCardPlanInfoText>
              <StyledCardPlanInfoText plan={info.plan}>
                {info.send}
              </StyledCardPlanInfoText>
            </StyledStorageUsersContainer>
          </StyledInfoContainer>
          <StyledButton plan={info.plan}>LEARN MORE</StyledButton>
        </StyledCard>
      ))}
    </StyledCardsContainer>
  );
};
export default CardsContainer;
