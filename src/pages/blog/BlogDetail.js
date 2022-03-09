import { Box, Container, Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Footer from "components/layout/Footer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "redux/blogRedux";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";
import Header from "./Header";
import PostDetail from "./PostDetail";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
}));

export const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

export const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "Instagram", icon: InstagramIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function BlogDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts({ page: 1, limit: 5 }));
  }, [dispatch]);
  return (
    <>
      <CssBaseline />
      <Box
        style={{
          backgroundColor: "#0c0e30",
          zIndex: 1000,
          position: "fixed",
          width: "100%",
        }}
        mb={10}
      >
        <Container maxWidth="lg">
          <Header title="E-Decor Blog" sections={sections} />
        </Container>
      </Box>
      <Container maxWidth="lg" style={{ paddingTop: 100 }}>
        <main>
          <Grid container spacing={3} className={classes.mainGrid}>
            <PostDetail />

            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer />
    </>
  );
}
