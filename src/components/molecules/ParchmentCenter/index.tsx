import React from 'react'

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
      {textContent}
    </ParchmentLabelCenter>
  )
}

export default ParchmentCenter
