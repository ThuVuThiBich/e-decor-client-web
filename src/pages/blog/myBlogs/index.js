import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import BallotIcon from "@material-ui/icons/Ballot";
import Post from "components/home/ideasBlog/Post";
import React from "react";
import { useHistory } from "react-router-dom";
import { posts } from "../Blog";
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
        {posts.map((post, index) => (
          // <Box py={2}>
          //   <Card className={classes.markdown} key={index}>
          //     post
          //   </Card>
          // </Box>
          <Box
            key={index}
            onClick={() => history.push(`/blog/my-posts/${index}`)}
          >
            <Post />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
