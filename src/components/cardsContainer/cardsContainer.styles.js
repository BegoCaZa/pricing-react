import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
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
  }
`;
const StyledPlanTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${({ plan }) =>
    plan === 'Professional' ? COLORS.white : COLORS.darkGrey};
`;
const StyledPrice = styled.p`
  font-size: 72px;
  font-weight: 700;
  margin: 0;
  padding: 24px;
  color: ${({ plan }) =>
    plan === 'Professional' ? COLORS.white : COLORS.darkGrey};
`;
const StyledCardPlanInfoText = styled.p`
  font-size: 15px;
  font-weight: 600;
  border-top: 1px solid
    ${({ plan }) => (plan === 'Professional' ? COLORS.white : COLORS.lightGrey)};
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
    plan === 'Professional' ? COLORS.darkGrey : COLORS.white};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  margin: 0;

  }
`;

export {
  StyledCardsContainer,
  StyledCard,
  StyledPlanTitle,
  StyledPrice,
  StyledButton,
  StyledCardPlanInfoText
};
