import React from 'react'
import { charactersList } from '../../../DB/charactersList'
import { getItem } from '../../../functions/getItem'

import { CharacterImageStyled } from './style.module'

interface IImageCharacter {
  id: number
}

const CharacterImage = ({ id }: IImageCharacter) => {
  const { sprite } = getItem(charactersList, id)
  return <CharacterImageStyled src={sprite} />
}

export default CharacterImage
