import React, { useEffect } from 'react'
import {
  Categories,
} from 'components'
import { useCategory } from 'hooks'
import * as S from './styles'

const ContentsTemplate = () => {
  const {
    getCategories,
    categories,
  } = useCategory();
  

  useEffect(() => {
    getCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <S.Wrapper>
      <S.WrapperCategories>
        <S.TitleCategory>Categories</S.TitleCategory>
        <S.ActionCategory>
          <S.LinkAddCategory to="/add-category">Add Category</S.LinkAddCategory>
        </S.ActionCategory>        
        {categories.map((item) => ( <Categories
          key={item.id}
          item={item}
        /> ))}
      </S.WrapperCategories>
    </S.Wrapper>
  )
}

export default ContentsTemplate