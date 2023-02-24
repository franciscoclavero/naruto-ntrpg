import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import StatusBarItemArea from './'

describe('StatusBarItemArea component ', () => {
  it('- render', () => {
    const { container } = render(<StatusBarItemArea actualValue={1} maxValue={2} color='blue' />)

    const statusBarAreaNodes = container.getElementsByTagName('div')

    expect(statusBarAreaNodes.length).toBe(3)
  })
})
