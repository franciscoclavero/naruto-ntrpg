import React from 'react'
import { effectsList } from '../../../DB/effectsList'
import { getItem } from '../../../functions/getItem'

import CharacterEffect from '../CharacterEffect'

import { CharacterEffectAreaStyle } from './style.module'

interface IEffects {
  effectsIds: number[]
}

const CharacterEffectsArea = ({ effectsIds }: IEffects) => {
  return (
    <CharacterEffectAreaStyle>
      {effectsIds.map((id) => {
        const effect = getItem(effectsList, id)
        return <CharacterEffect key={id} name={effect.name} sprite={effect.sprite} />
      })}
    </CharacterEffectAreaStyle>
  )
}

export default CharacterEffectsArea
