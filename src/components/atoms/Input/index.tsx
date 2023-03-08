import React from 'react'

import { InputStyled } from './styled.module'

interface IInput {
  type: string
  id: string
}

const Input = ({ type, id }: IInput) => {
  return <InputStyled type={type} name={id} />
}

export default Input
