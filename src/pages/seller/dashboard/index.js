import { Box, Button, Paper, Typography } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { shopSelector } from "redux/selectors";
import { getMyShop } from "redux/shopRedux";
import noShop from "../../../assets/images/no-shop.svg";
import { useStyles } from "./styles";

export default function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const storeShop = useSelector(shopSelector);
  useEffect(() => {
    dispatch(getMyShop());
  }, [dispatch]);
  return (
    <Box>
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
      {storeShop.currentShop ? (
        <></>
      ) : (
        <Box mb={4}>
          <Paper>
            <Box pt={10} display="flex" justifyContent="center">
              <img src={noShop} alt="" width={"35%"} />
            </Box>
            <Box
              pt={3}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontSize: 25, fontWeight: 600 }}>
                Be a Power Seller
              </Typography>
              <Typography style={{ fontSize: 16 }}>
                Manage your shop efficiently on E-Decor Website
              </Typography>
            </Box>
            <Box
              pt={2}
              pb={8}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                color="primary"
                variant="contained"
                onClick={() => history.push("/shop/settings")}
              >
                Create your own shop
              </Button>
            </Box>
          </Paper>
        </Box>
      )}
    </Box>
  );
}
