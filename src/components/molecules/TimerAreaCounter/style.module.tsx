import styled from 'styled-components'

interface ITimerAreaCounter {
  counterPosition: number
  time: number
  initialPosition: number
}

export const TimeAreaCounterStyled = styled.div<ITimerAreaCounter>`
  background-color: #f05321;
  height: 100%;
  width: ${(props) => props.counterPosition}%;

  ${(props) => {
    let transition = ''

    if (props.counterPosition === 0)
      transition = `transition: width ${props.initialPosition}s linear`
    if (props.counterPosition > 0) transition = `transition: width 0s linear`

    return transition
  }}
`
interface ITimerAreaText {
  width: string
}

export const TimerText = styled.span<ITimerAreaText>`
  color: #fff;
  display: block;
  position: absolute;
  font-weight: bold;
  height: 44px;
  line-height: 44px;
  text-align: center;
  width: ${(props) => props.width};
`
