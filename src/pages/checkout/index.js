import { Container } from "@material-ui/core";
import DeliveryAddress from "components/checkout/deliveryAddress";
import PaymentMethod from "components/checkout/paymentMethod";
import ProductsOrdered from "components/checkout/productsOrdered";
import React from "react";
import { useStyles } from "./styles";

export default function Checkout() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <DeliveryAddress />
      <ProductsOrdered />
      <PaymentMethod />
    </Container>
  );
}
