import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import TimerArea from './'
import { store } from '../../../redux/store'
import { Provider } from 'react-redux'

describe('TimerArea component', () => {
  it('- render', () => {
    const { container } = render(
      <Provider store={store}>
        <TimerArea />
      </Provider>,
    )

    const timerAreaDivNode = container.getElementsByTagName('div')
    const timerAreaSpanNode = container.getElementsByTagName('span')

    expect(timerAreaDivNode.length).toBe(2)
    expect(timerAreaSpanNode.length).toBe(1)
  })
})
