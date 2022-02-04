import { Container } from "@material-ui/core";
import CartItems from "components/cart";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "redux/cartRedux";
import { cartSelector, userSelector } from "redux/selectors";
import { useStyles } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(userSelector);
  const { products, isUpdated } = useSelector(cartSelector);

  useEffect(() => {
    currentUser && dispatch(getCartItems());
  }, [currentUser, dispatch, isUpdated]);
  return (
    <Container className={classes.container}>
      {products?.map((item, index) => (
        <CartItems item={item} key={index} />
      ))}
      <ToastContainer
        hideProgressBar
        autoClose={1000}
        style={{ marginTop: "100px" }}
      />
    </Container>
  );
}
