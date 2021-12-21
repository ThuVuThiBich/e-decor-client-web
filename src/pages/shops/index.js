import { Box, Container, Grid, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Shop from "components/shop";
import React from "react";
import { useStyles } from "./styles";

const mockShops = [
  { id: 1, name: "Handmade Decor" },
  { id: 2, name: "Handmade Decor" },
  { id: 3, name: "Handmade Decor" },
  { id: 4, name: "Handmade Decor" },
  { id: 5, name: "Handmade Decor" },
];
export default function Shops() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Container className={classes.container}>
      <Box py={4}>
        <Typography className={classes.headText}>All Shops</Typography>
      </Box>
      <Grid container spacing={3}>
        {mockShops.map((shop) => (
          <Grid key={shop.id} item xs={12} sm={6} lg={4}>
            <Shop shop={shop} />
          </Grid>
        ))}
      </Grid>
      <Box
        py={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>Showing 1-9 of 300 Shops</Box>
        <Box>
          <Pagination
            count={10}
            page={page}
            onChange={handleChange}
            variant="outlined"
            color="primary"
          />
        </Box>
      </Box>
    </Container>
  );
}
