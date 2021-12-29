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

const EditSubCategoryTemplate = () => {
  let { id } = useParams();
  const {
    getCategories,
    categories,
    nameCategory,
    setNameCategory,
    getCategory,
    category,
    isSub,
    statusCategory,
    setStatusCategory,
    setIdSub,
    success,
    setSuccess,
    error,
    setError,
    editCurrentSubCategory,
    idSub,
    handlerEditSub,
  } = useCategory();

  useEffect(() => {
    setSuccess(false);
    setError(false);
    editCurrentSubCategory(id);
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
        <S.Form>
          {success && (<S.AlertWrapper>
            <AlertSuccess handleClose={() => setSuccess(false)} text='Successfully edited category!' />
          </S.AlertWrapper>)}
          {error && (<S.AlertWrapper>
            <AlertError handleClose={() => setError(false)} text='There was an error when editing the category, try again.' />
          </S.AlertWrapper>)}
          <S.TitleCategory>Edit your category</S.TitleCategory>
          <Input name='addCategory' label='Enter the category name' placeholder='Category name' value={nameCategory} handleChange={(e) => setNameCategory(e.target.value)} />
          <S.SpaceMedium />
          <Select name='StatusCategory' label='Show category' value={statusCategory} handleChange={(e) => setStatusCategory(e.target.value)}>
            <option value="true">Enable</option>
            <option value="false">disabled</option>
          </Select>
          <S.SpaceMedium />
          <S.IsSub>
            <S.IsSubText>Is a subcategory? Yes</S.IsSubText>            
          </S.IsSub>
          <S.SpaceMedium />
          {isSub && <Select name='category' label='Choose the category' value={idSub} handleChange={(e) => setIdSub(e.target.value)}>
            {category.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}
          </Select>}
          <S.AcitionsAddCategory>
            <ButtonCreate
              disabled={nameCategory === ''}
              handleClick={() => handlerEditSub(id)}
              >
                Edit
            </ButtonCreate>
          </S.AcitionsAddCategory>
        </S.Form>
      </S.Page>
    </S.Wrapper>
  </>)
}

export default EditSubCategoryTemplate