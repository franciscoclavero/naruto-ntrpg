import React, { useEffect, useState } from 'react'

import MapField from '../MapField'

import { MapStyled } from './style.module'

interface IMap {
  numberLines: number
  numberColumns: number
  widthSize: number | string
}

type TMap = {
  [key: string]: string
}

const Map = ({ numberLines, numberColumns, widthSize }: IMap) => {
  const [mapDrawing, setMapDrawing] = useState<TMap[]>([])
  const map: TMap[] = []

  useEffect(() => {
    for (let mapX = 0; mapX < numberLines; mapX += 1) {
      const mapLine: TMap = {}
      for (let mapY = 0; mapY < numberColumns; mapY += 1) {
        const key = `${mapX}_${mapY}`
        mapLine[key] = '_'
      }
      map.push(mapLine)
    }
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
            />
          )
        })
      })}
    </MapStyled>
  )
}

export default Map
