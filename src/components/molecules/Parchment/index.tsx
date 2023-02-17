import React from 'react'
import ParchmentCenter, { TParchmentLabel } from '../ParchmentCenter'
import ParchmentRoll from '../ParchmentRoll'

import { ParchmentBody } from './style.module'

interface IParchment {
  height: string
  width: string
  backgroundColor: string
  parchmentCenter: TParchmentLabel
}

const Parchment = ({ height, width, backgroundColor, parchmentCenter }: IParchment) => {
  return (
    <ParchmentBody height={height} width={width} backgroundColor={backgroundColor}>
      <ParchmentRoll height={height} left='-14px' />
      <ParchmentCenter
        textContent={parchmentCenter.textContent}
        width={parchmentCenter.width}
        backgroundColor={parchmentCenter.backgroundColor}
        borderSize={parchmentCenter.borderSize}
        borderColor={parchmentCenter.borderColor}
      />
      <ParchmentRoll height={height} left='14px' />
    </ParchmentBody>
  )
}

export default Parchment

//
// width={parchmentLabel.width}
// backgroundColor={parchmentLabel.backgroundColor}
// borderColor={parchmentLabel.borderColor}
// borderSize={parchmentLabel.borderSize}
// textContent={parchmentLabel.textContent}
