import { Container } from "@material-ui/core";
import React from "react";
import CartItems from "components/cart";

export default function Cart() {
  return (
    <Container style={{ paddingTop: 150 }}>
      <CartItems />
    </Container>
  );
}
