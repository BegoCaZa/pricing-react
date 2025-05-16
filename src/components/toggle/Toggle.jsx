import { useState } from 'react';
import { StyledInput, StyledLabel } from '../toggle/toggle.styles';

const Toggle = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <StyledInput
        id='toggle'
        type='checkbox'
        onClick={() => setActive(!active)}
      />
      <StyledLabel htmlFor='toggle' />
    </>
  );
};

export default Toggle;
