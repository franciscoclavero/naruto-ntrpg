import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Label from './'

describe('Label component ', () => {
  it('- render', () => {
    render(<Label id='teste' text='Teste' />)

    const labelNode = screen.getByText('Teste')

    expect(labelNode).toBeInTheDocument()
  })
})
