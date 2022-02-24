import { Container } from "@material-ui/core";
import SearchBox from "components/common/SearchBox";
import ShopContent from "components/shop/shopContent";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "redux/productRedux";
import { categorySelector } from "redux/selectors";
import { getCategoryId } from "utils/helpers";
import SearchContent from "./searchContent";
import { useStyles } from "./styles";

export default function Search() {
  const classes = useStyles();
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { categories } = useSelector(categorySelector);
  useEffect(() => {
    categoryName &&
      dispatch(
        getProducts({ categories: getCategoryId(categoryName, categories) })
      );
  }, [categories, categoryName, dispatch]);
  return (
    <Container className={classes.container}>
      <SearchBox />
      <SearchContent />
    </Container>
  );
}
