import { withAuthLayout } from "hocs";
import withoutAuth from "hocs/withoutAuth";
import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import SignUp from "pages/SignUp";
import withUser from "pages/user";
import OrderDetail from "pages/user/orderDetail";
import Orders from "pages/user/orders";
import Profile from "pages/user/profile";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={withAuthLayout(Home)} exact />
      <Redirect from={"/home"} to={"/"} />
      <Route path={"/login"} component={withoutAuth(Login)} exact />
      <Route path={"/sign-up"} component={withoutAuth(SignUp)} exact />
      <Route path={"/profile"} component={withUser(Profile)} exact />
      <Route path={"/orders"} component={withUser(Orders)} exact />
      <Route path={"/orders/:id"} component={withUser(OrderDetail)} exact />
      <Route path={"/wishlist"} component={withUser(Orders)} exact />
      <Route path={"/support"} component={withUser(Orders)} exact />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
