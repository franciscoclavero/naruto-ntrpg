import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  setTime,
  setLabelText,
  setInitialPosition,
  setWidth,
} from '../../../redux/reducers/timerReducer'

import TimerArea from '../TimerArea'
import TimerCenter from '../TimerCenter'
import TimerRoll from '../TimerRoll'

import { TimeBody, TimerParchmentBody } from './style.module'

interface ITimer {
  initialPosition: number
  labelText: string
  time: number
  width: string
}

const Timer = ({ initialPosition, labelText, time, width }: ITimer) => {
  const dispatch = useDispatch()
  dispatch(setInitialPosition(initialPosition))
  dispatch(setLabelText(labelText))
  dispatch(setTime(time))
  dispatch(setWidth(width))

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

Timer.propTypes = {
  initialPosition: PropTypes.number.isRequired,
  labelText: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
}

Timer.defaultProps = {
  initialPosition: 10,
  labelText: 'Your Turn',
  time: 10,
  width: '300px',
}
