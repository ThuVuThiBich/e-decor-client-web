import { Box, Container } from "@material-ui/core";
import FeaturedCategories from "components/home/featuredCategories";
import IdeasBlog from "components/home/ideasBlog";
import TopPicks from "components/home/topPicks";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Container style={{ paddingTop: 150 }}>
        <TopPicks />
        <FeaturedCategories />
        <IdeasBlog />
      </Container>
    </Box>
  );
};

export default Home;
