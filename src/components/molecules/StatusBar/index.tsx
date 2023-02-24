import React from 'react'
import PropTypes from 'prop-types'

import StatusBarItemArea from '../StatusBarItemArea'
import StatusBarText from '../StatusBarText'

import { StatusBarBody } from './style.module'

interface IStatusBar {
  textContent: string
  maxValue: number
  actualValue: number
  color: string
}

const StatusBar = ({ textContent, maxValue, actualValue, color }: IStatusBar) => {
  return (
    <StatusBarBody>
      <StatusBarText textContent={textContent} />
      <StatusBarItemArea actualValue={actualValue} color={color} maxValue={maxValue} />
    </StatusBarBody>
  )
}

export default StatusBar

StatusBar.propTypes = {
  textContent: PropTypes.string.isRequired,
  maxValue: PropTypes.number.isRequired,
  actualValue: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}
