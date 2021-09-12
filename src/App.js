import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';

function App({ props }) {

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => <LandingPage props={props} />}
      ></Route>
      <Route
        path="/result/:finalType"
        render={(props) => <ResultPage props={props} {...props} />}
      ></Route>
      <ResultPage />
    </Switch >
  );
}

export default App;