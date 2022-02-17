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

export default function ViewProduct() {
  const classes = useStyles();
  const history = useHistory();
  let match = useRouteMatch();
  console.log(match);
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
            <svg
              width="24px"
              height="24px"
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
          onClick={() => {
            history.push({
              pathname: `/shop/products/${match.params.categoryName}`,
              state: { categoryId: product?.category?.id },
            });
            console.log(history);
          }}
        >
          Back To Product List
        </Button>
      </Box>
      <Box>{+productId === +product?.id && <ViewProductForm />}</Box>
    </Box>
  );
}
