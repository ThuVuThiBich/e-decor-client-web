import { Container } from "@material-ui/core";
import Bottom from "components/product/bottom";
import Mid from "components/product/mid";
import Top from "components/product/top";
import React from "react";
import { useStyles } from "./styles";

export default function Product() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Top />
      <Mid />
      <Bottom />
    </Container>
  );
}
