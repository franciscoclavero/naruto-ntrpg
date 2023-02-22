import React from 'react'
import PropTypes from 'prop-types'

import CharacterDataArea from '../CharacterDataArea'
import CharacterImage from '../CharacterImage'

import { CharacterAreaStyled } from './style.module'

export interface ICharacter {
  id: number
  life: number
  effectsIds: number[]
}

const CharacterArea = ({ id, life, effectsIds }: ICharacter) => {
  return (
    <CharacterAreaStyled>
      <CharacterImage id={id} />
      <CharacterDataArea id={id} life={life} effectsIds={effectsIds} />
    </CharacterAreaStyled>
  )
}

export default CharacterArea

CharacterArea.proptypes = {
  id: PropTypes.number.isRequired,
  life: PropTypes.number.isRequired,
  effectsIds: PropTypes.array.isRequired,
}
CharacterArea.defaultProps = {}
