import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { LoadingCard } from "components/common/LoadingCard";
import React, { useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { getShopCategories } from "redux/categoryRedux";
import { categorySelector, shopSelector } from "redux/selectors";
import Category from "./category";
import { useStyles } from "./styles";

export default function Categories() {
  const dispatch = useDispatch();

  const classes = useStyles();
  const storeCategory = useSelector(categorySelector);
  const { isLoading } = useSelector(categorySelector);
  const { id } = useSelector(shopSelector).currentShop;
  useEffect(() => {
    dispatch(getShopCategories(id));
  }, [dispatch, id]);
  return (
    <Paper>
      <Box p={4} my={2}>
        <Box pb={2}>
          <Typography className={classes.headText}>All Categories</Typography>
        </Box>

        <Grid container spacing={3}>
          {isLoading
            ? [1, 2, 3, 4, 5, 6].map((item) => (
                <Grid item xs={12} md={4} key={item}>
                  <LoadingCard />
                </Grid>
              ))
            : storeCategory.shopCategories?.map((category) => (
                <Grid item xs={12} md={4} key={category.categoryId}>
                  <Category category={category} />
                </Grid>
              ))}
        </Grid>
      </Box>
    </Paper>
  );
}
