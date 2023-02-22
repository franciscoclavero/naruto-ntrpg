import React from 'react'
import CharacterEffectsArea from '../CharacterEffectsArea'
import CharacterLifeArea from '../CharacterLifeArea'

import { CharacterDaraAreaStyled, CharacterEffectFlex } from './style.module'

const CharacterDataArea = () => {
  return (
    <CharacterDaraAreaStyled>
      <CharacterEffectFlex>
        <span>Naruto</span>
        <CharacterEffectsArea />
      </CharacterEffectFlex>
      <CharacterLifeArea />
    </CharacterDaraAreaStyled>
  )
}

export default CharacterDataArea
