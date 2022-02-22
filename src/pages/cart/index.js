import { Box, Button, Container } from "@material-ui/core";
import CartItems from "components/cart";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "redux/cartRedux";
import { cartSelector, userSelector } from "redux/selectors";
import { useStyles } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { size } from "underscore";
import Images from "constants/image";
import { useHistory } from "react-router-dom";

export default function Cart() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(userSelector);
  const { products, isUpdated } = useSelector(cartSelector);

  useEffect(() => {
    currentUser && dispatch(getCartItems());
  }, [currentUser, dispatch, isUpdated]);
  return (
    <Container className={classes.container}>
      {size(products) ? (
        products?.map((item, index) => <CartItems item={item} key={index} />)
      ) : (
        <Box
          mt={8}
          p={2}
          px={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <img src={Images.EMPTY_CART} alt="" width={200} />
          <Box m={2} style={{ color: "#bdbdbd" }}>
            Your shopping cart is empty
          </Box>
          <Box mb={16}>
            <Button variant="contained" color="primary" onClick={()=>history.push("/")} >
              Go Shopping Now
            </Button>
          </Box>
        </Box>
      )}
      <ToastContainer
        hideProgressBar
        autoClose={1000}
        style={{ marginTop: "100px" }}
      />
    </Container>
  );
}
