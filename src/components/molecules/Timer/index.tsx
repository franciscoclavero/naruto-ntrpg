import React from 'react'
import TimerArea from '../TimerArea'
import TimerCenter from '../TimerCenter'
import TimerRoll from '../TimerRoll'

import { TimeBody, TimerParchmentBody } from './style.module'

const Timer = () => {
  return (
    <TimeBody>
      <TimerParchmentBody>
        <TimerRoll top='-4px' />
        <TimerCenter />
        <TimerRoll top='4px' />
      </TimerParchmentBody>
      <TimerArea />
    </TimeBody>
  )
}

export default Timer
