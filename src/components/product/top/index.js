import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
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
import { getImagesFromProductVersion, getPriceText } from "utils/helpers";
import { useStyles } from "./styles";

export default function Top(props) {
  const { product } = props;

  const [active, setActive] = useState(0);
  const classes = useStyles();
  const [showedImage, setShowedImage] = useState(product?.image[0]?.image);
  const [showedPrice, setShowedPrice] = useState(
    getPriceText(product.productVersion)
  );

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);

    const item = product.productVersion.find(
      (item) => +item.id === +event.target.value
    );
    setShowedImage(item.image);
    setShowedPrice(item.price);
  };

  return (
    <Paper>
      <Box my={4} pb={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box px={2}>
              <Box
                display="flex"
                justifyContent="center"
                mb={2}
                style={{ border: "1px solid #ddd" }}
              >
                <img
                  width={400}
                  height={400}
                  src={showedImage}
                  alt=""
                  style={{ padding: 4 }}
                />
              </Box>

              <Box mx={-1}>
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
                    <IconButton
                    // style={{ color: "white" }}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  }
                  leftChevron={
                    <IconButton
                    // style={{ color: "white" }}
                    >
                      <ArrowBackIosIcon />
                    </IconButton>
                  }
                >
                  {product.image
                    .concat(getImagesFromProductVersion(product.productVersion))
                    .map((item, index) => (
                      <Box
                        mx={1}
                        className={classes.img}
                        key={index}
                        style={{ border: "1px solid #ddd" }}
                      >
                        <img
                          width={100}
                          height={100}
                          src={item.image}
                          alt=""
                          style={{ padding: 4 }}
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
                  {product.name}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Rating
                  value={Number(product.avgRating)}
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  readOnly
                />
                <Divider
                  orientation="vertical"
                  flexItem
                  className={classes.divider}
                />
                <Box>{product.totalRating} Ratings</Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  className={classes.divider}
                />
                <Box>{product.soldQuantity} Sold</Box>
              </Box>
              <Box py={1}>
                <Typography className={classes.price}>
                  {showedPrice} VND
                </Typography>
              </Box>
              <Box display="flex" pb={1}>
                <Box mr={5} mt={1}>
                  Type
                </Box>
                <RadioGroup
                  aria-label="gender"
                  name="type"
                  // defaultValue={""}
                  value={value}
                  onChange={handleChange}
                >
                  {product.productVersion.map((product) => (
                    <FormControlLabel
                      key={product.id}
                      value={product.id.toString()}
                      control={<Radio />}
                      label={product.name}
                    />
                  ))}
                </RadioGroup>
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
