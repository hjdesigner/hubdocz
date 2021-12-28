import React, { useState, createContext } from 'react'
import {
  getAllCategories,
  createCategory,
  createSubCategory,
  deleteCategory,
  editCategory,
  getAllCategoriesAndSub,
  getCategoryId,
} from 'utils/request'

const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategry] = useState([]);
  const [nameCategory, setNameCategory] = useState('');
  const [idSub, setIdSub] = useState('');
  const [statusCategory, setStatusCategory] = useState('true');
  const [isSub, setIsSub] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});
  
  const getCategories = async () => {
    const result = await getAllCategoriesAndSub();
    setCategories(result)
  }
  const getCategory = async () =>  {
    const result = await getAllCategories();
    setCategry(result);
  }
  const resetData = () => {
    setNameCategory('');
    setNameCategory('');
    setStatusCategory('true');
    setIsSub(false);
  }

  const saveCategory = async () => {
    let data = {
      name: nameCategory,
      status: statusCategory === 'true' ? true : false,
    }
    if (isSub) {
      data.idCategory = idSub;
      const result = await createSubCategory(data);

      if (result) {
        resetData();
        getCategories();
        setSuccess(true);
        return;
      }

      setError(true);
    }

    const result = await createCategory(data);

    if (result) {
      resetData();
      getCategories();
      setSuccess(true);
      return;
    }

    setError(true);
  }
  const handlerEdit = async (id) => {
    let data = {
      id,
      name: nameCategory,
      status: statusCategory === 'true' ? true : false,
    }
    const result = await editCategory(id, data);

    if (result) {
      getCategories();
      setSuccess(true);
      return;
    }

    setError(true);
  }

  const getCurrentCategory = async (id) => {
    const result = await getCategoryId(id);
    setCurrentCategory(result);
  }
  const editCurrentCategory = async (id) => {
    const result = await getCategoryId(id);
    setNameCategory(result.name);
    setStatusCategory(result.status ? "true" : "false");
  }
  
  // const handlerDelete = async (id) => {
  //   setErrorCategory(false);
  //   setSuccessCategory(false);
  //   setSuccessDeleteCategory(false);
  //   setErrorDeleteCategory(false);

  //   const result = await deleteCategory(id);

  //   if (result) {
  //     setSuccessDeleteCategory(true);
  //     setErrorDeleteCategory(false);

  //     const allCategories = await getAllCategories();
  //     setCategories(allCategories)

  //     return;
  //   }
  //   setErrorDeleteCategory(true);
  // }

  
 
  return (
    <CategoryContext.Provider value={{
      categories,
      nameCategory,
      getCategories,
      setNameCategory,
      getCategory,
      category,
      isSub,
      setIsSub,
      statusCategory,
      setStatusCategory,
      idSub,
      setIdSub,
      saveCategory,
      success,
      setSuccess,
      error,
      setError,
      getCurrentCategory,
      currentCategory,
      editCurrentCategory,
      handlerEdit,
    }}>
      {children}
    </CategoryContext.Provider>
  )
}

export { CategoryProvider, CategoryContext }