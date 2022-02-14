import {
  Box,
  Button,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Radio,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./styles";
import PlaceIcon from "@material-ui/icons/Place";
import { useSelector } from "react-redux";
import { addressSelector } from "redux/selectors";
import { getAddressText } from "utils/helpers";

export default function DeliveryAddress() {
  const classes = useStyles();
  const { addresses } = useSelector(addressSelector);
  const [addressId, setAddressId] = useState(addresses?.[0].id);
  console.log(addressId);

  //
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const handleCloseMenuItem = (e) => {
    console.log(addresses);
    console.log(e);
    setAnchorEl(null);
    setAddressId(e);
  };
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
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
              {getAddressText(addresses.find((e) => e.id === addressId))}
            </Typography>
          </Box>
          <Box>
            <Button
              color="primary"
              variant="outlined"
              onClick={
                // () => setHasVoucher(true)
                handleClick
              }
            >
              CHANGE
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              onChange={(event) => console.log(event.target.value)}
            >
              {addresses?.map((item, index) => (
                <MenuItem
                  key={index}
                  value={item.id}
                  onClick={() => handleCloseMenuItem(item.id)}
                >
                  <Radio checked={+addressId === +item.id} />
                  <ListItemText primary={getAddressText(item)} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
