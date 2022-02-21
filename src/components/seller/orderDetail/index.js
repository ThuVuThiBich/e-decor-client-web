import { Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { orderSelector } from "redux/selectors";
import Invoice from "./invoice";
import Status from "./status";
import { useStyles } from "./styles";

export default function Detail() {
  const classes = useStyles();
  const { order, isLoading } = useSelector(orderSelector);

  return (
    <Box>
      {/* <Status /> */}
      {!isLoading && <Invoice />}
    </Box>
  );
}
