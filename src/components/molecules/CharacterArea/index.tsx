import React from 'react'
import CharacterDataArea from '../CharacterDataArea'
import CharacterImage from '../CharacterImage'

import { CharacterAreaStyled } from './style.module'

const CharacterArea = () => {
  return (
    <CharacterAreaStyled>
      <CharacterImage />
      <CharacterDataArea />
    </CharacterAreaStyled>
  )
}

export default CharacterArea
