import React from 'react'

import { DivStyled } from './style.module'

export interface IParchmentSpan {
  textContent?: string
  textSize: string
}

const ParchmentSpan = ({ textContent, textSize }: IParchmentSpan) => {
  return <DivStyled textSize={textSize}> {textContent} </DivStyled>
}

export default ParchmentSpan
