import styled from 'styled-components'
import { IParchmentRoll } from './'

export const ParchmentRollStyled = styled.div<IParchmentRoll>`
  background-color: #000;
  height: calc(${(props) => props.height} / 2);
  left: ${(props) => props.left};
  position: relative;
  top: calc(${(props) => props.height} / 4);
  width: 10px;
`
