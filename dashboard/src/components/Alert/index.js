import React from 'react'
import PropTypes from 'prop-types';
import { Close } from 'utils/icons'
import * as S from './styles'

export const AlertSuccess = ({ text, handleClose }) => {
  return (
    <S.Success>
      {text}
      <S.Button onClick={handleClose}><Close /></S.Button>
    </S.Success>
  )
}
export const AlertError = ({ text, handleClose }) => {
  return (
    <S.Error>
      {text}
      <S.Button onClick={handleClose}><Close /></S.Button>
    </S.Error>
  )
}

AlertSuccess.propTypes = {
  text: PropTypes.string,
  handleClose: PropTypes.func,
}

AlertError.propTypes = {
  text: PropTypes.string,
  handleClose: PropTypes.func,
}