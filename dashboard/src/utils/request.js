import axios from 'axios'

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/categories`);
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