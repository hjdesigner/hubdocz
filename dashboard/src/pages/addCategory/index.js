import React, { useEffect } from 'react'
import { useCategory } from 'hooks'
import {
  Categories,
  Select,
  Input,
  ButtonCreate,
} from 'components'
import * as S from './styles'

const AddCategoryTemplate = () => {
  const {
    getCategories,
    categories,
    nameCategory,
    setNameCategory,
    saveCategory,
    getCategory,
    category,
    isSub,
    setIsSub,
    statusCategory,
    setStatusCategory,
    idSub,
    setIdSub,
  } = useCategory();

  useEffect(() => {
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
          <S.TitleCategory>Create your category</S.TitleCategory>
          <Input name='addCategory' label='Enter the category name' placeholder='Category name' value={nameCategory} handleChange={(e) => setNameCategory(e.target.value)} />
          <S.SpaceMedium />
          <Select name='StatusCategory' label='Show category' value={statusCategory} handleChange={(e) => setStatusCategory(e.target.value)}>
            <option value="true">Enable</option>
            <option value="false">disabled</option>
          </Select>
          <S.SpaceMedium />
          <S.IsSub>
            <S.IsSubText>Is a subcategory?</S.IsSubText>
            <S.IsSubCheck type="checkbox" id="sub" value={isSub} onClick={() => setIsSub(!isSub)} />
            <S.IsSubLabel htmlFor="sub" />
          </S.IsSub>
          <S.SpaceMedium />
          {isSub && <Select name='category' label='Choose the category' value={idSub} handleChange={(e) => setIdSub(e.target.value)}>
            <option value="">categories</option>
            {category.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}
          </Select>}
          <S.AcitionsAddCategory>
            <ButtonCreate
              disabled={nameCategory === ''}
              handleClick={() => saveCategory()}
              >
                Create
            </ButtonCreate>
          </S.AcitionsAddCategory>
        </S.Form>
      </S.Page>
    </S.Wrapper>
  </>)
}

export default AddCategoryTemplate