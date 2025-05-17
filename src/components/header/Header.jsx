import Toggle from '../toggle/Toggle';
import {
  StyledHeaderContainer,
  StyledTitle,
  StyledToggleContainer,
  StyledToggelOption
} from './header.styles';

const Header = ({ setActive, active }) => {
  return (
    <>
      <StyledHeaderContainer>
        <StyledTitle>Our Prices</StyledTitle>
        <StyledToggleContainer>
          <StyledToggelOption>Monthly</StyledToggelOption>
          <Toggle setActive={setActive} active={active} />
          <StyledToggelOption>Monthly</StyledToggelOption>
        </StyledToggleContainer>
      </StyledHeaderContainer>
    </>
  );
};
export default Header;
