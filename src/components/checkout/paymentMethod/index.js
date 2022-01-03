import { Box, Paper, Typography } from "@material-ui/core";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import React from "react";
import { useStyles } from "./styles";

export default function PaymentMethod() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box p={2} mb={4}>
        <Box
          display="flex"
          alignItems="center"
          style={{ color: "rgb(210, 63, 87)" }}
          my={1}
        >
          <PaymentOutlinedIcon className={classes.icon} />
          <Typography className={classes.text} style={{ fontSize: 20 }}>
            Payment Method
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          Payment Method Option
        </Box>
      </Box>
    </Paper>
  );
}
