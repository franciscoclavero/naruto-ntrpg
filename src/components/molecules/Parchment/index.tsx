import React from 'react'
import PropTypes from 'prop-types'

import ParchmentCenter, { TParchmentLabel } from '../ParchmentCenter'
import ParchmentRoll from '../ParchmentRoll'

import { ParchmentBody } from './style.module'

interface IParchment {
  height: string
  width: string
  backgroundColor: string
  border: string
  parchmentCenter: TParchmentLabel
}

const Parchment = ({ height, width, backgroundColor, border, parchmentCenter }: IParchment) => {
  return (
    <ParchmentBody height={height} border={border} width={width} backgroundColor={backgroundColor}>
      <ParchmentRoll height={height} left='-10px' />
      <ParchmentCenter
        textContent={parchmentCenter.textContent}
        width={parchmentCenter.width}
        backgroundColor={parchmentCenter.backgroundColor}
        borderSize={parchmentCenter.borderSize}
        borderColor={parchmentCenter.borderColor}
        textSize={parchmentCenter.textSize}
      />
      <ParchmentRoll height={height} left='10px' />
    </ParchmentBody>
  )
}

export default Parchment

Parchment.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
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
  border: '',
  parchmentCenter: {
    width: 'Required',
    backgroundColor: 'Required',
    borderColor: 'none',
    borderSize: '0px',
    textContent: 'Required',
    textSize: 'Required',
  },
}
