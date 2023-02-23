import React from 'react'

import { StatusBarTextStyled } from './style.module'

interface IStatusBarText {
  textContent: string
}

const StatusBarText = ({ textContent }: IStatusBarText) => {
  return <StatusBarTextStyled>{textContent}</StatusBarTextStyled>
}

export default StatusBarText
