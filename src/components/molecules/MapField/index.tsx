import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { setLeft, setTop, setVisible } from '../../../redux/reducers/characterMenuOptionsReducer'

import { MapFieldStyled } from './style.module'

export interface IMapField {
  numberLines: number
  numberColumns: number
  widthSize: number | string
  sprite: string
}

const MapField = ({ numberLines, numberColumns, widthSize, sprite }: IMapField) => {
  const offsetData = useRef<HTMLImageElement>(null)
  const dispatch = useDispatch()

  const handleClickHaveSprite = () => {
    if (offsetData.current != null) {
      const fieldSize = offsetData.current.clientWidth

      dispatch(setVisible(true))
      dispatch(setLeft(offsetData.current.offsetLeft + fieldSize + 10))
      dispatch(setTop(offsetData.current.offsetTop))
    }
  }

  const handleClickNoHaveSprite = () => {
    dispatch(setVisible(false))
  }

  return (
    <MapFieldStyled
      numberColumns={numberColumns}
      numberLines={numberLines}
      widthSize={widthSize}
      sprite={sprite}
      onClick={sprite === '' ? handleClickNoHaveSprite : handleClickHaveSprite}
    >
      {sprite != '' ? (
        <img ref={offsetData} src={`${sprite != '' ? 'assets/' + sprite : ''}`} />
      ) : (
        ''
      )}
    </MapFieldStyled>
  )
}

export default MapField
