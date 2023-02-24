import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import DynamicMenuOption from './'

describe('DynamicMenuOption component ', () => {
  it('- render', () => {
    render(
      <DynamicMenuOption
        contentText='Text'
        click={() => {
          ;('')
        }}
      />,
    )

    const menuOptionNode = screen.getByText('Text')

    expect(menuOptionNode).toBeInTheDocument()
  })
})
