import { fireEvent, render, screen } from '@testing-library/react'
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
  it('- click', () => {
    const mock = jest.fn
    render(
      <DynamicMenuOption
        contentText='Text'
        click={() => {
          mock
        }}
      />,
    )

    const menuOptionNode = screen.getByText('Text')

    fireEvent.click(menuOptionNode)
  })
})
