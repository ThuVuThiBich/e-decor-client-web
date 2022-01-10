import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { getShopCategories } from "redux/categoryRedux";
import { categorySelector, shopSelector } from "redux/selectors";
import Category from "./category";
import { useStyles } from "./styles";

const categoriesMock = [
  { label: "lighting", name: "Lighting" },
  { label: "candles", name: "Candles" },
  { label: "stationary", name: "Stationary" },
  { label: "storage", name: "Storage" },
  { label: "clocks", name: "Clocks" },
  { label: "plants", name: "Plants" },
];
export default function Categories() {
  const dispatch = useDispatch();

  const classes = useStyles();
  const storeCategory = useSelector(categorySelector);
  const { id } = useSelector(shopSelector).currentShop;
  console.log(storeCategory);
  console.log(id);
  const [categories, setCategories] = useState(categoriesMock);
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
          {storeCategory.shopCategories.map((category) => (
            <Grid item xs={12} md={4} key={category.categoryId}>
              <Category category={category} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}
