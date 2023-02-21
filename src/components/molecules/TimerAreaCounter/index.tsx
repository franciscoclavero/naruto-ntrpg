import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../redux/hooks/useSelector'

import { setInitialPosition } from '../../../redux/reducers/timerReducer'
import { TimeAreaCounterStyled, TimerText } from './style.module'

const TimerAreaCounter = () => {
  const timer = useAppSelector((state) => state.timer)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(setInitialPosition(0))
      clearTimeout
    }, 1000)
  }, [timer.initialPosition])

  return (
    <>
      <TimeAreaCounterStyled initialPosition={timer.initialPosition} time={timer.time} />
      <TimerText width={timer.width}> {timer.labelText} </TimerText>
    </>
  )
}

export default TimerAreaCounter
