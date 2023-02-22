import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import CharacterImage from './'

describe('CharacterImage component ', () => {
  it('- render', () => {
    const { container } = render(<CharacterImage />)

    const CharacterImageNodes = container.getElementsByTagName('img')

    expect(CharacterImageNodes.length).toBe(1)
  })
})
