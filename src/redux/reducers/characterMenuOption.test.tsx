import '@testing-library/jest-dom'
import React from 'react'
import reducer, { setLeft, setTop, setVisible } from './characterMenuOptionsReducer'

describe('Testing Redux ', () => {
  const objectTesting = { item: 1, name: 'test' }

  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      left: '0px',
      top: '0px',
      visible: false,
    })
  })
  it('- setVisible', () => {
    const visible = setVisible(objectTesting)

    expect(visible).toEqual({
      payload: objectTesting,
      type: 'characterMenu/setVisible',
    })
  })
  it('- setTop', () => {
    const top = setTop(objectTesting)

    expect(top).toEqual({
      payload: objectTesting,
      type: 'characterMenu/setTop',
    })
  })

  it('- setLeft', () => {
    const left = setLeft(objectTesting)

    expect(left).toEqual({
      payload: objectTesting,
      type: 'characterMenu/setLeft',
    })
  })
})
