import React from 'react'

interface IStatusBar {
  textContent: string
  maxValue: number
  actualValue: number
  color: string
}

const CharacterStatusBar = ({ textContent, maxValue, actualValue, color }: IStatusBar) => {
  return <div>StatusBar</div>
}

export default CharacterStatusBar
