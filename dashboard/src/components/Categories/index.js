import React from 'react'
import PropTypes from 'prop-types';
import { Edit, Trash } from 'utils/icons'
import * as S from './styles'

const Categories = ({ item, handlerDelete }) => {
  return (
    <S.Category>
      <S.CategoryText>
        <S.CategoryStatus status={item.status} />{item.name}
      </S.CategoryText>      
      <S.CategoryActions>
        <S.CategoryButton><Edit /></S.CategoryButton>
        <S.CategoryButton space={true} onClick={handlerDelete}><Trash /></S.CategoryButton>
      </S.CategoryActions>
    </S.Category>
  )
}

Categories.propTypes = {
  item: PropTypes.object,
  handlerDelete: PropTypes.func,
}

export default Categories;