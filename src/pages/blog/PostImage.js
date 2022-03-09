import { Box, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ScrollToTop from "components/common/ScrollToTop";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import { blogSelector } from "redux/selectors";

export default function PostImage(props) {
  ScrollToTop();
  const { image } = props;
  const { posts } = useSelector(blogSelector);
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <img src={image?.image} alt="" />
    </Box>
  );
}
