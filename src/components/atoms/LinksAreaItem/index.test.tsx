import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import React from 'react'

import LinksAreaItem from './'

describe('LinksAreaItem component ', () => {
  it('- render', () => {
    render(<LinksAreaItem contentText='Teste' />)

    const linkAreaNode = screen.getByText('Teste')

    expect(linkAreaNode).toBeInTheDocument
  })
})
