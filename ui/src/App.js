import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"; //React-Router import
import Detail from './component/detail/Detail';
import Main from './component/main/Main';
import DataProvider from './DataProvider';
import Recommand from './component/recommand/Recommand';
import './App.css'



function App() {
  return (
    <>
    <BrowserRouter >
      <Route path="/" exact component={Main} />
      <Route path="/recommand" exact component={Recommand} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/dataTest" exact component={DataProvider}/>
    </ BrowserRouter >
    </>
  )
}

export default App;
