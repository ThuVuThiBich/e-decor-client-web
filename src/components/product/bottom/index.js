import { Box, IconButton, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Product from "components/shop/shopContent/products/product";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { useStyles } from "./styles";
const mockProducts = [
  {
    id: "1",
    name: "Nến thơm",
    url: "https://cf.shopee.vn/file/2b95a7a9ebf3b7b4410ddf3e1aa62ef4",
    price: 5,
    amount: 2,
    description: "Không khói thư giãn cao cấp Aroma Menahem Sena Beauty",
    total: 10,
  },
  {
    id: "2",
    name: "Lịch để bàn lật 2022 ",
    url: "https://cf.shopee.vn/file/381fdfbf11931e04595d1e16d017e5ca",
    price: 12,
    amount: 1,
    description: "Phong cách Vintage DECOSA",
    total: 12,
  },
  {
    id: "3",
    name: "Bình Hoa Thủy Tinh",
    url: "https://cf.shopee.vn/file/9d8fd8ddb577758fffa9cc638818837e",
    price: 8,
    amount: 3,
    description:
      " Phong Cách Bắc Âu/Cành Hoa Tulip Giả Dùng Để Trang Trí Nhà Cửa",
    total: 24,
  },
  {
    id: "3",
    name: "Bình Hoa Thủy Tinh",
    url: "https://cf.shopee.vn/file/9d8fd8ddb577758fffa9cc638818837e",
    price: 8,
    amount: 3,
    description:
      " Phong Cách Bắc Âu/Cành Hoa Tulip Giả Dùng Để Trang Trí Nhà Cửa",
    total: 24,
  },
];
export default function Bottom() {
  const classes = useStyles();
  const [active, setActive] = useState(0);

  return (
    <Box py={4}>
      <Box my={2}>
        <Typography className={classes.headText}>Related Products</Typography>
      </Box>
      <Box py={1}>
        <ItemsCarousel
          gutter={20}
          infiniteLoop={true}
          alwaysShowChevrons={true}
          chevronWidth={60}
          numberOfCards={4}
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
          {mockProducts.map((product) => (
            <Box pb={2}>
              <Product product={product} />
            </Box>
          ))}
        </ItemsCarousel>
      </Box>
    </Box>
  );
}
