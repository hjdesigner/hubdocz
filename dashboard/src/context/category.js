import React, { useState, createContext } from 'react'
import {
  getAllCategories,
  createCategory,
  createSubCategory,
  // deleteCategory,
  editCategory,
  getAllCategoriesAndSub,
  getCategoryId,
  getSubCategoryId,
  editSubCategory,
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
  const [currentSubCategory, setCurrentSubCategory] = useState({});
  const [categoriesArticle, setCategoriesArticle] = useState([]);

  const articleCategories = (result) => {
    let categories = [];
    result.forEach((item) => {
      if (item.subCategory.length) {
        categories.push({
          id: item.id,
          name: item.name,
          status: item.status
        });
        item.subCategory.forEach((sub) => {
          categories.push(sub)
        });
      } else {
        categories.push({
          id: item.id,
          name: item.name,
          status: item.status
        });
      }        
    });
    setCategoriesArticle(categories);
  }
  
  const getCategories = async (isArticle = false) => {
    const result = await getAllCategoriesAndSub();
    setCategories(result)
    if (isArticle) {
      articleCategories(result)
    }
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
  const handlerEditSub = async (id) => {
    let data = {
      idCategory: idSub,
      name: nameCategory,
      status: statusCategory === 'true' ? true : false,
    }
    const result = await editSubCategory(id, data);

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
  const getCurrentSubCategory = async (id) => {
    const result = await getSubCategoryId(id);
    setCurrentSubCategory(result);
  }
  const editCurrentCategory = async (id) => {
    const result = await getCategoryId(id);
    setNameCategory(result.name);
    setStatusCategory(result.status ? "true" : "false");
  }
  const editCurrentSubCategory = async (id) => {
    const result = await getSubCategoryId(id);
    setCurrentSubCategory(result);
    setNameCategory(result.name);
    setStatusCategory(result.status ? "true" : "false");
    setIdSub(result.idCategory);
    setIsSub(true);
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
      currentSubCategory,
      getCurrentSubCategory,
      editCurrentSubCategory,
      handlerEditSub,
      categoriesArticle,
    }}>
      {children}
    </CategoryContext.Provider>
  )
}

export { CategoryProvider, CategoryContext }