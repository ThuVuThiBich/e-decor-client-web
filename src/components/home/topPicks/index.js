import { Box, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import Carousel from "react-material-ui-carousel";
import FeaturedEvents from "./FeaturedEvents";
import Pick from "./Pick";
import { useStyles } from "./styles";
export default function TopPicks() {
  const classes = useStyles();
  const events = [
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
  ];

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

  return (
    <section className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={5}>
          <Carousel animation="slide" duration="5000" interval={5000}>
            {events?.map((event, i) => (
              <FeaturedEvents key={i} event={event} />
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box>
            <Typography variant="h2" className={classes.topPicks}>
              Top Picks
            </Typography>
          </Box>
          <ItemsCarousel
            infiniteLoop={true}
            alwaysShowChevrons={true}
            chevronWidth={30}
            numberOfCards={4}
            slidesToScroll={1}
            outsideChevron={true}
            activeItemIndex={active}
            requestToChangeActive={(value) => setActive(value)}
            rightChevron={
              <IconButton>
                <ArrowForwardIosIcon />
              </IconButton>
            }
            leftChevron={
              <IconButton>
                <ArrowBackIosIcon />
              </IconButton>
            }
          >
            {mockItems?.map((item, index) => (
              <Pick key={index} item={item} />
            ))}
          </ItemsCarousel>
          <Paper variant="outlined" className={classes.paper}>
            <Box m={2} display="flex">
              <Grid container spacing={2}>
                <Grid
                  item
                  md={6}
                  display="flex"
                  // justifyContent="center"
                  // alignItems="center"
                >
                  <img
                    src="https://media.designcafe.com/wp-content/uploads/2020/09/12125557/study-table-decoration.jpg"
                    alt="blog"
                    // width={200}
                  />
                </Grid>
                <Grid item md={6}>
                  <Typography
                    variant="h2"
                    className={classes.blog}
                    gutterBottom
                  >
                    Get inspirations
                  </Typography>
                  <Typography
                    // variant="body"
                    className={classes.subBlog}
                    gutterBottom
                  >
                    Go to blog
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
}
