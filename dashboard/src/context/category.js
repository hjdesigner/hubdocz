import React, { useState, createContext } from 'react'
import { getAllCategories, createCategory, deleteCategory } from 'utils/request'

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

  const getCategories = async () => {
    const result = await getAllCategories();
    setCategories(result)
  }

  const handleToggleAddCategory = () => {
    setErrorCategory(false);
    setSuccessCategory(false);
    setToggleAddCategory(true);
  }

  const handleAddCategory = async () => {
    setErrorCategory(false);
    setSuccessCategory(false);
    setSuccessDeleteCategory(false);
    setErrorDeleteCategory(false);

    const result = await createCategory({
      name: nameCategory,
      status: showCategory,
    });

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
      handleAddCategory,
      setNameCategory,
      setShowCategory,
      setErrorCategory,
      setSuccessCategory,
      handlerDelete,
      setSuccessDeleteCategory,
      setErrorDeleteCategory,
    }}>
      {children}
    </CategoryContext.Provider>
  )
}

export { CategoryProvider, CategoryContext }