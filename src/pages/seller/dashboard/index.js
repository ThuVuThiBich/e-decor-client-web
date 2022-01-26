import { Box, Button, Card, Grid, Paper, Typography } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { shopSelector } from "redux/selectors";
import { getMyShop } from "redux/shopRedux";
import noShop from "../../../assets/images/no-shop.svg";
import { useStyles } from "./styles";
import pendingImg from "assets/images/pending.png";
import earningsImg from "assets/images/earnings.png";
import soldImg from "assets/images/sold.png";
import Chart from "react-apexcharts";

export default function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const storeShop = useSelector(shopSelector);
  useEffect(() => {
    dispatch(getMyShop());
  }, [dispatch]);
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
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
        <Box>
          <Grid container spacing={2}>
            <Grid item sm={6} md={4} lg={4}>
              <Card style={{ minHeight: 150 }}>
                <Box p={2} display="flex" alignItems="center">
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Box
                      style={{
                        fontWeight: 600,
                        lineHeight: 1.57143,
                        fontSize: 16,
                        color: "#7D879C",
                      }}
                    >
                      Earnings
                    </Box>
                    <Box
                      style={{
                        fontWeight: 700,
                        lineHeight: 1.57143,
                        fontSize: 24,
                      }}
                    >
                      25.000.000
                    </Box>
                  </Box>
                  <Box>
                    <img src={earningsImg} alt="" width="120px" />
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item sm={6} md={4} lg={4}>
              <Card style={{ minHeight: 150 }}>
                <Box p={2} display="flex" alignItems="center">
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Box
                      style={{
                        fontWeight: 600,
                        lineHeight: 1.57143,
                        fontSize: 16,
                        color: "#7D879C",
                      }}
                    >
                      Product Sold
                    </Box>
                    <Box
                      style={{
                        fontWeight: 700,
                        lineHeight: 1.57143,
                        fontSize: 24,
                      }}
                    >
                      382
                    </Box>
                  </Box>
                  <Box>
                    <img src={soldImg} alt="" width="150px" />
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item sm={6} md={4} lg={4}>
              <Card style={{ minHeight: 150 }}>
                <Box p={2} display="flex" alignItems="center">
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Box
                      style={{
                        fontWeight: 600,
                        lineHeight: 1.57143,
                        fontSize: 16,
                        color: "#7D879C",
                      }}
                    >
                      Pending Orders
                    </Box>
                    <Box
                      style={{
                        fontWeight: 700,
                        lineHeight: 1.57143,
                        fontSize: 24,
                      }}
                    >
                      08
                    </Box>
                  </Box>
                  <Box>
                    <img src={pendingImg} alt="" width="120px" />
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Box my={4}>
            <Paper>
              <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="100%"
              />
            </Paper>
          </Box>
        </Box>
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
