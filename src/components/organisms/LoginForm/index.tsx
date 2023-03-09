import React from 'react'
import Button from '../../atoms/Button'

import InputLabel from '../../molecules/InputLabel'
import LoginLinksArea from '../../molecules/LoginLinksArea'
import RememberUser from '../../molecules/RememberUser'

import { ButtonContent, LoginFormStyled } from './styled.module'

const LoginForm = () => {
  const linksList = [
    'Esqueceu seu usuário ?',
    'Esqueceu sua senha ?',
    'Não tem conta ? Se cadastre.',
  ]
  return (
    <LoginFormStyled>
      <form>
        <InputLabel id='username' text='Usuário: ' type='text' />
        <InputLabel id='password' text='Senha: ' type='password' />

        <ButtonContent>
          <RememberUser id='remember' />
          <Button contentText='Login' />
        </ButtonContent>
      </form>
      <LoginLinksArea linksList={linksList} />
    </LoginFormStyled>
  )
}

export default LoginForm
