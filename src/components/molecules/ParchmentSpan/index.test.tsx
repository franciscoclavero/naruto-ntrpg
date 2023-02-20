import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import ParchmentSpan from './'

describe('ParchmentSpan', () => {
  it('- render', () => {
    const { container } = render(<ParchmentSpan textSize='1em' />)

    const nodeParchmentSpan = container.getElementsByTagName('div')

    expect(nodeParchmentSpan.length).toBe(1)
  })
  it('- render text', () => {
    render(<ParchmentSpan textSize='1em' textContent='Teste' />)

    const nodeParchmentSpan = screen.getByText('Teste')

    expect(nodeParchmentSpan).toBeInTheDocument()
  })
})
