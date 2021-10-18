import { useContext } from 'react'
import { CategoryContext } from '../context'

function useCategory() {
  return useContext(CategoryContext)
}

export default useCategory