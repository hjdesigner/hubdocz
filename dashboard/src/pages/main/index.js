import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Nav } from 'components'
import { HOME, CONTENTS, ADD_CATEGORY, CATEGORY, EDIT_CATEGORY } from 'utils/routes'

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
`;

export default Main;