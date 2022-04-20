import React, { useEffect } from 'react'
import { useCategory, useArticle } from 'hooks'
import {
  Select,
  Input,
  ButtonCreate,
  AlertSuccess,
  AlertError,
  Textarea,
} from 'components'
import * as S from './styles'

const AddArticleTemplate = () => {
  const {
    getCategories,
    categoriesArticle,    
  } = useCategory();

  const {
    title,
    status,
    category,
    text,
    setTitle,
    setStatus,
    setCategory,
    setText,
    saveArticle,
    success,
    error,
    setSuccess,
    setError,
  } = useArticle();

  useEffect(() => {
    setSuccess(false);
    setError(false);
    getCategories(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return ( <>
    <S.Wrapper>
      <S.Page>
        <S.Form>
          {success && (<S.AlertWrapper>
            <AlertSuccess handleClose={() => setSuccess(false)} text='Article successfully registered!' />
          </S.AlertWrapper>)}
          {error && (<S.AlertWrapper>
            <AlertError handleClose={() => setError(false)} text='There was an error when registering the article, try again.' />
          </S.AlertWrapper>)}
          <S.Title>Create your article</S.Title>
          <Input name='titleArticle' label='Enter article title' placeholder='Article name' value={title} handleChange={(e) => setTitle(e.target.value)} />
          <S.SpaceMedium />
          <Select name='StatusArticle' label='Show article' value={status} handleChange={(e) => setStatus(e.target.value)}>
            <option value="true">Enable</option>
            <option value="false">disabled</option>
          </Select>
          <S.SpaceMedium />
          <Select name='category' label='Choose the category' value={category} handleChange={(e) => setCategory(e.target.value)}>
            <option value="">categories</option>
            {categoriesArticle.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}
          </Select>
          <S.SpaceMedium />
          <Textarea name='text' label='Enter article' value={text} handleChange={(e) => setText(e)} />
          
          <S.AcitionsAddCategory>
            <ButtonCreate
              disabled={false}
              handleClick={() => saveArticle()}
              >
                Create
            </ButtonCreate>
          </S.AcitionsAddCategory>
        </S.Form>
      </S.Page>
    </S.Wrapper>
  </>)
}

export default AddArticleTemplate