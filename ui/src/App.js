import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; //React-Router import
import Detail from "./component/detail/Detail";
import Main from "./component/main/Main";
import { DataProvider, DataContext } from "./DataProvider";
import Recommend from "./component/recommend/Recommend";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={Main} />
        <Route path="/recommend" exact component={Recommend} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/dataTest" exact component={DataProvider} />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
