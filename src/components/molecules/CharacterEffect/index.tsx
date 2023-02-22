import React from 'react'

import { CharacterEffectStyle } from './style.module'

interface IEffect {
  name: string
  sprite: string
}

const CharacterEffect = ({ name, sprite }: IEffect) => {
  return (
    <CharacterEffectStyle>
      <abbr title={name}>
        <img src={sprite} alt={name} />
      </abbr>
    </CharacterEffectStyle>
  )
}

export default CharacterEffect
