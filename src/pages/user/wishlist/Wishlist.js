import {
  Box,
  Button,
  Grid,
  Typography
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Product from "components/shop/shopContent/products/product";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wishlistSelector } from "redux/selectors";
import { getWishlists } from "redux/wishlistRedux";
import { useStyles } from "./styles";

export default function Wishlist() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { wishlists } = useSelector(wishlistSelector);
  useEffect(() => {
    dispatch(getWishlists());
  }, [dispatch]);
 
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <FavoriteIcon className={classes.icon} style={{ color: "#D23F57" }} />
          <Typography className={classes.title}>My Wish List</Typography>
        </Box>
        <Button color="primary" variant="outlined">Add All To Cart</Button>
      </Box>
      <Box my={4}>
        <Grid container spacing={3}>
          {wishlists?.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} lg={4}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
