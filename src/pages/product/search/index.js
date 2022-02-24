import { Container } from "@material-ui/core";
import SearchBox from "components/common/SearchBox";
import ShopContent from "components/shop/shopContent";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { resetFilter } from "redux/filterRedux";
import { getProducts } from "redux/productRedux";
import { categorySelector, filterSelector } from "redux/selectors";
import { getCategoryId } from "utils/helpers";
import SearchContent from "./searchContent";
import { useStyles } from "./styles";

export default function Search() {
  const classes = useStyles();
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { categories, limit, page, min, max, ratings, keyword } =
    useSelector(filterSelector);

  useEffect(() => {
    dispatch(
      getProducts({
        limit,
        page,
        categories,
        min,
        max,
        ratings,
        keyword,
      })
    );
  }, [categories, dispatch, limit, max, min, page, ratings, keyword]);
  return (
    <Container className={classes.container}>
      <SearchBox />
      <SearchContent />
    </Container>
  );
}
