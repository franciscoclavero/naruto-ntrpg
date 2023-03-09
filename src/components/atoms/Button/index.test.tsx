import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Button from './'

describe('Button component ', () => {
  it('- render', () => {
    render(<Button contentText='Teste' />)

    const buttonNode = screen.getByText('Teste')

    expect(buttonNode).toBeInTheDocument
  })
})
