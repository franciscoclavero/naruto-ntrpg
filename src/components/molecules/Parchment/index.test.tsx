import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Parchment from '.'

describe('Parchment ', () => {
  it('- render', () => {
    render(
      <Parchment
        backgroundColor='red'
        height='75px'
        width='252px'
        parchmentCenter={{
          textContent: 'Teste',
          textSize: '16px',
          width: '60px',
          backgroundColor: 'white',
          borderColor: 'none',
          borderSize: '0px',
        }}
      />,
    )

    const nodeParchment = screen.getByText('Teste')

    expect(nodeParchment).toBeInTheDocument()
  })
})
