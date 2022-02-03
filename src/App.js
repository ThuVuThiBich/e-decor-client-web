import { withAuthLayout } from "hocs";
import withoutAuth from "hocs/withoutAuth";
import Cart from "pages/cart";
import Checkout from "pages/checkout";
import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Product from "pages/product";
import Search from "pages/product/search";
import withSeller from "pages/seller";
import Dashboard from "pages/seller/dashboard";
import SellerOrderDetail from "pages/seller/orderDetail";
import SellerOrders from "pages/seller/orders";
import Products from "pages/seller/products";
import CategoryProducts from "pages/seller/products/categoryProducts";
import NewProduct from "pages/seller/products/newProduct";
import ViewProduct from "pages/seller/products/viewProduct";
import Settings from "pages/seller/settings";
import Shops from "pages/shops";
import ShopDetail from "pages/shops/shop";
import SignUp from "pages/SignUp";
import withUser from "pages/user";
import Address from "pages/user/address";
import OrderDetail from "pages/user/orderDetail";
import Orders from "pages/user/orders";
import Profile from "pages/user/profile";
import Wishlist from "pages/user/wishlist/Wishlist";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={withAuthLayout(Home)} exact />
      <Redirect from={"/home"} to={"/"} />
      <Route path={"/login"} component={withoutAuth(Login)} exact />
      <Route path={"/sign-up"} component={withoutAuth(SignUp)} exact />
      <Route path={"/shops"} component={withAuthLayout(Shops)} exact />
      <Route path={"/shops/:id"} component={withAuthLayout(ShopDetail)} exact />
      <Route path={"/product/:id"} component={withAuthLayout(Product)} exact />
      <Route path={"/profile"} component={withUser(Profile)} exact />
      <Route path={"/orders"} component={withUser(Orders)} exact />
      <Route path={"/orders/:id"} component={withUser(OrderDetail)} exact />
      <Route path={"/wishlist"} component={withUser(Wishlist)} exact />
      <Route path={"/support"} component={withUser(Orders)} exact />
      <Route path={"/address"} component={withUser(Address)} exact />
      <Route path={"/address/:id"} component={withUser(Address)} exact />

      <Route path={"/products"} component={withAuthLayout(Search)} exact />
      <Route path={"/products/:categoryName"} component={withAuthLayout(Search)} exact />
      <Route path={"/cart"} component={withAuthLayout(Cart)} exact />
      <Route path={"/checkout"} component={withAuthLayout(Checkout)} exact />

      <Route path={"/shop/dashboard"} component={withSeller(Dashboard)} exact />
      <Route path={"/shop/settings"} component={withSeller(Settings)} exact />
      <Route path={"/shop/products"} component={withSeller(Products)} exact />
      <Route
        path={"/shop/products/:categoryName"}
        component={withSeller(CategoryProducts)}
        exact
      />
      <Route
        path={"/shop/products/:categoryName/:productId"}
        component={withSeller(ViewProduct)}
        exact
      />
      <Route
        path={"/shop/add-product"}
        component={withSeller(NewProduct)}
        exact
      />
      <Route
        path={"/shop/add-product/:categoryName"}
        component={withSeller(NewProduct)}
        exact
      />
      <Route path={"/shop/orders"} component={withSeller(SellerOrders)} exact />
      <Route
        path={"/shop/orders/:id"}
        component={withSeller(SellerOrderDetail)}
        exact
      />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
