import {
  Avatar,
  Box,
  Chip,
  Divider,
  IconButton,
  Paper,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ScrollToTop from "components/common/ScrollToTop";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import { blogSelector } from "redux/selectors";
import PostImage from "./PostImage";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const tmpData = [
  {
    image:
      "https://i.pinimg.com/originals/3f/b6/33/3fb63301836a2f48300181a409607967.jpg",
  },
  {
    image:
      "https://i.pinimg.com/564x/70/03/9c/70039c33d1f772f0c56cc4975c59b0fb.jpg",
  },
  {
    image:
      "https://i.pinimg.com/originals/6f/9b/57/6f9b5768b30f84945c38be6a0ce9b7ae.jpg",
  },
];
export default function PostDetail(props) {
  ScrollToTop();
  const { posts } = useSelector(blogSelector);
  return (
    <Grid item xs={12} md={9}>
      <Box>
        <Box mb={2} style={{ fontSize: 28, fontWeight: "bold" }}>
          Title
        </Box>
        <Paper>
          <Box p={2}>
            <Carousel animation="slide" duration="5000" interval={10000}>
              {tmpData?.map((image, i) => (
                <PostImage key={i} image={image} />
              ))}
            </Carousel>
          </Box>
        </Paper>
        <Box mt={2}>
          <Paper>
            <Box
              p={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Avatar src="" alt="" />
                <Box ml={2} display="flex" flexDirection="column">
                  <Box>User Name</Box>
                  <Box>Posted Date</Box>
                </Box>
              </Box>
              <Box>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box mt={2}>
          <Paper>
            <Box p={2} display="flex" flexDirection="column">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mb={2}
              >
                <Box mb={1}>Decor Themes</Box>
                <Box>
                  <Chip
                    color="primary"
                    size="small"
                    label={"study"}
                    style={{
                      letterSpacing: 1.2,
                      // fontSize: 12,
                      // backgroundColor: "#D23F57",
                    }}
                  />
                </Box>
              </Box>
              <Divider />
              <Box mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Grid>
  );
}
