import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "redux/productRedux";
import { productSelector } from "redux/selectors";
import Filter from "./filter";
import Products from "./products";
import { useStyles } from "./styles";
export default function ShopContent(props) {
  const classes = useStyles();

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts({ id, params: { limit: 5, page: 1 } }));
  }, [dispatch, id]);
  const storeProduct = useSelector(productSelector);
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} md={3} className={classes.sidebar}>
        <Filter />
      </Grid>
      <Grid item xs={12} md={9} className={classes.list}>
        <Products products={storeProduct.products} />
      </Grid>
    </Grid>
  );
}
