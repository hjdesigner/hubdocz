import axios from 'axios'

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/categories`);
    return response.data;
  } catch {
    return false;
  }
}
export const getCategoryId = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/category/${id}`);
    return response.data;
  } catch {
    return false;
  }
}
export const createCategory = async (data) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API}/category`, data);
    return response.data;
  } catch {
    return false;
  }
}
export const createSubCategory = async (data) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API}/subcategory`, data);
    return response.data;
  } catch {
    return false;
  }
}
export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_API}/category/${id}`);
    return response.data;
  } catch {
    return false;
  }
}
export const editCategory = async (id, data) => {
  try {
    const response = await axios.put(`${process.env.REACT_APP_API}/category/${id}`, data);
    return response.data;
  } catch {
    return false;
  }
}
export const getAllCategoriesAndSub = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/categoryandsubcategory`);
    return response.data;
  } catch {
    return false
  }
}
export const getSubCategoryId = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/subcategory/${id}`);
    return response.data;
  } catch {
    return false;
  }
}
export const editSubCategory = async (id, data) => {
  try {
    const response = await axios.put(`${process.env.REACT_APP_API}/subcategory/${id}`, data);
    return response.data;
  } catch {
    return false;
  }
}