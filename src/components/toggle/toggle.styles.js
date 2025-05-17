import styled from 'styled-components';

const StyledInput = styled.input`
  display: none;
  &:checked + label::before {
    transform: translateX(26px);
  }
`;

const StyledLabel = styled.label`
  width: 50px;
  height: 26px;
  border-radius: 15px;
  background: linear-gradient(to right, #9f9ff1, #8e8ef4);

  position: relative;
  display: inline-block;
  transition: 0.3s;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    height: 20px;
    width: 20px;
    left: 3px;
    top: 3px;
    border-radius: 50%;
    background: white;
    transition: 0.3s;
  }
`;

export { StyledInput, StyledLabel };
