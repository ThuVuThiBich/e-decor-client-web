import { Box, Button, Typography } from "@material-ui/core";
import NoShop from "components/common/NoShop";
import Categories from "components/seller/products/categories";
import Icons from "constants/icons";
import React from "react";
import { useSelector } from "react-redux";
import { shopSelector } from "redux/selectors";
import { useStyles } from "./styles";

export default function Products() {
  const classes = useStyles();
  const storeShop = useSelector(shopSelector);

  return (
    <Box>
      <Box
        mb={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Box className={classes.icon}>
            <img src={Icons.PACKAGE_ICON} alt="" />
          </Box>
          <Typography className={classes.title}>Products</Typography>
        </Box>
        <Button color="primary" variant="outlined">
          View
        </Button>
      </Box>
      {storeShop?.currentShop ? (
        <Box>
          <Categories />
        </Box>
      ) : (
        <NoShop />
      )}
    </Box>
  );
}
