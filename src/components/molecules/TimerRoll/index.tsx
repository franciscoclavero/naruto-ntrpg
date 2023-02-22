import React from 'react'

import { TimerRollStyled } from './style.module'

export interface ITimerRoll {
  top: string
}

const TimerRoll = ({ top }: ITimerRoll) => {
  return <TimerRollStyled top={top} />
}

export default TimerRoll
