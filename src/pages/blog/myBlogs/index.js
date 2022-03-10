import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import BallotIcon from "@material-ui/icons/Ballot";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMyPosts } from "redux/blogRedux";
import { blogSelector } from "redux/selectors";
import PostCard from "../post";
import ToolbarBox from "../Toolbar";
const useStyles = makeStyles((theme) => ({
  title: {
    color: "#2b3445",
    fontSize: 25,
    marginBottom: 0,
    marginTop: 0,
    fontWeight: 700,
    lineHeight: 1,
    marginLeft: 12,
    whiteSpace: "normal",
  },
  icon: {
    fontSize: 24,
    color: "#D23F57",
  },
}));
export default function MyBlogs() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);
  const { posts } = useSelector(blogSelector);
  return (
    <Box>
      <Box
        mb={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <BallotIcon className={classes.icon} />
          <Typography className={classes.title}>My Posts</Typography>
        </Box>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => history.push("/blog/add")}
        >
          <AddIcon style={{ marginRight: 8 }} />
          New Post
        </Button>
      </Box>
      <ToolbarBox />
      <Box style={{}}>
        {posts?.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </Box>
    </Box>
  );
}
