import React from 'react'

import { CharacterLifeStyled, LifeBar, TextLife } from './style.module'

interface ILife {
  life: number
}

const CharacterLifeArea = ({ life }: ILife) => {
  return (
    <CharacterLifeStyled>
      <LifeBar life={life} />
      <TextLife>{`${life}%`}</TextLife>
    </CharacterLifeStyled>
  )
}

export default CharacterLifeArea
