import { Container } from "@material-ui/core";
import Bottom from "components/product/bottom";
import Mid from "components/product/mid";
import Top from "components/product/top";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "redux/productRedux";
import { useStyles } from "./styles";

export default function Product() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);
  return (
    <Container className={classes.container}>
      <Top />
      <Mid />
      <Bottom />
    </Container>
  );
}
