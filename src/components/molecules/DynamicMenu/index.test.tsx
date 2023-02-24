import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import DynamicMenu from './'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { setLeft, setTop, setVisible } from '../../../redux/reducers/characterMenuOptionsReducer'

describe('DynamicMenu component ', () => {
  it('- render', () => {
    const option = [
      {
        contentText: 'Test',
        click: () => {
          ;('')
        },
      },
    ]
    render(
      <Provider store={store}>
        <DynamicMenu options={option} />
      </Provider>,
    )

    const dynamicMenu = screen.getByText('Test')

    expect(dynamicMenu).toBeInTheDocument()
  })
  it('- click', () => {
    store.dispatch(setVisible(true))
    store.dispatch(setTop('300px'))
    store.dispatch(setLeft('300px'))

    const mock = jest.fn

    const option = [
      {
        contentText: 'Test',
        click: () => {
          mock
        },
      },
    ]
    render(
      <Provider store={store}>
        <DynamicMenu options={option} />
      </Provider>,
    )

    const dynamicMenu = screen.getByText('Test')
    fireEvent.click(dynamicMenu)

    expect(dynamicMenu).toBeInTheDocument()
  })
})
