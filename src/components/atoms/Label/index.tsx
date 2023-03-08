import React from 'react'

import { LabelStyled } from './styled.module'

interface ILabel {
  text: string
  id: string
}

const Label = ({ text, id }: ILabel) => {
  return <LabelStyled htmlFor={id}>{text}</LabelStyled>
}

export default Label
