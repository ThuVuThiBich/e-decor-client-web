import NotFound from 'components/Common/NotFound';
import Home from 'pages/Home';
import Login from 'pages/Login';
import React from 'react';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
