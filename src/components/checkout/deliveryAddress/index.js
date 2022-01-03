import { Box, Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import PlaceIcon from "@material-ui/icons/Place";

export default function DeliveryAddress() {
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
          <PlaceIcon style={{ marginRight: 4 }} />
          <Typography className={classes.text} style={{ fontSize: 20 }}>
            Delivery Address
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Box
            display="flex"
            alignItems="center"
            mx={1}
            style={{ fontSize: 18 }}
          >
            <Typography
              className={classes.name}
              style={{ marginRight: 8, fontWeight: 600, fontSize: 18 }}
            >
              Thu Vu
            </Typography>
            <Typography
              className={classes.phone}
              style={{ marginRight: 16, fontWeight: 600, fontSize: 18 }}
            >
              (+84) 832890865
            </Typography>
            <Typography
              className={classes.address}
              style={{ marginRight: 8, fontSize: 18 }}
            >
              27 Nguyễn Bảo, Xã Hòa Châu, Huyện Hòa Vang, Đà Nẵng
            </Typography>
          </Box>
          <Box>
            <Button color="primary" variant="outlined">
              CHANGE
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
