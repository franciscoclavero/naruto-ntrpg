import React from 'react'
import Header from './components/atoms/Header'
import CharacterStatusBar from './components/molecules/CharacterStatusBar'

import { BodyStyled } from './style.module'

const App = () => {
  return (
    <BodyStyled>
      <Header />
      <CharacterStatusBar textContent='Chakra' maxValue={10} actualValue={6} color='blue' />
    </BodyStyled>
  )
}

export default App
