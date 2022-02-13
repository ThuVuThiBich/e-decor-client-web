import {
  AppBar,
  Box,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import { feedbackSelector, productSelector } from "redux/selectors";
import { PayPalButton } from "react-paypal-button-v2";
import Description from "./description";
import Review from "./review";
import { getFeedbacks } from "redux/feedbackRedux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UserReview from "./review/userReview";
import { Pagination } from "@material-ui/lab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Mid() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);

  const { product } = useSelector(productSelector);
  const { feedbacks, totalFeedbacks } = useSelector(feedbackSelector);
  console.log(product);
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  useEffect(() => {
    dispatch(getFeedbacks({ id, params: { limit: 5 } }));
  }, [dispatch, id]);
  return (
    <Paper>
      <Box className={classes.root} my={2}>
        <AppBar elevation={1} position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="full width tabs example"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Review" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <TabPanel value={value} index={0}>
            {/* {product.description ? product.description : null} */}
            {/* <Description description={product.description} /> */}

            <div
              dangerouslySetInnerHTML={{ __html: product?.description }}
            ></div>
            {/* <PayPalButton
              amount="0.01"
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
            /> */}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {feedbacks?.length > 0 ? (
              <>
                {feedbacks?.map((item, index) => (
                  <UserReview feedback={item} />
                ))}
                <Box mt={2} display="flex" justifyContent="center">
                  <Pagination
                    count={Math.ceil(totalFeedbacks / 5)}
                    page={page}
                    onChange={handleChangePage}
                    variant="outlined"
                    color="primary"
                  />
                </Box>
              </>
            ) : (
              <Box>No Reviews</Box>
            )}
          </TabPanel>
        </SwipeableViews>{" "}
      </Box>
    </Paper>
  );
}
