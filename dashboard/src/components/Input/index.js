import React from 'react'
import PropTypes from 'prop-types';
import * as S from './styles'

const Input = ({ label, name, placeholder, value, handleChange }) => {
  return (
    <S.Field>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputElement id={name} name={name} type="text" placeholder={placeholder} value={value} onChange={handleChange} />
    </S.Field>
  )
}
Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}

export default Input;