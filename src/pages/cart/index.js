import { Container } from "@material-ui/core";
import React from "react";
import CartItems from "components/cart";
import { useStyles } from "./styles";

export default function Cart() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <CartItems />
    </Container>
  );
}
