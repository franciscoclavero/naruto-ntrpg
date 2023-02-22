import React, { useState } from 'react'

import { CharacterLifeStyled, LifeBar, TextLife } from './style.module'

const CharacterLifeArea = () => {
  const [life, setLife] = useState(40)

  return (
    <CharacterLifeStyled>
      <LifeBar life={life} />
      <TextLife>{`${life}%`}</TextLife>
    </CharacterLifeStyled>
  )
}

export default CharacterLifeArea
