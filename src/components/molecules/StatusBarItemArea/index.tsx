import React from 'react'

import { StatusBarItemAreaStyled, StatusBarItem } from './style.module'

interface IStatusBar {
  maxValue: number
  actualValue: number
  color: string
}

const StatusBarItemArea = ({ maxValue, actualValue, color }: IStatusBar) => {
  return (
    <StatusBarItemAreaStyled>
      <StatusBarItem />
      <StatusBarItem />
      <StatusBarItem />
      <StatusBarItem />
    </StatusBarItemAreaStyled>
  )
}

export default StatusBarItemArea
