import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 32px;

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
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 327px;
  margin-inline: auto;
  align-items: center;
  justify-content: center;
    gap: 32px;
  }
`;
const StyledPlanTitle = styled.p`
  font-size: 18px;
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
  gap: 8px;
  margin: 0;
  justify-content: center;
  align-items: center;
`;
const StyledPrice = styled.p`
  font-size: ${({ active }) => (active ? '40px' : '68px')};
  font-weight: 700;
  margin: 0;
  padding: 24px;
  color: ${({ plan }) =>
    plan === 'Professional' ? COLORS.white : COLORS.darkGrey};
`;

const StyledStorageUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  border-top: 1px solid
    ${({ plan }) => (plan === 'Professional' ? COLORS.white : COLORS.lightGrey)};
`;
const StyledCardPlanInfoText = styled.p`
  font-size: 15px;
  font-weight: 600;
  border-bottom: 1px solid
    ${({ plan }) =>
      plan === 'Professional' ? COLORS.lightWhite : COLORS.lightGrey};
  padding: 14px;
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
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  margin: 0;
  width: 100%;
  padding: 16px;

  &:hover {
    background: ${({ plan }) =>
      plan === 'Professional' ? COLORS.lilac : COLORS.white};
    color: ${({ plan }) =>
      plan === 'Professional' ? COLORS.white : COLORS.lilac};
    border: 1px solid ${COLORS.lilac};
  }
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
