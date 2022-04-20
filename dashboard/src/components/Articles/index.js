import React from 'react'
import * as S from './styles'
import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt'

const Articles = ({ item }) => {
  return (
    <S.ArticleWrapper>
      <S.ArticleTitle><S.ArticleStatus status={item.status} />{item.name}</S.ArticleTitle>
      <S.ArticlesActions>
        <S.ArticleEdit to={`/edit-article/${item.id}`}><EditAlt /></S.ArticleEdit>
      </S.ArticlesActions>
    </S.ArticleWrapper>
  )
}

export default Articles