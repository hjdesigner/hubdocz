import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const MainPage = lazy(() => import('pages/main'));

const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

export default App