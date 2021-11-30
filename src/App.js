import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Register from "pages/SignUp";
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
      <Route path="/register">
        {user ? <Redirect to="/" /> : <Register />}
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
