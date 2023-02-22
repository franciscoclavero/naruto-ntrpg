import React from 'react'
import Header from './components/atoms/Header'
import Timer from './components/molecules/Timer'

import { BodyStyled } from './style.module'

const App = () => {
  return (
    <BodyStyled>
      <Header />
      <Timer labelText='Your Turn' initialPosition={15} time={30} width='300px' />
    </BodyStyled>
  )
}

export default App
