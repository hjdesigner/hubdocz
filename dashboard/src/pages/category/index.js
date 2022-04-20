import React, { useEffect } from 'react'
import { useParams, withRouter } from 'react-router-dom';
import { useCategory, useArticle } from 'hooks'
import {
  Categories,
  Articles,
} from 'components'
import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt'
import * as S from './styles'

const CategoryTemplate = () => {
  let { id } = useParams();
  const {
    getCategories,
    categories,
    getCategory,
    getCurrentCategory,
    currentCategory,
  } = useCategory();
  const {
    articles,
    allArticles,
  } = useArticle();

  useEffect(() => {
    getCurrentCategory(id);
    getCategories();
    getCategory();
    allArticles(id);
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
            Category: {currentCategory.name}
            <S.CategoryEdit to={`/edit-category/${currentCategory.id}`}><EditAlt /></S.CategoryEdit>
          </S.TitleCategoryPage>
        </S.HeaderCategory>
        <S.HeaderArticle>
          <S.TitleArticlePage>All Articles</S.TitleArticlePage>
          <S.LinkNewArticle to="/add-article">New Article</S.LinkNewArticle>
        </S.HeaderArticle>
        <S.AllArticles>
          {articles.map((item) => <Articles item={item} key={item.id} />)}
        </S.AllArticles>
      </S.Page>
    </S.Wrapper>
  </>)
}

export default withRouter(CategoryTemplate)