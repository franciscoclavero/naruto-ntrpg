import React from 'react'

import { ParchmentRollStyled } from './style.module'

export interface IParchmentRoll {
  height: string
  left: string
}

const ParchmentRoll = ({ height, left }: IParchmentRoll) => {
  return <ParchmentRollStyled height={height} left={left} />
}

export default ParchmentRoll
