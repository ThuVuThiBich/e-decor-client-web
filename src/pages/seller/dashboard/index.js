import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { shopSelector, statisticSelector } from "redux/selectors";
import { getMyShop } from "redux/shopRedux";
import noShop from "../../../assets/images/no-shop.svg";
import { useStyles } from "./styles";
import pendingImg from "assets/images/pending.png";
import earningsImg from "assets/images/earnings.png";
import soldImg from "assets/images/sold.png";
import Chart from "react-apexcharts";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoShop from "components/common/NoShop";
import { getStatistics } from "redux/statisticRedux";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  formatISO,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from "date-fns";

export const VIEWS = [
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
  { label: "Year", value: "year" },
];
export default function Dashboard() {
  const statisticStore = useSelector(statisticSelector);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [view, setView] = useState("week");
  const [startDate, setStartDate] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [endDate, setEndDate] = useState(
    endOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const storeShop = useSelector(shopSelector);
  useEffect(() => {
    if (view === "week") {
      setStartDate(startOfWeek(new Date(), { weekStartsOn: 1 }));
      setEndDate(endOfWeek(new Date(), { weekStartsOn: 1 }));
    }
    if (view === "month") {
      setStartDate(startOfMonth(new Date()));
      setEndDate(endOfMonth(new Date()));
    }
    if (view === "year") {
      setStartDate(startOfYear(new Date()));
      setEndDate(endOfYear(new Date()));
    }
  }, [view]);

  useEffect(() => {
    dispatch(getMyShop()).then((data) => {
      dispatch(
        getStatistics({
          startDate: new Date(startDate).toISOString(),
          endDate: new Date(endDate).toISOString(),
        })
      );
    });
  }, [dispatch, endDate, startDate]);

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

  function prev() {
    // return new Date().clone().subtract(1, view);
  }
  function next() {
    // return new Date().clone().add(1, view);
  }
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
        <Box className={`${classes.flexBasic} ${classes.header}`}>
          <Box className={classes.actionBox}>
            <IconButton
              className={`fas fa-angle-left ${classes.moveIcon}`}
              onClick={() => {}}
            >
              <ChevronLeftIcon />
            </IconButton>
            <Box mx={1}>
              <Typography>
                {format(startDate, "MMM dd, yyyy")} <span> - </span>
                {format(endDate, "MMM dd, yyyy")}
              </Typography>
            </Box>

            <IconButton
              className={`fas fa-angle-right ${classes.moveIcon}`}
              onClick={() => {}}
            >
              <ChevronRightIcon />
            </IconButton>
            <FormControl
              margin="dense"
              variant="outlined"
              className={classes.formControl}
              size="small"
            >
              <InputLabel id="demo-simple-select-outlined-label">
                View
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={view}
                onChange={(e) => {
                  setView(e.target.value);
                }}
                label="View"
                inputProps={{ MenuProps: { disableScrollLock: true } }}
                // SelectDisplayProps={{
                //   style: { paddingTop: 4, paddingBottom: 10 },
                // }}
              >
                {VIEWS?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Button color="primary" variant="outlined">
          Get more
        </Button>
      </Box>
      {storeShop?.currentShop ? (
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
                      ${statisticStore?.earning || 0}
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
                      {statisticStore?.productSold}
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
                      {statisticStore?.pendingOrders}
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
        <NoShop />
      )}
      <ToastContainer autoClose={2000} style={{ marginTop: "100px" }} />
    </Box>
  );
}
