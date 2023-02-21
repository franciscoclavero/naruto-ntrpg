import styled from 'styled-components'

interface ITimerAreaCounter {
  initialState: number
  width: string
}

export const TimeAreaCounterStyled = styled.div<ITimerAreaCounter>`
  background-color: #f05321;
  height: 100%;
  width: ${(props) => props.width};
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
