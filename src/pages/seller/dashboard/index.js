import { Box, Button, Typography } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import OrdersTable from "components/orders/table";
import React from "react";
import { useStyles } from "./styles";
export default function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Box display="flex" alignItems="center">
          <DashboardIcon className={classes.icon} />
          <Typography className={classes.title}>Dashboard</Typography>
        </Box>
        <Button color="primary" variant="outlined">
          Get more
        </Button>
      </Box>
      <Box>Dashboard</Box>
    </div>
  );
}
