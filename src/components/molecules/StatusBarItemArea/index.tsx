import React, { useEffect, useState } from 'react'
import StatusBarItem from '../StatusBarItem'

import { StatusBarItemAreaStyled } from './style.module'

interface IStatusBarItemArea {
  maxValue: number
  actualValue: number
  color: string
}

const StatusBarItemArea = ({ maxValue, actualValue, color }: IStatusBarItemArea) => {
  const [colorList, setColorList] = useState<string[]>([])

  useEffect(() => {
    const itens: string[] = []

    for (let count = 1; count <= maxValue; count += 1) {
      const actualColor = count <= actualValue ? color : '#fff'
      itens.push(actualColor)
    }
    setColorList(itens)
  }, [])

  return (
    <StatusBarItemAreaStyled>
      {colorList.map((item) => {
        return <StatusBarItem key={item} color={item} />
      })}
    </StatusBarItemAreaStyled>
  )
}

export default StatusBarItemArea
