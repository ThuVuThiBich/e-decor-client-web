import { Container } from "@material-ui/core";
import FeaturedCategories from "components/home/featuredCategories";
import IdeasBlog from "components/home/ideasBlog";
import TopPicks from "components/home/topPicks";
import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "redux/selectors";

const Home = () => {
  const user = useSelector(userSelector);
  console.log("user", user);
  return (
    <div>
      <Container style={{ paddingTop: 150 }}>
        <TopPicks />
        <FeaturedCategories />
        <IdeasBlog />
      </Container>
    </div>
  );
};

export default Home;
