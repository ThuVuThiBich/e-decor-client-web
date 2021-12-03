import { withAuthLayout } from "hocs";
import withoutAuth from "hocs/withoutAuth";
import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import SignUp from "pages/SignUp";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={withAuthLayout(Home)} exact />

      <Route path={"/login"} component={withoutAuth(Login)} exact />
      <Route path={"/sign-up"} component={withoutAuth(SignUp)} exact />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
