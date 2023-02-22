import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import CharacterLifeArea from './'

describe('CharacterLifeArea component ', () => {
  it('- render 71% life', () => {
    render(<CharacterLifeArea life={71} />)

    const characterLife = screen.getByText('71%')

    expect(characterLife).toBeInTheDocument()
  })
  it('- render 41% life', () => {
    render(<CharacterLifeArea life={41} />)

    const characterLife = screen.getByText('41%')

    expect(characterLife).toBeInTheDocument()
  })
  it('- render 1% life', () => {
    render(<CharacterLifeArea life={1} />)

    const characterLife = screen.getByText('1%')

    expect(characterLife).toBeInTheDocument()
  })
})
