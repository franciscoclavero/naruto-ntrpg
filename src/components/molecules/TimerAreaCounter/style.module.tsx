import styled from 'styled-components'

interface ITimerAreaCounter {
  initialPosition: number
  time: number
}

export const TimeAreaCounterStyled = styled.div<ITimerAreaCounter>`
  background-color: #f05321;
  height: 100%;
  width: calc((${(props) => props.initialPosition} / ${(props) => props.time}) * 100%);

  transition: width ${(props) => props.time}s linear;
`

interface ITimerAreaText {
  width: string
}

export const TimerText = styled.span<ITimerAreaText>`
  color: #fff;
  display: block;
  font-weight: bold;
  height: 44px;
  line-height: 44px;
  position: absolute;
  text-align: center;
  width: ${(props) => props.width};
`
