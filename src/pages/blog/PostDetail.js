import Grid from "@material-ui/core/Grid";
import React from "react";
import { useSelector } from "react-redux";
import { blogSelector } from "redux/selectors";
import PostCard from "./PostDetail";

export default function PostDetail(props) {
  const { posts } = useSelector(blogSelector);
  return (
    <Grid item xs={12} md={9}>
      {posts?.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </Grid>
  );
}
