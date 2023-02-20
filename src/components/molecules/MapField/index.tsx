import React from 'react'

import { MapFieldStyled } from './style.module'

export interface IMapField {
  numberLines: number
  numberColumns: number
  widthSize: number | string
}

const MapField = ({ numberLines, numberColumns, widthSize }: IMapField) => {
  return (
    <MapFieldStyled numberColumns={numberColumns} numberLines={numberLines} widthSize={widthSize} />
  )
}

export default MapField
