import React from 'react'
import Parchment from '../Parchment'

import { DynamicMenuArea, DynamicMenuContentArea, DynamicMenuOption } from './style.module'

type TDynamicOption = {
  contentText: string
  click: () => void
}

export interface IOptions {
  options: TDynamicOption[]
}

const DynamicMenu = ({ options }: IOptions) => {
  return (
    <DynamicMenuArea>
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
      <DynamicMenuContentArea>
        {options.map((item) => {
          return (
            <DynamicMenuOption onClick={item.click} key={item.contentText}>
              {item.contentText}
            </DynamicMenuOption>
          )
        })}
      </DynamicMenuContentArea>
    </DynamicMenuArea>
  )
}

export default DynamicMenu

// pegar o offsetLeft e offsetTop
