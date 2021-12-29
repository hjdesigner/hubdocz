import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useCategory } from 'hooks'
import {
  Categories,
} from 'components'
import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt'
import * as S from './styles'

const SubCategoryTemplate = () => {
  let { id } = useParams();
  const {
    getCategories,
    categories,
    getCategory,
    currentSubCategory,
    getCurrentSubCategory,
  } = useCategory();

  useEffect(() => {
    getCurrentSubCategory(id);
    getCategories();
    getCategory();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return ( <>
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
      <S.Page>
        <S.HeaderCategory>
          <S.TitleCategoryPage>
            {currentSubCategory.name}
            <S.CategoryEdit to={`/edit-subcategory/${currentSubCategory.id}`}><EditAlt /></S.CategoryEdit>
          </S.TitleCategoryPage>
        </S.HeaderCategory>        
      </S.Page>
    </S.Wrapper>
  </>)
}

export default SubCategoryTemplate