import React from 'react'
import { useAppSelector } from '../../../redux/hooks/useSelector'
import PropTypes from 'prop-types'

import DynamicMenuContentArea from '../DynamicMenuContentArea'
import Parchment from '../Parchment'

import { DynamicMenuArea } from './style.module'

type TDynamicOption = {
  contentText: string
  click: () => void
}

export interface IDynamicOptions {
  options: TDynamicOption[]
  visibleStorybook?: boolean
}

const DynamicMenu = ({ options, visibleStorybook }: IDynamicOptions) => {
  const characterMenu = useAppSelector((store) => store.characterMenu)

  return (
    <DynamicMenuArea
      left={characterMenu.left}
      top={characterMenu.top}
      visible={visibleStorybook ? visibleStorybook : characterMenu.visible}
    >
      <Parchment
        width='320px'
        height='50px'
        backgroundColor='#925362'
        border='2px'
        parchmentCenter={{
          width: '92px',
          backgroundColor: '#E4D79A',
          borderColor: '#2F3348',
          borderSize: '15px',
          textContent: '',
          textSize: '',
        }}
      />
      <DynamicMenuContentArea options={options} visibleStorybook={visibleStorybook} />
    </DynamicMenuArea>
  )
}

export default DynamicMenu

DynamicMenu.proptypes = {
  options: PropTypes.shape({
    contentText: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
  }),
  visibleStorybook: PropTypes.bool,
}

DynamicMenu.defaultProps = {
  options: {
    contentText: 'Texto',
    click: () => {
      console.log('Ação')
    },
  },
}
