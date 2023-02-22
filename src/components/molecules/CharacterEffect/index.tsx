import React from 'react'

import { CharacterEffectStyle } from './style.module'

const CharacterEffect = () => {
  return (
    <CharacterEffectStyle>
      <abbr title='Nome Effect'>
        <img src='assets/characters/naruto.jpg' alt='Effect' />
      </abbr>
    </CharacterEffectStyle>
  )
}

export default CharacterEffect
