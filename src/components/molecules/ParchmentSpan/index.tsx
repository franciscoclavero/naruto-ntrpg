import React from 'react'

import { SpanStyled } from './style.module'

interface IParchmentSpan {
  textContent?: string
}

const ParchmentSpan = ({ textContent }: IParchmentSpan) => {
  return <SpanStyled> {textContent} </SpanStyled>
}

export default ParchmentSpan
