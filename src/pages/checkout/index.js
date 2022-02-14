import { Container } from "@material-ui/core";
import DeliveryAddress from "components/checkout/deliveryAddress";
import PaymentMethod from "components/checkout/paymentMethod";
import ProductsOrdered from "components/checkout/productsOrdered";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAddresses } from "redux/addressRedux";
import { getPromotions } from "redux/promotionRedux";
import { addressSelector } from "redux/selectors";
import { useStyles } from "./styles";

export default function Checkout() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    dispatch(getAddresses());
    dispatch(getPromotions());
  }, [dispatch]);
  const shopId = history.location.state.shopId;
  console.log(shopId);
  const {addresses} = useSelector(addressSelector)
  console.log(addresses);
  return (
    <Container className={classes.container}>
      <DeliveryAddress />
      <ProductsOrdered shopId={shopId} />
      <PaymentMethod />
    </Container>
  );
}
