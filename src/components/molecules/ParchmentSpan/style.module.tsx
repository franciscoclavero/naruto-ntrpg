import styled from 'styled-components'
import { IParchmentSpan } from '.'

export const DivStyled = styled.div<IParchmentSpan>`
  font-size: ${(props) => props.textSize};
  transform: rotate(90deg);
`
