import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import MapField from './'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

describe('MapField component ', () => {
  it('- render', () => {
    const { container } = render(
      <Provider store={store}>
        <MapField numberColumns={0} numberLines={0} sprite='' widthSize='80px' />
      </Provider>,
    )

    const mapFieldNodes = container.getElementsByTagName('div')

    expect(mapFieldNodes.length).toBe(1)
  })
})
