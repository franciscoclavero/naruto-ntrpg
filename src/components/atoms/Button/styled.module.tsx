import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background: linear-gradient(90deg, #FCB117 0%, #F15721 100%);
  border: 1px solid #000000;
  border-radius: 4px;
  width: 185px;
  height: 40px;

  color: #FAFAFA;
  line-height: 40px;
  font-weight: bold;
  font-size: 18px;
  filter: drop-shadow(6px 6px 4px #000000);

  transition-property: background;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;

  cursor: pointer;

  position: relative;
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient( 90deg, #F15721 0%, #FCB117 100%);
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
`
