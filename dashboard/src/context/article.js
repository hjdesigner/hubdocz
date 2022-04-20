import React, { useState, createContext } from 'react'
import { friendlyUrl } from 'utils/utils'
import { 
  createArticle,
  getAllArticles,
  getArticleId,
} from 'utils/request'

const ArticleContext = createContext();

function ArticleProvider({ children }) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('true')
  const [category, setCategory] = useState('')
  const [text, setText] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);

  const resetState = () => {
    setTitle('')
    setStatus('true')
    setCategory('')
    setText('')
  }

  const saveArticle = async () => {
    const url = friendlyUrl(title); 
    const data = {
      name: title,
      status,
      idCategory: category,
      text,
      slug: url,
    }

    const response = await createArticle(data);

    if (response) {
      setError(false)
      setSuccess(true)
      resetState()
      return;
    }

    setSuccess(false)
    setError(true)
  }

  const allArticles = async (id) => {
    const response = await getAllArticles(id);
    setArticles(response);
  }

  const getArticle = async (id) => {
    const response = await getArticleId(id);

    if (response) {
      setTitle(response.name)
      setStatus(response.status)
      setCategory(response.idCategory)
      setText(response.text)
    }
  }

  return (
    <ArticleContext.Provider value={{
      title,
      status,
      category,
      text,
      success,
      error,
      articles,
      setTitle,
      setStatus,
      setCategory,
      setText,
      setSuccess,
      setError,
      saveArticle,
      allArticles,
      getArticle,
    }}>
      {children}
    </ArticleContext.Provider>
  )
}

export { ArticleProvider, ArticleContext }