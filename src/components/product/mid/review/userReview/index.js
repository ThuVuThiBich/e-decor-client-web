import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiImageListItem-imgFullWidth": {
      width: "auto !important",
    },
  },
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
              value={feedback?.rating ? Number(feedback?.rating) : 0}
              precision={0.1}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              readOnly
              className={classes.rating}
            />
          </Box>
          <Box mb={2}>{feedback?.content}</Box>
          <Box display="flex" alignItems="center">
            {feedback?.feedbackImages?.map((item, index) => (
              <Box key={index}>
                <img
                  width={150}
                  height={150}
                  src={item.image}
                  alt={item.image}
                  style={{ padding: 4, border: "1px solid #f5f5f5" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
