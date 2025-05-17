import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.25rem;
  gap: 2rem;

  //Web
  @media (min-width: 1080px) {
    flex-direction: row;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

const StyledCard = styled.div`
  background: ${({ plan }) =>
    plan === 'Professional' ? COLORS.lilac : COLORS.white};
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 327px;
  margin-inline: auto;
  align-items: center;
  justify-content: center;
    gap: 2rem;
  }
`;
const StyledPlanTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
  color: ${({ plan }) =>
    plan === 'Professional' ? COLORS.white : COLORS.darkGrey};
`;
const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  gap: 0.5rem;
  margin: 0;
  justify-content: center;
  align-items: center;
`;
const StyledPrice = styled.p`
  font-size: ${({ active }) => (active ? '2.5rem' : '4.25rem')};
  font-weight: 700;
  margin: 0;
  padding: 1.5rem;
  color: ${({ plan }) =>
    plan === 'Professional' ? COLORS.white : COLORS.darkGrey};
`;

const StyledStorageUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  border-top: 0.0625rem solid
    ${({ plan }) =>
      plan === 'Professional' ? COLORS.lightWhite : COLORS.lightGrey};
`;
const StyledCardPlanInfoText = styled.p`
  font-size: 0.9375rem;
  font-weight: 600;
  border-bottom: 0.0625rem solid
    ${({ plan }) =>
      plan === 'Professional' ? COLORS.lightWhite : COLORS.lightGrey};
  padding: 0.875rem;
  margin: 0;
  width: 100%;
  text-align: center;
  color: ${({ plan }) =>
    plan === 'Professional' ? COLORS.white : COLORS.darkGrey};
`;

const StyledButton = styled.button`
  background: ${({ plan }) =>
    plan === 'Professional' ? COLORS.white : COLORS.lilac};
  color: ${({ plan }) =>
    plan === 'Professional' ? COLORS.grey : COLORS.white};
  border: none;
  border-radius: 0.625rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 700;
  margin: 0;
  width: 100%;
  padding: 1rem;

  &:hover {
    background: ${({ plan }) =>
      plan === 'Professional' ? 'transparent' : COLORS.white};
    color: ${({ plan }) =>
      plan === 'Professional' ? COLORS.white : COLORS.lilacSolid};
    border: solid 1px
      ${({ plan }) =>
        plan === 'Professional' ? COLORS.white : COLORS.lilacSolid};
  }
`;

export {
  StyledCardsContainer,
  StyledCard,
  StyledPlanTitle,
  StyledPrice,
  StyledButton,
  StyledStorageUsersContainer,
  StyledCardPlanInfoText,
  StyledInfoContainer
};
