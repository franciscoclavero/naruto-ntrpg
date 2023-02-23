import React from 'react'
import { useAppSelector } from '../../../redux/hooks/useSelector'
import DynamicMenuContentArea from '../DynamicMenuContentArea'
import Parchment from '../Parchment'

import { DynamicMenuArea } from './style.module'

type TDynamicOption = {
  contentText: string
  click: () => void
}

export interface IDynamicOptions {
  options: TDynamicOption[]
}

const DynamicMenu = ({ options }: IDynamicOptions) => {
  const characterMenu = useAppSelector((store) => store.characterMenu)

  return (
    <DynamicMenuArea
      left={characterMenu.left}
      top={characterMenu.top}
      visible={characterMenu.visible}
    >
      <Parchment
        width='300px'
        height='50px'
        backgroundColor='#925362'
        parchmentCenter={{
          width: '92px',
          backgroundColor: '#E4D79A',
          borderColor: '#2F3348',
          borderSize: '15px',
          textContent: '',
          textSize: '',
        }}
      />
      <DynamicMenuContentArea options={options} />
    </DynamicMenuArea>
  )
}

export default DynamicMenu

// pegar o offsetLeft e offsetTop
