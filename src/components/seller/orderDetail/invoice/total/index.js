import { Box, Divider, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export default function Total() {
  const classes = useStyles();

  return (
    <Paper>
      <Box p={3}>
        <Box>
          <Typography className={classes.head}>Total Summary</Typography>
        </Box>
        <Box my={2}>
          <Box display="flex" justifyContent="space-between">
            <Typography className={classes.subText}>Subtotal:</Typography>
            <Typography className={classes.boldText}>$335</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography className={classes.subText}>Shipping fee:</Typography>
            <Typography className={classes.boldText}>$10</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography className={classes.subText}>Discount:</Typography>
            <Typography className={classes.boldText}>-$30</Typography>
          </Box>
        </Box>
        <Divider />
        <Box my={1} display="flex" justifyContent="space-between">
          <Typography className={classes.boldText}>Total </Typography>
          <Typography className={classes.boldText}>$315</Typography>
        </Box>
        <Divider />

        <Box my={1} display="flex" justifyContent="space-between">
          <Typography className={classes.boldText}>Payment Method </Typography>
          <Typography>Payment on delivery</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
