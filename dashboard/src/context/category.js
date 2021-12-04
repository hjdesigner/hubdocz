import React, { useState, createContext } from 'react'
import {
  getAllCategories,
  createCategory,
  createSubCategory,
  deleteCategory,
  editCategory,
  getAllCategoriesAndSub,
} from 'utils/request'

const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategry] = useState([]);
  const [nameCategory, setNameCategory] = useState('');
  const [idSub, setIdSub] = useState('');
  const [statusCategory, setStatusCategory] = useState('true');
  const [isSub, setIsSub] = useState(false);
  
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
        return;
      }
    }

    const result = await createCategory(data);

    if (result) {
      resetData();
      return;
    }
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
    }}>
      {children}
    </CategoryContext.Provider>
  )
}

export { CategoryProvider, CategoryContext }