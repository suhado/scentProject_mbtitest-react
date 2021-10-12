import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/ResultPage";
import MorePerfumePage from "./pages/MorePerfumePage";
import testpage from "./pages/testpage";

function App({ props }) {
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
      <Route path="/perfume-detail/:finalType" component={MorePerfumePage} />
      <Route path="/testpage" component={testpage} />
      <ResultPage />
    </Switch>
  );
}

export default App;
