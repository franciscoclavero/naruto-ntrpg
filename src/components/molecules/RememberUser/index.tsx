import React from 'react'

import { RememberText, RememberUserStyled } from './styled.module'

interface IRememberCheck {
  id: string
}

const RememberUser = ({ id }: IRememberCheck) => {
  return (
    <RememberUserStyled>
      <input type='checkbox' name={id} />
      <RememberText> Lembrar Usuário </RememberText>
    </RememberUserStyled>
  )
}

export default RememberUser
