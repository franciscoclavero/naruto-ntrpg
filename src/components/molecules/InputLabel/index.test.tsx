import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import InputLabel from './'

describe('InputLabel component ', () => {
  it('- render', () => {
    render(<InputLabel id='username' text='Usuário' type='text' />)

    const inputLabelNode = screen.getByText('Usuário')

    expect(inputLabelNode).toBeInTheDocument()
  })
})
