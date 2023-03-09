import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import LoginForm from './'

describe('LoginForm component ', () => {
  it('- render', () => {
    const { container } = render(<LoginForm />)

    const loginNodesInput = container.getElementsByTagName('input')
    const loginNodeCheckbox = screen.getByRole('checkbox')
    const loginNodesLi = container.getElementsByTagName('li')

    expect(loginNodesInput.length).toBe(3)
    expect(loginNodeCheckbox).not.toBeChecked()
    expect(loginNodesLi.length).toBe(3)
  })
})
