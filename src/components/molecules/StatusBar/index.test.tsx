import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import StatusBar from './'

describe('StatusBar component ', () => {
  it('- render', () => {
    render(<StatusBar textContent='Chakra' maxValue={1} actualValue={0} color='blue' />)

    const statusBarNode = screen.getByText('Chakra')

    expect(statusBarNode).toBeInTheDocument()
  })
})
