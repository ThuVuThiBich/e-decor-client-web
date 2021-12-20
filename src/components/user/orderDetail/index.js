import { Box } from "@material-ui/core";
import React from "react";
import Invoice from "./invoice";
import Status from "./status";
import { useStyles } from "./styles";

export default function Detail() {
  const classes = useStyles();

  return (
    <Box>
      <Status />
      <Invoice />
    </Box>
  );
}
