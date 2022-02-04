import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/ResultPage";
import MorePerfumePage from "./pages/MorePerfumePage";
function App() {
  return (
      <Routes>
        <Route
          path="/scentProject_jquery-to-react"
          element={<LandingPage />}
        ></Route>
        <Route
          path="/result/:finalType"
          element={<ResultPage />}
        ></Route>
        <Route
          path="/more/:finalType"
          element={<MorePerfumePage />}
        ></Route>
      </Routes>    
  );
}

export default App;
