import { Container } from "@material-ui/core";
import ShopContent from "components/shop/shopContent";
import ShopInfo from "components/shop/shopInfo";
import React from "react";
import { useStyles } from "./styles";

export default function ShopDetail() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <ShopInfo />
      <ShopContent />
    </Container>
  );
}
