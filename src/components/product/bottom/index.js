import { Box, IconButton, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Product from "components/shop/shopContent/products/product";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { productSelector } from "redux/selectors";
import { useEffect } from "react";
const noOfItems = 12;
const noOfCards = 3;
const autoPlayDelay = 5000;
export default function Bottom() {
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const storeProduct = useSelector(productSelector);

  const onChange = (value) => setActive(value);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setActive((prevState) => (prevState + 1) % (noOfItems - noOfCards + 1)),
      autoPlayDelay
    );
    return () => clearInterval(interval);
  }, [active]);

  return (
    <Box py={4}>
      <Box my={2}>
        <Typography className={classes.headText}>Other Products</Typography>
      </Box>
      <Box py={1}>
        <ItemsCarousel
          gutter={20}
          // infiniteLoop={true}
          alwaysShowChevrons={true}
          chevronWidth={60}
          numberOfCards={4}
          slidesToScroll={1}
          outsideChevron={false}
          activeItemIndex={active}
          requestToChangeActive={onChange}
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
          {storeProduct.products?.map((product, index) => (
            <Box pb={2} key={index}>
              <Product product={product} />
            </Box>
          ))}
        </ItemsCarousel>
      </Box>
    </Box>
  );
}
