import { Box, Button, Typography } from "@material-ui/core";
import ProductsTable from "components/seller/products/table";
import Icons from "constants/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";

export default function CategoryProducts() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Box display="flex" alignItems="center">
          <Box className={classes.icon}>
            <img src={Icons.PACKAGE_ICON} alt="" />
          </Box>
          <Typography className={classes.title}>Products</Typography>
        </Box>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => history.push("/shop/products")}
        >
          View all categories
        </Button>
      </Box>
      <Box>
        <ProductsTable />
      </Box>
    </Box>
  );
}
