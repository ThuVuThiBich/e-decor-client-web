import { Box, Button, Typography } from "@material-ui/core";
import ProductsTable from "components/seller/products/table";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";

export default function CategoryProducts() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
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
            <svg
              width={24}
              height={24}
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8cqusc"
              focusable="false"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M7.40692 11.3465L20.5779 4.304L16.0004 2L2.41992 8.836L7.40692 11.3465Z"></path>
              <path d="M24.5773 6.3175L11.4062 13.36L15.9998 15.6725L29.5803 8.83601L24.5773 6.3175Z"></path>
              <path d="M15.625 16.3275L11 13.9995V19.1145L9 17.101H7V11.986L2 9.46948V23.1415L15.625 30V16.3275Z"></path>
              <path d="M16.375 16.3275V30L30 23.1415V9.46948L16.375 16.3275Z"></path>
            </svg>
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