import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import PostDetail from "./PostDetail";
import PostSidebar from "./PostSidebar";

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

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "Event", label: "#" },
    { title: "Study Room", label: "#" },
    { title: "Minimalism", label: "#" },
    { title: "Birthday", label: "#" },
    { title: "Classic", label: "#" },
    { title: "Christmas", label: "#" },
    { title: "Modern", label: "#" },
  ],
  social: [
    { name: "Instagram", icon: InstagramIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function ViewPost() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("View PostPost");

    // dispatch(getPost());
  }, [dispatch]);
  return (
    <>
      <Container maxWidth="lg" style={{ paddingTop: 100 }}>
        <main>
          <Grid container spacing={3} className={classes.mainGrid}>
            <PostDetail />

            <PostSidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </>
  );
}
