import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { setInitialPosition, setLabelText, setTime, setWidth } from './reducers/timerReducer'

describe('Testing Redux ', () => {
  const objectTesting = { item: 1, name: 'test' }
  it('- SetWidth', () => {
    const width = setWidth(objectTesting)

    expect(width).toEqual({
      payload: objectTesting,
      type: 'timer/setWidth',
    })
  })
  it('- setLabelText', () => {
    const labelText = setLabelText(objectTesting)

    expect(labelText).toEqual({
      payload: objectTesting,
      type: 'timer/setLabelText',
    })
  })
  it('- setTime', () => {
    const time = setTime(objectTesting)

    expect(time).toEqual({
      payload: objectTesting,
      type: 'timer/setTime',
    })
  })
  it('- setInitialPosition', () => {
    const initialPosition = setInitialPosition(objectTesting)

    expect(initialPosition).toEqual({
      payload: objectTesting,
      type: 'timer/setInitialPosition',
    })
  })
})
