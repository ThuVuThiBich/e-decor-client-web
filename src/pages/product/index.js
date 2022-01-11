import { Container } from "@material-ui/core";
import Bottom from "components/product/bottom";
import Mid from "components/product/mid";
import Top from "components/product/top";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "redux/productRedux";
import { productSelector } from "redux/selectors";
import { useStyles } from "./styles";

export default function Product() {
  const classes = useStyles();
  const store = useSelector((state) => state);
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);
  const storeProduct = useSelector(productSelector);
  return (
    <Container className={classes.container}>
      <Top product={storeProduct.product}/>
      <Mid />
      <Bottom />
    </Container>
  );
}
