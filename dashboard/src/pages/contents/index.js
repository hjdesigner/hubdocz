import React, { useEffect, useState } from 'react'
import { getAllCategories } from 'utils/request'
import { Categories } from 'components'
import * as S from './styles'

const ContentsTemplate = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function categories() {
      const result = await getAllCategories();
      setCategories(result)
    }
    
    categories()
  }, []);
  return (
    <S.Wrapper>
      <S.WrapperCategories>
        <S.TitleCategory>Categories</S.TitleCategory>

        {categories.map((item) => ( <Categories key={item.id} item={item} /> ))}
      </S.WrapperCategories>
    </S.Wrapper>
  )
}

export default ContentsTemplate