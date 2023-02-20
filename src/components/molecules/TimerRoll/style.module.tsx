import styled from 'styled-components'
import { ITimerRoll } from '.'

export const TimerRollStyled = styled.div<ITimerRoll>`
  background-color: #000;
  height: 3px;
  left: calc(25px / 4);
  position: relative;
  top: ${(props) => props.top};
  width: 10px;
`
