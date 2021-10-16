import axios from 'axios'

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/categories`);
    return response.data;
  } catch {
    return false;
  }
}