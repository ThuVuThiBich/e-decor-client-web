import { Box } from "@material-ui/core";
import { LoadingInvoice } from "components/common/LoadingInvoice";
import { LoadingStatus } from "components/common/LoadingStatus";
import React from "react";
import { useSelector } from "react-redux";
import { orderSelector } from "redux/selectors";
import Invoice from "./invoice";
import Status from "./status";

export default function Detail() {
  const { isLoading, isUpdating } = useSelector(orderSelector);

  return (
    <Box>
      {isLoading && isUpdating ? <LoadingStatus /> : <Status />}
      {isLoading && isUpdating ? <LoadingInvoice /> : <Invoice />}
    </Box>
  );
}
