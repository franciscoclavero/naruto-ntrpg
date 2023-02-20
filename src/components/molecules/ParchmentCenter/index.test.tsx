import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import ParchmentCenter from '.'

describe('ParchmentCenter ', () => {
  it('- render', () => {
    render(<ParchmentCenter textContent='Teste' textSize='16px' width='100px' />)

    const nodeParchmentCenter = screen.getByText('Teste')

    expect(nodeParchmentCenter).toBeInTheDocument()
  })
})
