import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
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
import React, { useState } from "react";
import { useStyles } from "./styles";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
const TableCell = withStyles({
  root: {
    borderBottom: "none",
  },
})(MuiTableCell);

function createData(name, version, price, quantity, total) {
  return { name, version, price, quantity, total };
}

const rows = [
  createData("Cupcake", "blue", 3.5, 1, 4.3),
  createData("Donut", "red", 25.0, 2, 4.9),
  createData("Eclair", "blue", 16.0, 4, 6.0),
  createData("Frozen yoghurt", "fruit", 6.0, 1, 4.0),
  createData("Gingerbread", "blue", 16.0, 1, 3.9),
];

export default function ShopOrdered() {
  const classes = useStyles();
  const [hasVoucher, setHasVoucher] = useState(false);
  return (
    <Paper className={classes.root}>
      <Box p={2} mb={4}>
        <Box
          display="flex"
          alignItems="center"
          // style={{ color: "rgb(210, 63, 87)" }}
          my={1}
        >
          <StorefrontIcon style={{ marginRight: 8 }} />
          <Typography className={classes.text} style={{ fontSize: 18 }}>
            Good Mood Decor
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
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" width="30%">
                    <Box display="flex" alignItems="center">
                      <img
                        style={{ marginRight: 16 }}
                        width={50}
                        height={50}
                        src={
                          "https://cf.shopee.vn/file/0fe6b6974d2a05c251336fd150944fea_tn"
                        }
                        alt=""
                      />
                      {row.name}
                    </Box>
                  </TableCell>
                  <TableCell width="20%">{row.version}</TableCell>
                  <TableCell width="15%">${row.price}</TableCell>
                  <TableCell width="15%">{row.quantity}</TableCell>
                  <TableCell width="10%" className={classes.price}>
                    ${row.total}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
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
          {hasVoucher ? (
            <Box display="flex" alignItems="center" mr={11}>
              <Button
                color="primary"
                style={{ marginRight: 16 }}
                onClick={() => setHasVoucher(false)}
              >
                Change Voucher
              </Button>
              <Typography
                className={classes.text}
                style={{ color: "rgb(210, 63, 87)" }}
              >
                - $5
              </Typography>
            </Box>
          ) : (
            <Box mr={5}>
              <Button color="primary" onClick={() => setHasVoucher(true)}>
                Select Voucher
              </Button>
            </Box>
          )}
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
                  onClick={() => setHasVoucher(false)}
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
          <Typography
            className={classes.text}
            style={{ fontSize: 20, fontWeight: "bold" }}
          >
            Order Total ( 5 items):
          </Typography>
          <Typography
            style={{
              marginLeft: 16,
              marginRight: 88,
              color: "rgb(210, 63, 87)",
              fontSize: 18,
            }}
          >
            $25
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
