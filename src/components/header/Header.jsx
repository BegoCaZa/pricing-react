import Toggle from '../toggle/Toggle';
import { StyledHeaderContainer, StyledTitle } from './header.styles';

const Header = ({ setActive, active }) => {
  return (
    <>
      <StyledHeaderContainer>
        <StyledTitle>Our Prices</StyledTitle>
        <Toggle setActive={setActive} active={active} />
      </StyledHeaderContainer>
    </>
  );
};
export default Header;
