import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Nav } from 'components'
import {
  HOME,
  CONTENTS,
  ADD_CATEGORY,
  CATEGORY,
  EDIT_CATEGORY,
  SUB_CATEGORY,
  EDIT_SUB_CATEGORY,
  ADD_ARTICLE,
  EDIT_ARTICLE,
} from 'utils/routes'

const HomeTemplate = React.lazy(
  () => import('pages/home')
);
const ContentsTemplate = React.lazy(
  () => import('pages/contents')
);
const AddCategoryTemplate = React.lazy(
  () => import('pages/addCategory')
)
const CategoryTemplate = React.lazy(
  () => import('pages/category')
)
const EditCategoryTemplate = React.lazy(
  () => import('pages/editCategory')
)
const SubCategoryTemplate = React.lazy(
  () => import('pages/subCategory')
)
const EditSubCategoryTemplate = React.lazy(
  () => import('pages/editSubCategory')
)
const AddArticleTemplate = React.lazy(
  () => import('pages/addArticle')
)
const EditArticleTemplate = React.lazy(
  () => import('pages/editArticle')
)

const Main = () => (
  <>
    <Suspense fallback='Loading...'>
      <WrapperLeft>
        <Nav />
      </WrapperLeft>
      <WrapperRight>
        <Switch>
          <Route
            path={HOME}
            exact
            component={HomeTemplate}
          />
          <Route
            path={CONTENTS}
            exact
            component={ContentsTemplate}
          />
          <Route
            path={ADD_CATEGORY}
            exact
            component={AddCategoryTemplate}
          />
          <Route
            path={CATEGORY}
            exact
            component={CategoryTemplate}
          />
          <Route
            path={EDIT_CATEGORY}
            exact
            component={EditCategoryTemplate}
          />
          <Route
            path={SUB_CATEGORY}
            exact
            component={SubCategoryTemplate}
          />
          <Route
            path={EDIT_SUB_CATEGORY}
            exact
            component={EditSubCategoryTemplate}
          />
          <Route
            path={ADD_ARTICLE}
            exact
            component={AddArticleTemplate}
          />
          <Route
            path={EDIT_ARTICLE}
            exact
            component={EditArticleTemplate}
          />
        </Switch>
      </WrapperRight>      
    </Suspense>
  </>
);

const WrapperLeft = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
`;
const WrapperRight = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  margin-left: 3%;
  flex-wrap: wrap;
`;

export default Main;