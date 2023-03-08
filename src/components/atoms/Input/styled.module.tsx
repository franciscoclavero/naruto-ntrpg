import styled from 'styled-components'

export const InputStyled = styled.input`
  height: 30px;
  width: 80%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 4px;
  color: #fff;

  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0);
  }
`
