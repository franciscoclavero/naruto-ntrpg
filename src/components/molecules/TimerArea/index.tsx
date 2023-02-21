import React from 'react'
import { useAppSelector } from '../../../redux/hooks/useSelector'

import TimerAreaCounter from '../TimerAreaCounter'

import { TimeAreaStyled } from './style.module'

const TimerArea = () => {
  const timer = useAppSelector((state) => state.timer)

  return (
    <TimeAreaStyled width={timer.width}>
      <TimerAreaCounter />
    </TimeAreaStyled>
  )
}

export default TimerArea
