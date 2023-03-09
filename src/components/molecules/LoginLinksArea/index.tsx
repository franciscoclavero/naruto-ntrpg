import React from 'react'
import LinksAreaItem from '../../atoms/LinksAreaItem'

import { ListStyled } from './styled.module'

interface LoginArea {
  linksList: string[]
}

const LoginLinksArea = ({ linksList }: LoginArea) => {
  return (
    <ListStyled>
      {linksList.map((item, index) => {
        return <LinksAreaItem contentText={item} key={index} />
      })}
    </ListStyled>
  )
}

export default LoginLinksArea
