import { Container } from "@material-ui/core";
import ShopContent from "components/shop/shopContent";
import ShopInfo from "components/shop/shopInfo";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStyles } from "./styles";
export default function ShopDetail() {
  const classes = useStyles();
  // const { isLoading } = useSelector(shopSelector);
  return (
    <Container className={classes.container}>
      {/* {isLoading ? <LoadingShopInfo /> : <ShopInfo />} */}
      <ShopInfo />
      <ShopContent />
      <ToastContainer autoClose={2000} style={{ marginTop: "100px" }} />
    </Container>
  );
}
