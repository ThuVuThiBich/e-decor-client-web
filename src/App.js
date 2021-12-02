import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import SignUp from "pages/SignUp";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      <Route path="/register">{user ? <Redirect to="/" /> : <SignUp />}</Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
