import {
  Table,
  Container,
  TableBody,
  TableContainer,
  Paper,
  TableHead,
  TableCell,
  TableRow,
  Box,
} from "@material-ui/core";
import React, { useEffect } from "react";
import CartItems from "components/cart";
import { useStyles } from "./styles";
import { cartSelector, userSelector } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "redux/cartRedux";
import { LoadingTable } from "components/common/LoadingTable";

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
    </Container>
  );
}
