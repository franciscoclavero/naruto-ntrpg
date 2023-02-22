import React from 'react'
import { charactersList } from '../../../DB/charactersList'
import { getItem } from '../../../functions/getItem'
import { ICharacter } from '../CharacterArea'
import CharacterEffectsArea from '../CharacterEffectsArea'
import CharacterLifeArea from '../CharacterLifeArea'

import { CharacterDaraAreaStyled, CharacterEffectFlex } from './style.module'

const CharacterDataArea = ({ id, life, effectsIds }: ICharacter) => {
  const { name } = getItem(charactersList, id)

  return (
    <CharacterDaraAreaStyled>
      <CharacterEffectFlex>
        <span>{name}</span>
        <CharacterEffectsArea effectsIds={effectsIds} />
      </CharacterEffectFlex>
      <CharacterLifeArea life={life} />
    </CharacterDaraAreaStyled>
  )
}

export default CharacterDataArea
