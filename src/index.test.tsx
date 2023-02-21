import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'

describe('teste ', () => {
  it('teste', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    )

    const h1Node = screen.getByText('NaruChess')
    expect(h1Node).toBeInTheDocument()
  })
})
