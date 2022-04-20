import { useContext } from 'react'
import { ArticleContext } from '../context'

function useArticle() {
  return useContext(ArticleContext)
}

export default useArticle