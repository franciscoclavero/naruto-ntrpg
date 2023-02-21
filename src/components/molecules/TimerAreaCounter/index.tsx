import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../redux/hooks/useSelector'

import { TimeAreaCounterStyled, TimerText } from './style.module'

const TimerAreaCounter = () => {
  const timer = useAppSelector((state) => state.timer)
  const [counterPosition, setCounterPosition] = useState((100 * timer.initialPosition) / timer.time)

  useEffect(() => {
    setCounterPosition(0)
  }, [])

  return (
    <>
      <TimeAreaCounterStyled
        counterPosition={counterPosition}
        time={timer.time}
        initialPosition={timer.initialPosition}
      />
      <TimerText width={timer.width}> {timer.labelText} </TimerText>
    </>
  )
}

export default TimerAreaCounter
