import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Input from './'

describe('Input component ', () => {
  it('- render', () => {
    const { container } = render(<Input id='teste' type='text' />)

    const inputNodes = container.getElementsByTagName('input')

    expect(inputNodes.length).toBe(1)
  })
})
