import React from 'react'
import PropTypes from 'prop-types'

import ParchmentCenter, { TParchmentLabel } from '../ParchmentCenter'
import ParchmentRoll from '../ParchmentRoll'

import { ParchmentBody } from './style.module'

interface IParchment {
  height: string
  width: string
  backgroundColor: string
  parchmentCenter: TParchmentLabel
}

const Parchment = ({ height, width, backgroundColor, parchmentCenter }: IParchment) => {
  return (
    <ParchmentBody height={height} width={width} backgroundColor={backgroundColor}>
      <ParchmentRoll height={height} left='-14px' />
      <ParchmentCenter
        textContent={parchmentCenter.textContent}
        width={parchmentCenter.width}
        backgroundColor={parchmentCenter.backgroundColor}
        borderSize={parchmentCenter.borderSize}
        borderColor={parchmentCenter.borderColor}
        textSize={parchmentCenter.textSize}
      />
      <ParchmentRoll height={height} left='14px' />
    </ParchmentBody>
  )
}

export default Parchment

Parchment.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  parchmentCenter: PropTypes.shape({
    width: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    borderSize: PropTypes.string,
    textContent: PropTypes.string.isRequired,
    textSize: PropTypes.string.isRequired,
  }),
}

Parchment.defaultProps = {
  height: '',
  width: '',
  backgroundColor: '',
  parchmentCenter: {
    width: 'Required',
    backgroundColor: 'Required',
    borderColor: 'none',
    borderSize: '0px',
    textContent: 'Required',
    textSize: 'Required',
  },
}
