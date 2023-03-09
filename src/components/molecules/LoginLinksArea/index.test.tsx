import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import LoginLinksArea from './'

describe('LoginLinksArea component ', () => {
  it('- render', () => {
    const list = ['teste 1', 'teste 2']

    const { container } = render(<LoginLinksArea linksList={list} />)

    const listNodes = container.getElementsByTagName('li')
    const listDescriptionItem2 = screen.getByText('teste 2')

    expect(listNodes.length).toBe(2)
    expect(listDescriptionItem2).toBeInTheDocument
  })
})
