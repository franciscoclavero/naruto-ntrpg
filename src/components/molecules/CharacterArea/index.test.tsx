import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import CharacterArea from './'

describe('CharacterArea component ', () => {
  it('- render', () => {
    const { container } = render(<CharacterArea id={1} life={100} effectsIds={[1, 2]} />)

    const characterNameNodes = container.getElementsByTagName('span')
    const characterTextNode = screen.getAllByText('100%')

    expect(characterNameNodes.length).toBe(2)
    expect(characterTextNode[0]).toBeInTheDocument()
  })
})
