import { Box, Button, Typography } from "@material-ui/core";
import Categories from "components/seller/products/categories";
import Icons from "constants/icons";
import React from "react";
import { useStyles } from "./styles";

export default function Products() {
  const classes = useStyles();

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
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
      <Box>
        <Categories />
      </Box>
    </Box>
  );
}
