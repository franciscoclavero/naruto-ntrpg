import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import Header from './Header'

describe('Header component', () => {
  it('- render', () => {
    render(<Header />)

    const headerNode = screen.getByText('NaruChess')

    expect(headerNode).toBeInTheDocument()
  })
})
