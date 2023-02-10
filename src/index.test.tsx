import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from './App'

describe('teste ', () => {
  it('teste', () => {
    render(<App />)

    const h1Node = screen.getByText('NaruChess')
    expect(h1Node).toBeInTheDocument()
  })
})
