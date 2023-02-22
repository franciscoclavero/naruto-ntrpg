import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import TimerCenter from './'

describe('TimerCenter component ', () => {
  it('- render', () => {
    const { container } = render(<TimerCenter />)

    const timerCenterNodes = container.getElementsByTagName('div')

    expect(timerCenterNodes.length).toBe(1)
  })
})
