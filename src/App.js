import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/ResultPage";
import MorePerfumePage from "./pages/MorePerfumePage";

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
      {/* 일단 라우트 추가했는데 맞는지 잘 모르겠엄  */}
      <Route
        path="/more/:finalType"
        render={(props) => <MorePerfumePage props={props} {...props} />}
      ></Route>
      <ResultPage />
    </Switch>
  );
}

export default App;
