import { Container } from "@material-ui/core";
import DeliveryAddress from "components/checkout/deliveryAddress";
import PaymentMethod from "components/checkout/paymentMethod";
import ProductsOrdered from "components/checkout/productsOrdered";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAddresses } from "redux/addressRedux";
import { setOrderShipping } from "redux/orderRedux";
import { getPromotions } from "redux/promotionRedux";
import { addressSelector, shipmentSelector } from "redux/selectors";
import { getShipments } from "redux/shipmentRedux";
import { getMinFeeShipping } from "utils/helpers";
import { useStyles } from "./styles";

export default function OrderSuccess() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {}, []);

  return <Container className={classes.container}></Container>;
}
