import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Typography,
  withStyles,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import PlaceIcon from "@material-ui/icons/Place";
import ShopContent from "components/shop/shopContent";
import ShopInfo from "components/shop/shopInfo";
import Rating from "material-ui-rating/lib/components/Rating/Rating";
import React from "react";
import { useStyles } from "./styles";

export default function ShopDetail() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <ShopInfo />
      <ShopContent/>
    </Container>
  );
}
