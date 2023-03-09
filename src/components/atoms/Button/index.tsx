import React from 'react'

import { ButtonStyled } from './styled.module'

interface IButton {
  contentText: string
}

const Button = ({ contentText }: IButton) => {
  return <ButtonStyled type='submit'>{contentText}</ButtonStyled>
}

export default Button
