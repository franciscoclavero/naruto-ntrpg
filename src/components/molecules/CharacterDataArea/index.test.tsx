import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import CharacterDataArea from './'

describe('CharacterDataArea component ', () => {
  it('- render', () => {
    render(<CharacterDataArea id={1} life={100} effectsIds={[1]} />)

    const characterDataNode = screen.getByText('Naruto')

    expect(characterDataNode).toBeInTheDocument()
  })
})
