import React, { useEffect } from 'react'
import {
  Categories,
  ButtonDefault,
  Input,
  ButtonCreate,
  ButtonCancel,
  Select,
  AlertSuccess,
  AlertError,
} from 'components'
import { useCategory } from 'hooks'
import * as S from './styles'

const ContentsTemplate = () => {
  const {
    getCategories,
    categories,
    toggleAddCategory,
    handleToggleAddCategory,
    setToggleAddCategory,
    nameCategory,
    successCategory,
    errorCategory,
    showCategory,
    successDeleteCategory,
    errorDeleteCategory,
    handleAddCategory,
    setNameCategory,
    setShowCategory,
    setErrorCategory,
    setSuccessCategory,
    handlerDelete,
    setSuccessDeleteCategory,
    setErrorDeleteCategory,
  } = useCategory();
  

  useEffect(() => {
    getCategories();
  }, [getCategories]);
  
  return (
    <S.Wrapper>
      <S.WrapperCategories>
        <S.TitleCategory>Categories</S.TitleCategory>
        <S.ActionCategory>
          <ButtonDefault handleClick={() => handleToggleAddCategory()} >Add Category</ButtonDefault>
        </S.ActionCategory>
        {(successCategory ||
          errorCategory ||
          successDeleteCategory ||
          errorDeleteCategory
        ) && <S.StatusActions>
          {successCategory && <AlertSuccess text='Category created successfully' handleClose={() => setSuccessCategory()} />}
          {successDeleteCategory && <AlertSuccess text='Category deleted successfully' handleClose={() => setSuccessDeleteCategory()} />}
          {errorCategory && <AlertError text='Error creating category' handleClose={() => setErrorCategory()} />}
          {errorDeleteCategory && <AlertError text='Error deleting category' handleClose={() => setErrorDeleteCategory()} />}
        </S.StatusActions>}
        {toggleAddCategory && !successCategory && <S.AddCategory>
          <Input name='addCategory' label='Enter the category name' placeholder='Category name' value={nameCategory} handleChange={(e) => setNameCategory(e.target.value)} />
          <S.SpaceMedium />
          <Select name='StatusCategory' label='Show category' value={Boolean(showCategory)} handleChange={(e) => setShowCategory(e.target.value)}>
            <option value={true}>Enable</option>
            <option value={false}>disabled</option>
          </Select>
          <S.AcitionsAddCategory>
            <ButtonCreate disabled={nameCategory === ''} handleClick={() => handleAddCategory()}>Create</ButtonCreate>
            <ButtonCancel handleClick={() => setToggleAddCategory(false)} space={true}>Cancel</ButtonCancel>
          </S.AcitionsAddCategory>
        </S.AddCategory>}
        {categories.map((item) => ( <Categories key={item.id} item={item} handlerDelete={() => handlerDelete(item.id)} /> ))}
      </S.WrapperCategories>
    </S.Wrapper>
  )
}

export default ContentsTemplate