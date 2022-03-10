import { Box, Chip, Grid, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Product from "components/shop/shopContent/products/product";
import React from "react";
import Carousel from "react-material-ui-carousel";
export const mockItems = [
  {
    name: " Balloon set  ",
    images: [
      { image: "https://cf.shopee.vn/file/ef870f1cdce98db5d5026f6b7805898d" },
    ],
    id: 52,
    minPrice: "10",
    maxPrice: "15",
    avgRatings: 5,
  },
  {
    name: "Wall Grid Panel ",
    images: [
      { image: "https://cf.shopee.vn/file/a746af93a3a4310d2b80336dddfd986a" },
    ],
    id: 53,
    minPrice: "10",
    maxPrice: "15",
    avgRatings: 5,
  },
  {
    name: "LED 3D Decor Lamp",
    images: [
      {
        image:
          "https://res.cloudinary.com/e-decor/image/upload/v1646118389/uploads/lxpb7tdczpcqd2avbfrv.jpg",
      },
    ],
    id: 54,
    minPrice: "10",
    maxPrice: "15",
    avgRatings: 5,
  },
  {
    name: "Decor postcard",
    images: [
      {
        image:
          "https://res.cloudinary.com/e-decor/image/upload/v1646119409/uploads/s6cvzvugzr88ebq5kbym.jpg",
      },
    ],
    id: 55,
    minPrice: "20",
    maxPrice: "25",
    avgRatings: 5,
  },
  {
    name: " Balloon set  ",
    images: [
      { image: "https://cf.shopee.vn/file/ef870f1cdce98db5d5026f6b7805898d" },
    ],
    id: 52,
    minPrice: "5",
    maxPrice: "15",
    avgRatings: 5,
  },
  {
    name: "Wall Grid Panel ",
    images: [
      { image: "https://cf.shopee.vn/file/06ea894b12045fd40d256d31b73553ee" },
    ],
    id: 53,
    minPrice: "5",
    maxPrice: "15",
    avgRatings: 5,
  },
  {
    name: "LED 3D Decor Lamp",
    images: [
      { image: "https://cf.shopee.vn/file/9e991050944a068348ec8d8ad522ecdf" },
    ],
    id: 54,
    minPrice: "10",
    maxPrice: "15",
    avgRatings: 5,
  },
  {
    name: "Decor postcard",
    images: [
      { image: "https://cf.shopee.vn/file/265dcac08e575c52e62932e99100b610" },
    ],
    id: 55,
    minPrice: "25",
    maxPrice: "30",
    avgRatings: 5,
  },
];
const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  product: {},
}));

export default function PostSidebar(props) {
  const classes = useStyles();
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={3}>
      <Box>
        <Box mb={2}>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
            style={{
              fontSize: 20,
              fontWeight: 700,
              lineHeight: 1,
              textTransform: "none",
              whiteSpace: "normal",
              color: "#2B3445",
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            Featured Decor Themes
          </Typography>
          {archives?.map((archive, index) => (
            <Link
              display="block"
              variant="body1"
              href={archive.label}
              key={index}
              style={{ cursor: "pointer", marginTop: 4, marginBottom: 4 }}
            >
              <Chip
                color="primary"
                size="small"
                label={archive.title}
                style={{
                  letterSpacing: 1.2,
                  cursor: "pointer",
                  // fontSize: 12,
                  // backgroundColor: "#D23F57",
                }}
              />
            </Link>
          ))}
        </Box>
        <Box
          mb={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mb={2}
            style={{
              fontSize: 20,
              fontWeight: 700,
              lineHeight: 1,
              textTransform: "none",
              whiteSpace: "normal",
              color: "#2B3445",
            }}
          >
            Featured Products
          </Box>
          <Carousel
            className={classes.product}
            animation="slide"
            duration="5000"
            interval={5000}
          >
            {mockItems?.map((product, i) => (
              <Product key={i} noHover={true} product={product} />
            ))}
          </Carousel>
        </Box>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
          >
            Social
          </Typography>
          {social?.map((network, index) => (
            <Link display="block" variant="body1" href="#" key={index}>
              <Grid container direction="row" spacing={1} alignItems="center">
                <Grid item>
                  <network.icon />
                </Grid>
                <Grid item>{network.name}</Grid>
              </Grid>
            </Link>
          ))}
        </Box>
      </Box>
    </Grid>
  );
}
