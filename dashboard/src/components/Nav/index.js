import React from 'react'
import { Link } from "react-router-dom";
import { Note } from 'utils/icons'
import { CONTENTS } from 'utils/routes'
import * as S from './style'

const Nav = () => {
  return (
    <S.NavContainer>
      <S.NavUl>
        <S.NavLi>
          <Link to={CONTENTS}>
            <Note />
          </Link>          
        </S.NavLi>
      </S.NavUl>
    </S.NavContainer>
  )
}

export default Nav;