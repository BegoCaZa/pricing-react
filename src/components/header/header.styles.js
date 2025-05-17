import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

const StyledHeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
const StyledTitle = styled.h1`
  font-size: 24px;
  color: ${COLORS.grey};
`;

const StyledToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  @media (min-width: 1080px) {
    width: 25%;
`;
const StyledToggelOption = styled.span`
  font-size: 15px;
  color: ${COLORS.lightGrey};
  font-weight: 700;
`;

export {
  StyledHeaderContainer,
  StyledTitle,
  StyledToggleContainer,
  StyledToggelOption
};
