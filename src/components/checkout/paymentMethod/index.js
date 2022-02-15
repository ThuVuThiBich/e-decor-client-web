import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import React from "react";
import { useStyles } from "./styles";
import CheckIcon from "@material-ui/icons/Check";
import { PayPalButton } from "react-paypal-button-v2";
import { orderSelector } from "redux/selectors";
import { useSelector } from "react-redux";

export default function PaymentMethod() {
  const { shopName, orderItems, amount, voucherPrice } =
    useSelector(orderSelector);

  const orderStore = useSelector(orderSelector);
  const classes = useStyles();
  const [isPurchased, setIsPurchased] = React.useState(false);
  //
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setIsPurchased(!isPurchased);
    setAnchorEl(null);
  };
  return (
    <Paper className={classes.root}>
      <Box p={2} mb={4}>
        <Box
          display="flex"
          alignItems="center"
          my={1}
          justifyContent={"space-between"}
        >
          <Box
            display="flex"
            alignItems="center"
            style={{ color: "rgb(210, 63, 87)" }}
          >
            <PaymentOutlinedIcon className={classes.icon} />
            <Typography className={classes.text} style={{ fontSize: 20 }}>
              Payment Method
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mr={10}>
            <Typography className={classes.text}>
              {isPurchased ? "Pay with Paypal" : "Cash on Delivery"}
            </Typography>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              color="primary"
              style={{ marginLeft: 16 }}
              onClick={handleClick}
            >
              Change
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                {!isPurchased && (
                  <CheckIcon style={{ marginRight: 4, color: "blue" }} />
                )}
                <Box pl={isPurchased ? 3 : 0}>Cash on Delivery</Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {isPurchased && (
                  <CheckIcon style={{ marginRight: 4, color: "blue" }} />
                )}
                <Box pl={!isPurchased ? 3 : 0}>Pay with Paypal</Box>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          my={2}
          style={{ borderTop: "1px solid #ccc", borderTopStyle: "dashed" }}
          pt={2}
        >
          <Box width="25%" mr={10}>
            <Box
              py={0.5}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.subText}>
                Merchandise Subtotal:
              </Typography>
              <Typography className={classes.text}>{amount} VND</Typography>
            </Box>
            <Box
              py={0.5}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.subText}>
                Shipping Total:{" "}
              </Typography>
              <Typography className={classes.text}>$10</Typography>
            </Box>
            <Box
              py={0.5}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.subText}>
                Voucher Discount:
              </Typography>
              <Typography className={classes.text}>
                - {voucherPrice} VND
              </Typography>
            </Box>
            <Divider
              style={{ borderColor: "#ccc", marginBottom: 8, marginTop: 4 }}
            />

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.totalText}>
                Total Payment:{" "}
              </Typography>
              <Typography
                className={classes.text}
                style={{
                  color: "rgb(210, 63, 87)",
                  fontSize: 18,
                }}
              >
                $40
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          pt={2}
          display="flex"
          alignItems={isPurchased ? "flex-start" : "center"}
          justifyContent="space-between"
          my={2}
          style={{ borderTop: "1px solid #ccc", borderTopStyle: "dashed" }}
        >
          <Typography className={classes.text}>
            By clicking {isPurchased ? "for payment" : `"Place Order"`}, you are
            agreeing to Our General Transaction Terms
          </Typography>

          {isPurchased ? (
            <Box mr={10}>
              <PayPalButton
                amount="50.0"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                  alert(
                    "Transaction completed by " + details.payer.name.given_name
                  );

                  // OPTIONAL: Call your server to save the transaction
                  return fetch("/paypal-transaction-complete", {
                    method: "post",
                    body: JSON.stringify({
                      orderID: data.orderID,
                    }),
                  });
                }}
                options={{
                  clientId:
                    "AYxz4r4mvWKV_FTZTHN7iNTGubX2sTEcklqiMZ8of72uyCi6GfnGO7mnRQ9KexF8OgB5IIgR_04gV6hn",
                }}
              />
            </Box>
          ) : (
            <Button
              color="primary"
              variant="contained"
              style={{ marginRight: 80, marginLeft: 16 }}
              onClick={() => {
                console.log(orderStore);
              }}
            >
              Place Order
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
}
