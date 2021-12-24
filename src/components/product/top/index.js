import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import RemoveIcon from "@material-ui/icons/Remove";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { useStyles } from "./styles";

export default function Top() {
  const mockItems = [
    {
      name: "Event1",
      description: "description 1",
    },
    {
      name: "Event1",
      description: "description 1",
    },
    {
      name: "Event1",
      description: "description 1",
    },
    {
      name: "Event1",
      description: "description 1",
    },
    {
      name: "Event1",
      description: "description 1",
    },
    {
      name: "Event1",
      description: "description 1",
    },
    {
      name: "Event1",
      description: "description 1",
    },
    {
      name: "Event2",
      description: "description 1",
    },
    {
      name: "Event3",
      description: "description 1",
    },
    {
      name: "Event1",
      description: "description 1",
    },
  ];

  const [active, setActive] = useState(0);
  const classes = useStyles();
  return (
    <Paper>
      <Box my={4} pb={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box px={2}>
              <Box display="flex" justifyContent="center">
                <img
                  width={400}
                  height={400}
                  src="https://cf.shopee.vn/file/235f683b7101d774ae570cd8289fa2a1"
                  alt=""
                />
              </Box>
              <Box>
                <ItemsCarousel
                  infiniteLoop={true}
                  alwaysShowChevrons={true}
                  chevronWidth={50}
                  numberOfCards={5}
                  slidesToScroll={1}
                  outsideChevron={false}
                  activeItemIndex={active}
                  requestToChangeActive={(value) => setActive(value)}
                  rightChevron={
                    <IconButton style={{ color: "white" }}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  }
                  leftChevron={
                    <IconButton style={{ color: "white" }}>
                      <ArrowBackIosIcon />
                    </IconButton>
                  }
                >
                  {mockItems.map((item, index) => (
                    <Box px={1} className={classes.img}>
                      <img
                        width={100}
                        height={100}
                        src="https://cf.shopee.vn/file/50a6f0f021bf5172d4a33748d7e33f57_tn"
                        alt=""
                      />
                    </Box>
                  ))}
                </ItemsCarousel>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box py={4}>
              <Box py={2}>
                <Typography className={classes.headText}>
                  Đồng hồ để bàn led Hình chữ nhật mini
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Rating
                  value={4.5}
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  readOnly
                />
                <Divider
                  orientation="vertical"
                  flexItem
                  className={classes.divider}
                />
                <Box>217 Ratings</Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  className={classes.divider}
                />
                <Box>566 Sold</Box>
              </Box>
              <Box py={1}>
                <Typography className={classes.price}>$ 10 </Typography>
              </Box>
              <Box display="flex" alignItems="center" pb={1}>
                <Box>Quantity</Box>
                <Box className={classes.test} mx={2}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.qtyBtn}
                  >
                    <RemoveIcon />
                  </Button>
                  <Box component={"span"} px={2}>
                    1
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.qtyBtn}
                  >
                    <AddIcon />
                  </Button>
                </Box>
              </Box>
              <Box display="flex" my={1}>
                <Button
                  color="primary"
                  variant="outlined"
                  className={classes.actionBtn}
                >
                  <AddShoppingCartIcon />
                  Add To Cart
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.buyBtn}
                >
                  Buy Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
