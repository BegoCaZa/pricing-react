// import { useState } from 'react';
import { StyledInput, StyledLabel } from '../toggle/toggle.styles';

const Toggle = ({ setActive, active }) => {
  return (
    <>
      <StyledInput
        id='toggle'
        type='checkbox'
        onChange={() => setActive(!active)}
      />
      <StyledLabel htmlFor='toggle' />
    </>
  );
};

export default Toggle;
