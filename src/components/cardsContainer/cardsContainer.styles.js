import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  margin-top: 20px;
`;

const StyledCard = styled.div`
  background: ${({ plan }) =>
    plan === 'Professional' ? COLORS.lilac : COLORS.white};
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 2rem;
  min-width: 220px;
  text-align: center;
  }
`;
const StyledPlanTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${({ plan }) =>
    plan === 'Professional' ? COLORS.white : COLORS.darkGrey};
`;
const StyledPrice = styled.p`
  font-size: 2rem;
  color: ${({ plan }) =>
    plan === 'Professional' ? COLORS.white : COLORS.darkGrey};
`;
const StyledStorage = styled.p`
  font-size: 1rem;
  color: ${({ plan }) =>
    plan === 'Professional' ? COLORS.white : COLORS.darkGrey};
`;
const StyledUsers = styled.p`
  font-size: 1rem;
  color: ${({ plan }) =>
    plan === 'Professional' ? COLORS.white : COLORS.darkGrey};
`;
const StyledSend = styled.p`
  font-size: 1rem;
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

  }
`;

export {
  StyledCardsContainer,
  StyledCard,
  StyledPlanTitle,
  StyledPrice,
  StyledStorage,
  StyledUsers,
  StyledSend,
  StyledButton
};
