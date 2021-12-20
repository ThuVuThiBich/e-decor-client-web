import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import Product from "./product";
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
    name: "Lịch để bàn lật số 2022 ",
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
];

export default function Products() {
  const classes = useStyles();

  return (
    <Paper>
      <Box my={2}>
        <Box display="flex" className={classes.head}>
          <Box display="flex" m={2}>
            <Typography className={classes.title}>Order ID: </Typography>
            <Typography>9001997718074513</Typography>
          </Box>
          <Box display="flex" m={2}>
            <Typography className={classes.title}>Placed on: </Typography>
            <Typography>20 Dec, 2021</Typography>
          </Box>
        </Box>
        <Box p={2}>
          {mockProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
