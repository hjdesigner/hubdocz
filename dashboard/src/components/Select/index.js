import React from 'react'
import PropTypes from 'prop-types';
import * as S from './styles'

const Select = ({ label, name, children, value, handleChange }) => {
  return (
    <S.Field>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.SelectElement id={name} name={name} value={value} onChange={handleChange}>
        {children}
      </S.SelectElement>
    </S.Field>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool,
  children: PropTypes.node,
  handleChange: PropTypes.func,
}

export default Select;