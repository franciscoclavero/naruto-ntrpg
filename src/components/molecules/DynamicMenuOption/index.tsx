import React from 'react'

import { DynamicMenuOptionStyled } from './style.module'

interface TDynamicMenuOption {
  contentText: string
  click: () => void
}

const DynamicMenuOption = ({ contentText, click }: TDynamicMenuOption) => {
  return <DynamicMenuOptionStyled onClick={click}>{contentText}</DynamicMenuOptionStyled>
}

export default DynamicMenuOption
