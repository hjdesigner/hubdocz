import React from 'react'
import { Edit, Trash } from 'utils/icons'
import * as S from './styles'

const Categories = ({ item }) => {
  return (
    <S.Category>
      <S.CategoryText>
        <S.CategoryStatus status={item.status} />{item.name}
      </S.CategoryText>      
      <S.CategoryActions>
        <S.CategoryButton><Edit /></S.CategoryButton>
        <S.CategoryButton space={true}><Trash /></S.CategoryButton>
      </S.CategoryActions>
    </S.Category>
  )
}

export default Categories;