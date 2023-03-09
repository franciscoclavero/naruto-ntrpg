import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import RememberUser from './'

describe('RememberUser component ', () => {
  it('- render', () => {
    render(<RememberUser id='user' />)

    const rememberUserNode = screen.getByText('Lembrar Usuário')

    expect(rememberUserNode).toBeInTheDocument()
  })
})
