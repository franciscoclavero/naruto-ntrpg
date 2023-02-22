import React from 'react'

import CharacterEffect from '../CharacterEffect'

import { CharacterEffectAreaStyle } from './style.module'

const CharacterEffectsArea = () => {
  return (
    <CharacterEffectAreaStyle>
      <CharacterEffect />
      <CharacterEffect />
    </CharacterEffectAreaStyle>
  )
}

export default CharacterEffectsArea
