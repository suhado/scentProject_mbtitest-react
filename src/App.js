import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/ResultPage";
import MorePerfumePage from "./pages/MorePerfumePage";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <LandingPage props={props} />}
      ></Route>
      <Route
        path="/result/:finalType"
        render={(props) => <ResultPage props={props} {...props} />}
      ></Route>
      <Route
        path="/more/:finalType"
        render={(props) => <MorePerfumePage props={props} {...props} />}
      ></Route>
    </Switch>
  );
}

export default App;
