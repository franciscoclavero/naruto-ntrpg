import React from 'react'

import { StatusBarItemStyled } from './style.module'

export interface IStatusBarItem {
  color: string
}

const StatusBarItem = ({ color }: IStatusBarItem) => {
  return <StatusBarItemStyled color={color} />
}

export default StatusBarItem
