import React from 'react'
import { ItemListStyled } from './styled.module'

interface ILinkItem {
  contentText: string
}

const LinksAreaItem = ({ contentText }: ILinkItem) => {
  return <ItemListStyled>{contentText}</ItemListStyled>
}

export default LinksAreaItem
