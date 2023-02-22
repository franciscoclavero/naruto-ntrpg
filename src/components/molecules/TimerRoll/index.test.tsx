import { render } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'

import TimerRoll from './'

describe('Timer Roll component ', () => {
  it('- render', () => {
    const { container } = render(<TimerRoll top='1px' />)

    const timerRollNode = container.getElementsByTagName('div')

    expect(timerRollNode.length).toBe(1)
  })
})
