import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import StatusBarText from './'

describe('StatusBarText component ', () => {
  it('- render', () => {
    render(<StatusBarText textContent='Teste' />)

    const statusBarTextNode = screen.getByText('Teste')

    expect(statusBarTextNode).toBeInTheDocument()
  })
})
