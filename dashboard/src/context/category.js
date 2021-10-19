import React, { useState, createContext } from 'react'
import { getAllCategories, createCategory, deleteCategory, editCategory } from 'utils/request'

const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [toggleAddCategory, setToggleAddCategory] = useState(false);
  const [nameCategory, setNameCategory] = useState('');
  const [successCategory, setSuccessCategory] = useState(false);
  const [errorCategory, setErrorCategory] = useState(false);
  const [successDeleteCategory, setSuccessDeleteCategory] = useState(false);
  const [errorDeleteCategory, setErrorDeleteCategory] = useState(false);
  const [showCategory, setShowCategory] = useState(true);
  const [updateCategory, setUpdateCategory] = useState(false);
  const [idCategory, setIdCategory] = useState('');

  const getCategories = async () => {
    const result = await getAllCategories();
    setCategories(result)
  }

  const handleToggleAddCategory = () => {
    setErrorCategory(false);
    setSuccessCategory(false);
    setToggleAddCategory(true);
    setUpdateCategory(false);
    setNameCategory('');
    setShowCategory(true);
    setIdCategory('');
  }

  const handleAddAndUpdateCategory = async (id, update) => {
    let result = {};
    setErrorCategory(false);
    setSuccessCategory(false);
    setSuccessDeleteCategory(false);
    setErrorDeleteCategory(false);

    if (!update) {
       result = await createCategory({
        name: nameCategory,
        status: Boolean(showCategory),
      });
    } else {
      result = await editCategory(id, {
        name: nameCategory,
        status: Boolean(showCategory),
      });
    }
    

    if (result) {
      setNameCategory('');
      setShowCategory(true);
      setErrorCategory(false);
      setSuccessCategory(true);
      setToggleAddCategory(false);

      const allCategories = await getAllCategories();
      setCategories(allCategories)

      return;
    }
    setErrorCategory(true);
  }

  const handlerDelete = async (id) => {
    setErrorCategory(false);
    setSuccessCategory(false);
    setSuccessDeleteCategory(false);
    setErrorDeleteCategory(false);

    const result = await deleteCategory(id);

    if (result) {
      setSuccessDeleteCategory(true);
      setErrorDeleteCategory(false);

      const allCategories = await getAllCategories();
      setCategories(allCategories)

      return;
    }
    setErrorDeleteCategory(true);
  }

  const handlerEdit = (id) => {
    const filterCategory = categories.filter((item) => item.id === id);
    setNameCategory(filterCategory[0].name);
    setShowCategory(filterCategory[0].status);
    setIdCategory(filterCategory[0].id);
    setErrorCategory(false);
    setSuccessCategory(false);
    setSuccessDeleteCategory(false);
    setErrorDeleteCategory(false);
    setToggleAddCategory(true);
    setUpdateCategory(true);    
  }
  const handlerShowCategory = () => setShowCategory(!showCategory);
 
  return (
    <CategoryContext.Provider value={{
      categories,
      toggleAddCategory,
      nameCategory,
      successCategory,
      errorCategory,
      showCategory,
      successDeleteCategory,
      errorDeleteCategory,
      getCategories,
      handleToggleAddCategory,
      setToggleAddCategory,
      handleAddAndUpdateCategory,
      setNameCategory,
      setShowCategory,
      setErrorCategory,
      setSuccessCategory,
      handlerDelete,
      setSuccessDeleteCategory,
      setErrorDeleteCategory,
      handlerEdit,
      updateCategory,
      idCategory,
      handlerShowCategory,
    }}>
      {children}
    </CategoryContext.Provider>
  )
}

export { CategoryProvider, CategoryContext }