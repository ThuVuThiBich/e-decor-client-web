import {
  Avatar,
  Box,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
export default function UserReview(props) {
  const classes = useStyles();
  const { feedback } = props;
  return (
    <Box mb={2} ml={3} mt={1}>
      <Box display="flex" alignItems="flex-start">
        <Box mr={2}>
          <Avatar
            alt=""
            src={feedback?.user?.avatar}
            className={classes.avatar}
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <Box mb={2}>
            <Typography style={{ fontWeight: 600 }}>
              {feedback?.user?.name}
            </Typography>
            <Rating
              value={
                Number(feedback?.avgRatings) === 0
                  ? 5
                  : Number(feedback?.rating)
              }
              precision={0.1}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              readOnly
              className={classes.rating}
            />
          </Box>
          <Box mb={2}>{feedback?.content}</Box>
          <Box>
            <ImageList rowHeight={100} className={classes.imageList}>
              {feedback?.feedbackImages?.map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    width={100}
                    height={100}
                    src={item.image}
                    alt={item.image}
                    style={{ padding: 4, border: "1px solid #f5f5f5" }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
