import React from 'react'
import { charactersList } from '../../../DB/charactersList'
import { getCharacter } from '../../../functions/getCharacter'

import { CharacterImageStyled } from './style.module'

interface IImageCharacter {
  id: number
}

const CharacterImage = ({ id }: IImageCharacter) => {
  const { sprite } = getCharacter(charactersList, id)
  return <CharacterImageStyled src={sprite} />
}

export default CharacterImage
