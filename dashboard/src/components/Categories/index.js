import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Arrow } from 'utils/icons'
import { friendlyUrl } from 'utils/utils';
import * as S from './styles'

const Categories = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <S.Category>
      <S.CategoryText onClick={() => setOpen(!open)}>
       <S.CategoryLink to={`/contents/category/${friendlyUrl(item.id)}`}>
        {item.subCategory.length > 0 && <S.IconCategory open={open}><Arrow /></S.IconCategory>}
        <S.CategoryStatus status={item.status} space={item.subCategory.length > 0 ? true : false} />{item.name}
      </S.CategoryLink>
      </S.CategoryText>            
      <S.SubCategory open={open}>
        {item.subCategory.map((sub) => (        
          <S.SubCategoryLi key={sub.id}>
            <S.CategoryLink to={`/contents/subcategory/${friendlyUrl(sub.id)}`}>
              <S.CategoryStatus status={sub.status} space={true} /> {sub.name}
            </S.CategoryLink>
          </S.SubCategoryLi>
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