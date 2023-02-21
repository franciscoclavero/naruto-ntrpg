import React from 'react'
import { useAppSelector } from '../../../redux/hooks/useSelector'
import { TimeAreaCounterStyled, TimerText } from './style.module'

const TimerAreaCounter = () => {
  const timer = useAppSelector((state) => state.timer)

  return (
    <>
      <TimeAreaCounterStyled initialState={timer.initialPosition} width={timer.width} />
      <TimerText width={timer.width}> {timer.labelText} </TimerText>
    </>
  )
}

export default TimerAreaCounter
