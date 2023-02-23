import React from 'react'
import { IDynamicOptions } from '../DynamicMenu'
import DynamicMenuOption from '../DynamicMenuOption'

import { DynamicMenuContentAreaStyled } from './style.module'

const DynamicMenuContentArea = ({ options }: IDynamicOptions) => {
  return (
    <DynamicMenuContentAreaStyled>
      {options.map((item) => {
        return (
          <DynamicMenuOption
            click={item.click}
            contentText={item.contentText}
            key={item.contentText}
          />
        )
      })}
    </DynamicMenuContentAreaStyled>
  )
}

export default DynamicMenuContentArea
