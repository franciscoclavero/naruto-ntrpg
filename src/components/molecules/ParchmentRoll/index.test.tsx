import { render } from '@testing-library/react'
import '@testing-library/react'
import React from 'react'

import ParchmentRoll from './'

describe('Parchment Roll component', () => {
  it('- render', () => {
    const { container } = render(<ParchmentRoll height='10px' left='0px' />)

    const parchmentRollNodes = container.getElementsByTagName('div')

    expect(parchmentRollNodes.length).toBe(1)
  })
})
