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
import React, { useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { getImagesFromProductVersion, getPriceText } from "utils/helpers";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
// import { addProduct } from "redux/cartRedux";
import { productSelector } from "redux/selectors";
import { addCartItem } from "redux/cartRedux";
export default function Top(props) {
  const dispatch = useDispatch();
  const { product } = useSelector(productSelector);
  const [showedImage, setShowedImage] = useState("");
  useEffect(() => {
    setShowedImage(
      product?.images?.concat(
        getImagesFromProductVersion(product?.productVersions)
      )[0]?.image
    );
  }, [product]);

  const [active, setActive] = useState(0);
  const classes = useStyles();

  const [showedPrice, setShowedPrice] = useState(
    getPriceText(product?.productVersions)
  );

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);

    const item = product?.productVersions.find(
      (item) => +item.id === +event.target.value
    );
    setShowedImage(item.image);
    setShowedPrice(item.price);
  };

  const addToCart = (e) => {
    if (value) dispatch(addCartItem({ quantity, productVersionId: value }));
    else {
      console.error("Please select product variation first");
    }
  };

  const [quantity, setQuantity] = useState(1);

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

              {product?.images?.concat(
                getImagesFromProductVersion(product?.productVersions)
              ).length > 5 ? (
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
                    {product?.images
                      ?.concat(
                        getImagesFromProductVersion(product?.productVersions)
                      )
                      ?.map((item, index) => (
                        <Box
                          mx={1}
                          className={classes.img}
                          key={index}
                          style={{ border: "1px solid #ddd" }}
                          onClick={() => setShowedImage(item.image)}
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
              ) : (
                <>
                  <Box
                    display="flex"
                    alignItems="centers"
                    justifyContent="center"
                  >
                    {product?.images
                      ?.concat(
                        getImagesFromProductVersion(product?.productVersions)
                      )
                      ?.map((item, index) => (
                        <Box
                          mx={1}
                          className={classes.img}
                          key={index}
                          style={{ border: "1px solid #ddd" }}
                          onClick={() => setShowedImage(item.image)}
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
                  </Box>
                </>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box py={4}>
              <Box py={2}>
                <Typography className={classes.headText}>
                  {product?.name}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Rating
                  value={
                    Number(product?.avgRatings) === 0
                      ? 5
                      : Number(product?.avgRatings)
                  }
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  readOnly
                />
                <Divider
                  orientation="vertical"
                  flexItem
                  className={classes.divider}
                />
                <Box>{product?.totalRatings} Ratings</Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  className={classes.divider}
                />
                <Box>
                  {product?.soldQuantity ? product?.soldQuantity : 0} Sold
                </Box>
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
                  {product?.productVersions?.map((product) => (
                    <FormControlLabel
                      key={product?.id}
                      value={product?.id.toString()}
                      control={<Radio />}
                      label={product?.name}
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
                    onClick={() => {
                      if (quantity > 1) setQuantity(quantity - 1);
                    }}
                  >
                    <RemoveIcon />
                  </Button>
                  <Box component={"span"} px={2}>
                    {quantity}
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.qtyBtn}
                    onClick={() => setQuantity(quantity + 1)}
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
                  onClick={addToCart}
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
