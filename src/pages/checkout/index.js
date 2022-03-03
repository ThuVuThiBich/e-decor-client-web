import { Container } from "@material-ui/core";
import DeliveryAddress from "components/checkout/deliveryAddress";
import PaymentMethod from "components/checkout/paymentMethod";
import ProductsOrdered from "components/checkout/productsOrdered";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses } from "redux/addressRedux";
import { setOrderShipping } from "redux/orderRedux";
import { getPromotions } from "redux/promotionRedux";
import {
  addressSelector,
  orderSelector,
  shipmentSelector,
} from "redux/selectors";
import { getShipments } from "redux/shipmentRedux";
import { getMinFeeShipping } from "utils/helpers";
import { useStyles } from "./styles";

export default function Checkout() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { shopId } = useSelector(orderSelector);
  const { isUpdating } = useSelector(addressSelector);
  const { shipments } = useSelector(shipmentSelector);
  useEffect(() => {
    dispatch(getAddresses());
    shopId && dispatch(getPromotions(shopId));
    dispatch(getShipments());
  }, [dispatch, shopId, isUpdating]);

  useEffect(() => {
    shipments?.length > 0 &&
      dispatch(setOrderShipping(getMinFeeShipping(shipments)));
  }, [dispatch, shipments]);

  return (
    <Container className={classes.container}>
      <DeliveryAddress />
      <ProductsOrdered />
      <PaymentMethod />
    </Container>
  );
}
