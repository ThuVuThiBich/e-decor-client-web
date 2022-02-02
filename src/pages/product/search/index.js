import { Container } from "@material-ui/core";
import SearchBox from "components/common/SearchBox";
import Bottom from "components/product/bottom";
import Mid from "components/product/mid";
import Top from "components/product/top";
import ShopContent from "components/shop/shopContent";
import ShopInfo from "components/shop/shopInfo";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "redux/productRedux";
import { useStyles } from "./styles";

export default function Search() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getProducts(id));
  }, [dispatch, id]);
  return (
    <Container className={classes.container}>
      <SearchBox />
      <ShopContent />
    </Container>
  );
}