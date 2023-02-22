import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import TimerAreaCounter from './'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { setLabelText, setWidth } from '../../../redux/reducers/timerReducer'

describe('TimerAreaCounter component ', () => {
  it('- render', () => {
    store.dispatch(setWidth('250px'))
    store.dispatch(setLabelText('Testing'))

    const { container } = render(
      <Provider store={store}>
        <TimerAreaCounter />
      </Provider>,
    )

    const timerAreaCounterDivNode = container.getElementsByTagName('div')
    const timerAreaCounterSpanNode = screen.getByText('Testing')

    expect(timerAreaCounterDivNode.length).toBe(1)
    expect(timerAreaCounterSpanNode).toBeInTheDocument
  })
})
