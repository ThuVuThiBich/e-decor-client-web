import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Input,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Radio,
  Select,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import MuiTableCell from "@material-ui/core/TableCell";
import ForumIcon from "@material-ui/icons/Forum";
import StorefrontIcon from "@material-ui/icons/Storefront";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getPromotions } from "redux/promotionRedux";
import { MenuProps } from "components/orders/table/toolbar/styles";
import { orderSelector, promotionSelector } from "redux/selectors";
import { getDiscount, getPriceTotal } from "utils/helpers";
import { storeVoucherPrice } from "redux/orderRedux";
const TableCell = withStyles({
  root: {
    borderBottom: "none",
  },
})(MuiTableCell);

export default function ShopOrdered(props) {
  const { shopName, orderItems, amount } = useSelector(orderSelector);

  //
  const { shopId } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [voucherValue, setVoucherValue] = useState(null);
  const { promotions } = useSelector(promotionSelector);
  //
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const handleCloseMenuItem = (e) => {
    setAnchorEl(null);
    setVoucherValue(e);
    dispatch(
      storeVoucherPrice((amount * getDiscount(promotions, e)?.discount) / 100)
    );
  };

  useEffect(() => {
    shopId && dispatch(getPromotions(shopId));
  }, [dispatch, shopId]);
  return (
    <Paper className={classes.root}>
      <Box p={2} mb={4}>
        <Box display="flex" alignItems="center" my={1}>
          <StorefrontIcon style={{ marginRight: 8 }} />
          <Typography className={classes.text} style={{ fontSize: 18 }}>
            {shopName}
          </Typography>
          <Divider
            orientation="vertical"
            style={{
              marginRight: 8,
              marginLeft: 8,
              // color: "black",
              // backgroundColor: "black",
              height: 20,
            }}
          />
          <ForumIcon style={{ marginRight: 8 }} />
          <Typography className={classes.text}>Chat Now</Typography>
        </Box>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {orderItems?.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    component="th"
                    scope="row"
                    width="30%"
                    size="small"
                  >
                    <Box ml={2} display="flex" alignItems="center">
                      <img
                        style={{ marginRight: 16 }}
                        width={50}
                        height={50}
                        src={row.image}
                        alt=""
                      />
                      {row.name}
                    </Box>
                  </TableCell>
                  <TableCell width="20%">{row.productVersionName}</TableCell>
                  <TableCell width="15%">{row.price} VND</TableCell>
                  <TableCell width="15%">{row.quantity}</TableCell>
                  <TableCell width="10%" className={classes.price}>
                    {row.quantity * row.price} VND
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          py={1}
          style={{ borderTop: "1px solid #ccc", borderTopStyle: "dashed" }}
        >
          <Box display="flex" alignItems="center">
            <LocalOfferOutlinedIcon style={{ marginRight: 8 }} />
            <Typography className={classes.text} style={{ fontSize: 18 }}>
              Shop Voucher
            </Typography>
          </Box>

          <Box mr={5} display="flex" alignItems="center">
            <Button color="primary" onClick={handleClick}>
              {voucherValue ? "Change Voucher" : "Select Voucher"}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {promotions?.map(
                (item, index) =>
                  amount >= item.standarFee && (
                    <MenuItem
                      key={index}
                      value={item?.id}
                      onClick={() => handleCloseMenuItem(item?.id)}
                    >
                      <Radio checked={+voucherValue === +item?.id} />
                      <ListItemText
                        primary={item.content}
                        secondary={`Giảm ${item.discount} % đơn hàng từ ${item.standarFee} VND`}
                      />
                    </MenuItem>
                  )
              )}
            </Menu>
            {voucherValue ? (
              <Typography
                className={classes.text}
                style={{
                  color: "rgb(210, 63, 87)",
                  marginLeft: 8,
                  marginRight: 8,
                }}
              >
                -
                {(amount * getDiscount(promotions, voucherValue)?.discount) /
                  100}
                VND
              </Typography>
            ) : (
              <></>
            )}
          </Box>
        </Box>
        <Box
          py={2}
          display="flex"
          justifyContent="space-between"
          style={{ borderTop: "1px solid #ccc", borderTopStyle: "dashed" }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Typography className={classes.text} style={{ marginRight: 8 }}>
                  {" "}
                  Message:
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="(Optional) Leave a message to seller"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                mr={11}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography className={classes.text}>
                  {" "}
                  Shipping Option:
                </Typography>

                <Typography className={classes.text}>Nhanh</Typography>
                <Button
                  color="primary"
                  style={{ marginRight: 16 }}
                  onClick={() => {}}
                >
                  Change
                </Button>

                <Typography className={classes.text}>$5</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          py={2}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          style={{ borderTop: "1px solid #ccc", borderTopStyle: "dashed" }}
        >
          <Box
            mr={6}
            width="28%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              className={classes.text}
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "rgba(0,0,0,.54)",
              }}
            >
              Order Total ( {orderItems.length} items):
            </Typography>
            <Typography
              style={{
                color: "rgb(210, 63, 87)",
                fontSize: 18,
              }}
            >
              {amount} VND
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
