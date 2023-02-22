import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import CharacterLifeArea from './'

describe('CharacterLifeArea component ', () => {
  it('- render', () => {
    render(<CharacterLifeArea life={100} />)

    const characterLife = screen.getByText('100%')

    expect(characterLife).toBeInTheDocument()
  })
})
