import { withAuthLayout } from "hocs";
import withoutAuth from "hocs/withoutAuth";
import AddBlog from "pages/blog/addBlog";
import Blog from "pages/blog/Blog";
import MyBlogDetail from "pages/blog/myBlogDetail";
import MyBlogs from "pages/blog/myBlogs";
import MyFavorite from "pages/blog/myFavorite";
import ViewPost from "pages/blog/ViewPost";
import withBlog from "pages/blog/withBlog";
import withBlogGuess from "pages/blog/withBlogGuess";
import Cart from "pages/cart";
import Checkout from "pages/checkout";
import ForgotPassword from "pages/ForgotPassword";
import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Product from "pages/product";
import Search from "pages/product/search";
import ResetPassword from "pages/ResetPassword";
import withSeller from "pages/seller";
import Dashboard from "pages/seller/dashboard";
import SellerOrderDetail from "pages/seller/orderDetail";
import SellerOrders from "pages/seller/orders";
import Products from "pages/seller/products";
import CategoryProducts from "pages/seller/products/categoryProducts";
import NewProduct from "pages/seller/products/newProduct";
import ViewProduct from "pages/seller/products/viewProduct";
import Promotions from "pages/seller/promotions";
import Settings from "pages/seller/settings";
import Shops from "pages/shops";
import ShopDetail from "pages/shops/shop";
import SignUp from "pages/SignUp";
import withUser from "pages/user";
import Address from "pages/user/address";
import ChangePassword from "pages/user/changePass";
import OrderDetail from "pages/user/orderDetail";
import Orders from "pages/user/orders";
import Profile from "pages/user/profile";
import Wishlist from "pages/user/wishlist/Wishlist";
import VerifyEmail from "pages/VerifyEmail";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={withAuthLayout(Home)} exact />
      <Route path="/blog" component={withBlogGuess(Blog)} exact />
      <Route
        path="/blog/posts/:postId"
        component={withBlogGuess(ViewPost)}
        exact
      />
      <Route path="/blog/my-posts" component={withBlog(MyBlogs)} exact />
      <Route
        path="/blog/my-posts/:blogId"
        component={withBlog(MyBlogDetail)}
        exact
      />
      <Route path="/blog/add" component={withBlog(AddBlog)} exact />
      <Route path="/blog/my-favorite" component={withBlog(MyFavorite)} exact />

      <Redirect from={"/home"} to={"/"} />
      <Route path={"/login"} component={withoutAuth(Login)} exact />
      <Route path={"/sign-up"} component={withoutAuth(SignUp)} exact />
      <Route
        path={"/verify-email"}
        component={withoutAuth(VerifyEmail)}
        exact
      />
      <Route
        path={"/forgot-password"}
        component={withoutAuth(ForgotPassword)}
        exact
      />
      <Route
        path={"/reset-password"}
        component={withoutAuth(ResetPassword)}
        exact
      />

      <Route path={"/shops"} component={withAuthLayout(Shops)} exact />
      <Route path={"/shops/:id"} component={withAuthLayout(ShopDetail)} exact />
      <Route path={"/product/:id"} component={withAuthLayout(Product)} exact />
      <Route path={"/profile"} component={withUser(Profile)} exact />
      <Route path={"/orders"} component={withUser(Orders)} exact />
      <Route path={"/orders/:id"} component={withUser(OrderDetail)} exact />
      <Route path={"/wishlist"} component={withUser(Wishlist)} exact />
      <Route path={"/support"} component={withUser(Orders)} exact />
      <Route path={"/address"} component={withUser(Address)} exact />
      <Route
        path={"/change-password"}
        component={withUser(ChangePassword)}
        exact
      />
      <Route path={"/address/:id"} component={withUser(Address)} exact />

      <Route path={"/products"} component={withAuthLayout(Search)} exact />
      <Route
        path={"/products/:categoryName"}
        component={withAuthLayout(Search)}
        exact
      />
      <Route path={"/cart"} component={withAuthLayout(Cart)} exact />
      <Route path={"/checkout"} component={withAuthLayout(Checkout)} exact />

      <Route path={"/shop/dashboard"} component={withSeller(Dashboard)} exact />
      <Route path={"/shop/settings"} component={withSeller(Settings)} exact />
      <Route
        path={"/shop/promotions"}
        component={withSeller(Promotions)}
        exact
      />
      <Route
        path={"/shop/promotions/:id"}
        component={withSeller(Promotions)}
        exact
      />
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
