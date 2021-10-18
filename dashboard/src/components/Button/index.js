import React from 'react'
import PropTypes from 'prop-types';
import * as S from './styles'

export const ButtonDefault = ({ children, handleClick }) => {
  return (
    <S.ButtonElement onClick={handleClick}>{children}</S.ButtonElement>
  );
}
export const ButtonCreate = ({ children, handleClick, disabled }) => {
  return (
    <S.ButtonCreateElement onClick={handleClick} disabled={disabled}>{children}</S.ButtonCreateElement>
  )
}
export const ButtonCancel = ({ children, handleClick, space }) => {
  return (
    <S.ButtonCancelElement space={space} onClick={handleClick}>{children}</S.ButtonCancelElement>
  )
}

ButtonDefault.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
}
ButtonCreate.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
}
ButtonCancel.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
  space: PropTypes.bool,
}