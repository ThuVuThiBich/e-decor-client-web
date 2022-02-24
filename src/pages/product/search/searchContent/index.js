import { Box, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Products from "components/shop/shopContent/products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getShopCategories } from "redux/categoryRedux";
import { getProducts, getShopProducts } from "redux/productRedux";
import {
  categorySelector,
  productSelector,
  wishlistSelector,
} from "redux/selectors";
import Filter from "../filter";
import { useStyles } from "./styles";
export default function SearchContent(props) {
  const { isLoading } = useSelector(wishlistSelector);
  const classes = useStyles();
  const limit = 9;

  const { id } = useParams();
  const dispatch = useDispatch();

  const storeProducts = useSelector(productSelector);
  const [ratingValue, setRatingValue] = useState("");

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState("");
  const [pageText, setPageText] = useState("");
  useEffect(() => {
    if (page === 1) {
      setPageText(`1 - ${storeProducts?.products?.length}`);
    } else {
      if (storeProducts?.products?.length === 1) {
        setPageText(`${(page - 1) * limit + 1}`);
      } else {
        let start = (page - 1) * limit + 1;
        let end = limit * page;
        if (storeProducts?.products?.length !== limit)
          end = start + (storeProducts?.products?.length - 1);
        setPageText(`${start} - ${end}`);
      }
    }
  }, [limit, page, storeProducts?.products?.length]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(
      getProducts({
        limit,
        page,
        categories: [4, 5],
        min,
        max,
        ratings: ratingValue,
      })
    );
  }, [categories, dispatch, id, max, min, page, ratingValue, isLoading]);

  const storeCategory = useSelector(categorySelector);
  // useEffect(() => {
  //   dispatch(getShopCategories(id));
  // }, [dispatch, id]);

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} md={3} className={classes.sidebar}>
        <Filter
          categories={storeCategory.categories}
          setCategories={setCategories}
          setMin={setMin}
          setMax={setMax}
          setRatingValue={setRatingValue}
          ratingValue={ratingValue}
        />
      </Grid>
      <Grid item xs={12} md={9} className={classes.list}>
        <Products products={storeProducts?.products} />
        <Box
          py={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            Showing {pageText} of {storeProducts.totalProducts} Products
          </Box>
          <Box>
            <Pagination
              count={Math.ceil(storeProducts.totalProducts / limit)}
              page={page}
              onChange={handleChange}
              variant="outlined"
              color="primary"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
