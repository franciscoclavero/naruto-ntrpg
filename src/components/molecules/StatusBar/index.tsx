import React from 'react'
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
