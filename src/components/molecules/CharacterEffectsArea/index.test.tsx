import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import CharacterEffectsArea from './'

describe('CharacterEffectsArea component ', () => {
  it('- render', () => {
    const { container } = render(<CharacterEffectsArea effectsIds={[1, 2]} />)

    const effectAreaNodes = container.getElementsByTagName('img')

    expect(effectAreaNodes.length).toBe(2)
  })
})
