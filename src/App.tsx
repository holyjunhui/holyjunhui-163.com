import React from 'react';
import './App.css';
// import Login from "./views/login";
import { Route as ReactRoute, Switch, HashRouter, Redirect } from "react-router-dom";
import  PrimaryLayout from "./layout/PrimaryLayout";
function App() {
  return (
    <HashRouter basename="/">
      <Switch>
			    {/* <ReactRoute path="/" exact render={() => <Redirect to="/monitor" />}></ReactRoute> */}
      		{/* <ReactRoute path="/login" exact component={Login}></ReactRoute> */}
        	<PrimaryLayout />
      </Switch>
    </HashRouter>
  );
}

export default App;
