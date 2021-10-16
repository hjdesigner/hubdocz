import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Nav } from 'components'
import { HOME } from 'utils/routes'

const HomeTemplate = React.lazy(
  () => import('pages/home')
);

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
  margin-left: 5%;
`;

export default Main;