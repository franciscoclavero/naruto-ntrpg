import React from 'react'
import ParchmentSpan from '../ParchmentSpan'

import { ParchmentLabelCenter } from './style.module'

export type TParchmentLabel = {
  width: string
  backgroundColor?: string
  borderColor?: string
  borderSize?: string
  textContent: string
}

const ParchmentCenter = ({
  textContent,
  width,
  backgroundColor = 'white',
  borderColor = 'transparent',
  borderSize = '0px',
}: TParchmentLabel) => {
  return (
    <ParchmentLabelCenter
      width={width}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderSize={borderSize}
    >
      <ParchmentSpan textContent={textContent} />
    </ParchmentLabelCenter>
  )
}

export default ParchmentCenter
