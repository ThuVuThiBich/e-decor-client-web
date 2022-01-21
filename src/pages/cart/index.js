import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import CartItems from "components/cart";
import { useStyles } from "./styles";
import { cartSelector, userSelector } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "redux/cartRedux";

export default function Cart() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(userSelector);

  // useEffect(() => {
  //   console.log("Cart");
  //   currentUser && dispatch(getCartItems());
  // }, [currentUser, dispatch]);
  const { products } = useSelector(cartSelector);
  return (
    <Container className={classes.container}>
      {products?.map((item, index) => (
        <CartItems item={item} key={index} />
      ))}
    </Container>
  );
}
