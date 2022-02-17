import { Box, Button, Typography } from "@material-ui/core";
import NewProductForm from "components/seller/products/newProduct";
import Icons from "constants/icons";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { resetProductVersion } from "redux/productRedux";
import { useStyles } from "./styles";

export default function NewProduct() {
  const classes = useStyles();
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetProductVersion());
  }, [dispatch]);
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Box className={classes.icon}>
            <img src={Icons.PACKAGE_ICON} alt="" />
          </Box>
          <Typography className={classes.title}>Products</Typography>
        </Box>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => history.push(`/shop/products`)}
        >
          Back To Product List
        </Button>
      </Box>
      <Box>
        <NewProductForm />
      </Box>
    </Box>
  );
}
