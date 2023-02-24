import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import StatusBarItem from './'

describe('StatusBarItem component ', () => {
  it('- render', () => {
    const { container } = render(<StatusBarItem color='blue' />)

    const statusBarItemNodes = container.getElementsByTagName('div')

    expect(statusBarItemNodes.length).toBe(1)
  })
})
