import { render } from '@testing-library/react'
import '@testing-library/react'
import React from 'react'

import Map from './'

describe('Map component', () => {
  it('- render without background', () => {
    const typeItens = [{ posX: 0, posY: 0, sprite: '' }]

    const { container } = render(
      <Map numberLines={0} numberColumns={0} widthSize='400px' typeItens={typeItens} />,
    )

    const mapNodes = container.getElementsByTagName('div')

    expect(mapNodes.length).toBe(1)
  })
  it('- render with background', () => {
    const typeItens = [{ posX: 0, posY: 0, sprite: 'naruto' }]

    const { container } = render(
      <Map numberLines={2} numberColumns={2} widthSize='400px' typeItens={typeItens} />,
    )

    const mapNodes = container.getElementsByTagName('div')

    expect(mapNodes.length).toBe(5)
  })
})
