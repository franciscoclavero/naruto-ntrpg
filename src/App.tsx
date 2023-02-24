import React from 'react'
import Header from './components/atoms/Header'
import StatusBar from './components/molecules/StatusBar'

import { BodyStyled } from './style.module'

const App = () => {
  return (
    <BodyStyled>
      <Header />
      <StatusBar textContent='Chakra' maxValue={10} actualValue={6} color='blue' />
    </BodyStyled>
  )
}

export default App
