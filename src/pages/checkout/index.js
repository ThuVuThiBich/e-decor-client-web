import { Container } from "@material-ui/core";
import DeliveryAddress from "components/checkout/deliveryAddress";
import PaymentMethod from "components/checkout/paymentMethod";
import ProductsOrdered from "components/checkout/productsOrdered";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAddresses } from "redux/addressRedux";
import { setOrder } from "redux/orderRedux";
import { getPromotions } from "redux/promotionRedux";
import { addressSelector } from "redux/selectors";
import { useStyles } from "./styles";

export default function Checkout() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { addresses } = useSelector(addressSelector);
  useEffect(() => {
    dispatch(getAddresses());
    dispatch(getPromotions());
    dispatch(setOrder());
  }, [dispatch]);
  useEffect(() => {
    if (addresses.length > 0) dispatch(setOrder(addresses[0]));
  }, [addresses, dispatch]);
  const shopId = history.location.state.shopId;
  console.log(shopId);
  console.log(addresses);
  return (
    <Container className={classes.container}>
      <DeliveryAddress />
      <ProductsOrdered shopId={shopId} />
      <PaymentMethod />
    </Container>
  );
}
