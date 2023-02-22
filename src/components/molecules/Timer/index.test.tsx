import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Timer from './'
import { store } from '../../../redux/store'
import { Provider } from 'react-redux'

describe('Timer component ', () => {
  it('- render', () => {
    render(
      <Provider store={store}>
        <Timer initialPosition={10} time={10} width='300px' labelText='Teste' />
      </Provider>,
    )

    const timerNode = screen.getByText('Teste')

    expect(timerNode).toBeInTheDocument()
  })
})
