import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import MapField from '../MapField'

import { MapStyled } from './style.module'

type TItens = {
  posX: number
  posY: number
  sprite: string
}

interface IMap {
  numberLines: number
  numberColumns: number
  widthSize: number | string
  typeItens: TItens[]
}

type TMap = {
  [key: string]: string
}

const Map = ({ numberLines, numberColumns, widthSize, typeItens }: IMap) => {
  const [mapDrawing, setMapDrawing] = useState<TMap[]>([])
  const map: TMap[] = []

  useEffect(() => {
    for (let mapX = 0; mapX < numberLines; mapX += 1) {
      const mapLine: TMap = {}
      for (let mapY = 0; mapY < numberColumns; mapY += 1) {
        const key = `${mapX}_${mapY}`
        const item = typeItens.findIndex((item) => item.posX === mapX && item.posY === mapY)

        mapLine[key] = ''
        if (item > -1) mapLine[key] = typeItens[item].sprite
      }
      map.push(mapLine)
    }
    console.log(map)
    setMapDrawing(map)
  }, [])

  return (
    <MapStyled height={widthSize} width={widthSize}>
      {mapDrawing.map((item) => {
        return Object.entries(item).map(([key, value]) => {
          return (
            <MapField
              key={key}
              numberColumns={numberColumns}
              numberLines={numberLines}
              widthSize={widthSize}
              sprite={value}
            />
          )
        })
      })}
    </MapStyled>
  )
}

export default Map

Map.proptypes = {
  numberLines: PropTypes.number.isRequired,
  numberColumns: PropTypes.number.isRequired,
  widthSize: PropTypes.string.isRequired,
  typeItens: {
    posX: PropTypes.number.isRequired,
    posY: PropTypes.number.isRequired,
    sprite: PropTypes.string.isRequired,
  },
}

Map.defaultProps = {
  numberLines: 0,
  numberColumns: 0,
  widthSize: '',
  typeItens: {
    posX: 0,
    posY: 0,
    sprite: '',
  },
}
