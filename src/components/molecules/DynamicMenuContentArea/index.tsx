import React from 'react'
import { useAppSelector } from '../../../redux/hooks/useSelector'
import { IDynamicOptions } from '../DynamicMenu'
import DynamicMenuOption from '../DynamicMenuOption'

import { DynamicMenuContentAreaStyled } from './style.module'

const DynamicMenuContentArea = ({ options }: IDynamicOptions) => {
  const characterMenu = useAppSelector((store) => store.characterMenu)

  return (
    <DynamicMenuContentAreaStyled visible={characterMenu.visible}>
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
