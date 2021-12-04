import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Arrow } from 'utils/icons'
import * as S from './styles'

const Categories = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <S.Category>
      <S.CategoryText onClick={() => setOpen(!open)}>
       {item.subCategory.length > 0 && <S.IconCategory open={open}><Arrow /></S.IconCategory>}
       <S.CategoryStatus status={item.status} space={item.subCategory.length > 0 ? true : false} />{item.name}
      </S.CategoryText>            
      <S.SubCategory open={open}>
        {item.subCategory.map((sub) => (        
          <S.SubCategoryLi key={sub.id}>{sub.name}</S.SubCategoryLi>
        ))}      
      </S.SubCategory>
    </S.Category>
  )
}

Categories.propTypes = {
  item: PropTypes.object,
  handlerEdit: PropTypes.func,
  handlerDelete: PropTypes.func,
}

export default Categories;