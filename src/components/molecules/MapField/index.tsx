import React from 'react'

import { MapFieldStyled } from './style.module'

export interface IMapField {
  numberLines: number
  numberColumns: number
  widthSize: number | string
  sprite: string
}

const MapField = ({ numberLines, numberColumns, widthSize, sprite }: IMapField) => {
  return (
    <MapFieldStyled
      numberColumns={numberColumns}
      numberLines={numberLines}
      widthSize={widthSize}
      sprite={sprite}
    >
      {sprite ? <img src={`${sprite != '' ? 'assets/' + sprite : ''}`} /> : ''}
    </MapFieldStyled>
  )
}

export default MapField
