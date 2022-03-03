import { Container } from "@material-ui/core";
import ScrollToTop from "components/common/ScrollToTop";
import SearchBox from "components/common/SearchBox";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "redux/filterRedux";
import { getProducts } from "redux/productRedux";
import { filterSelector } from "redux/selectors";
import SearchContent from "./searchContent";
import { useStyles } from "./styles";

export default function Search() {
  ScrollToTop();
  const classes = useStyles();
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
