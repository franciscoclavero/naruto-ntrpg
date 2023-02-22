import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import CharacterEffect from './'

describe('CharacterEffect component ', () => {
  it('- render', () => {
    const { container } = render(
      <CharacterEffect name='Naruto' sprite='assets/characters/naruto.jpg' />,
    )

    const effectNode = container.getElementsByTagName('img')[0]

    expect(effectNode.src).toEqual('http://localhost/assets/characters/naruto.jpg')
  })
})
