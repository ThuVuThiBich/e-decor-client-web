import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export default function Infor() {
  const classes = useStyles();

  return (
    <Paper>
      <Box p={2}>
        <Box pl={1} py={1}>
          <Typography gutterBottom className={classes.headText}>
            Shipping Address
          </Typography>
          <Typography>
            Kelly Williams 777 Brockton Avenue, Abington MA 2351
          </Typography>
        </Box>
        <Box pl={1} py={1}>
          <Typography gutterBottom className={classes.headText}>
            Shipping Unit
          </Typography>
          <Typography>GrabExpress</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
