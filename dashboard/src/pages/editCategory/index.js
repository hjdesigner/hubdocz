import React, { useEffect } from 'react'
import { useCategory } from 'hooks'
import { useParams } from 'react-router-dom';
import {
  Categories,
  Select,
  Input,
  ButtonCreate,
  AlertSuccess,
  AlertError,
} from 'components'
import * as S from './styles'

const EditCategoryTemplate = () => {
  let { id } = useParams();
  const {
    getCategories,
    categories,
    nameCategory,
    setNameCategory,
    handlerEdit,
    getCategory,
    category,
    statusCategory,
    setStatusCategory,
    success,
    setSuccess,
    error,
    setError,
    editCurrentCategory,
  } = useCategory();

  useEffect(() => {
    editCurrentCategory(id);
    getCategories();
    getCategory();
  }, []);

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
        <S.Form>
          {success && (<S.AlertWrapper>
            <AlertSuccess handleClose={() => setSuccess(false)} text='Successfully edited category!' />
          </S.AlertWrapper>)}
          {error && (<S.AlertWrapper>
            <AlertError handleClose={() => setError(false)} text='There was an error when editing the category, try again.' />
          </S.AlertWrapper>)}
          <S.TitleCategory>Edit the category</S.TitleCategory>
          <Input name='addCategory' label='Enter the category name' placeholder='Category name' value={nameCategory} handleChange={(e) => setNameCategory(e.target.value)} />
          <S.SpaceMedium />
          <Select name='StatusCategory' label='Show category' value={statusCategory} handleChange={(e) => setStatusCategory(e.target.value)}>
            <option value="true">Enable</option>
            <option value="false">disabled</option>
          </Select>
          <S.SpaceMedium />
          <S.AcitionsAddCategory>
            <ButtonCreate
              disabled={nameCategory === ''}
              handleClick={() => handlerEdit(id)}
              >
                Edit
            </ButtonCreate>
          </S.AcitionsAddCategory>
        </S.Form>
      </S.Page>
    </S.Wrapper>
  </>)
}

export default EditCategoryTemplate