import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import MapField from './'

describe('MapField component ', () => {
  it('- render', () => {
    const { container } = render(
      <MapField numberColumns={0} numberLines={0} sprite='' widthSize='80px' />,
    )

    const mapFieldNodes = container.getElementsByTagName('div')

    expect(mapFieldNodes.length).toBe(1)
  })
})
