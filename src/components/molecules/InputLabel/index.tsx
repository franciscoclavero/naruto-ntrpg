import React from 'react'

import Input from '../../atoms/Input'
import Label from '../../atoms/Label'

import { InputLabelStyled } from './styled.module'

interface IInputForm {
  id: string
  type: string
  text: string
}

const InputLabel = ({ id, type, text }: IInputForm) => {
  return (
    <InputLabelStyled>
      <Label id={id} text={text} />
      <Input id={id} type={type} />
    </InputLabelStyled>
  )
}

export default InputLabel
