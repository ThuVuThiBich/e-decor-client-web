import { Box, Button, Typography } from "@material-ui/core";
import ViewProductForm from "components/seller/products/viewProduct";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "redux/productRedux";
import { productSelector } from "redux/selectors";
import { useStyles } from "./styles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRouteMatch } from "react-router-dom";
import Icons from "constants/icons";

export default function ViewProduct() {
  const classes = useStyles();
  const history = useHistory();
  let match = useRouteMatch();
  const dispatch = useDispatch();
  const { product } = useSelector(productSelector);
  const { productId } = useParams();
  const { isLoading } = useSelector(productSelector);
  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);
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
          onClick={() => {
            history.push({
              pathname: `/shop/products/${match.params.categoryName}`,
              state: { categoryId: product?.category?.id },
            });
          }}
        >
          Back To Product List
        </Button>
      </Box>
      <Box>{+productId === +product?.id && <ViewProductForm />}</Box>
    </Box>
  );
}
