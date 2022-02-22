import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./styles";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useDispatch } from "react-redux";
import { createFeedback } from "redux/feedbackRedux";

export default function Product(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { product, isWritten = false } = props;
  const [content, setContent] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [rating, setRating] = React.useState(5);

  return (
    <Box>
      <Box display="flex" p={1} className={classes.root}>
        <Box mr={1}>
          <img
            width={64}
            height={64}
            src={product?.productVersion?.image}
            alt=""
          />
        </Box>

        <Grid container spacing={1} alignItems="center">
          <Grid item md={5}>
            <Box display="flex" m={2} flexDirection="column">
              <Typography className={classes.headText}>
                {product?.productVersion?.product?.name}
              </Typography>
              <Typography className={classes.subText}>
                ${product?.productVersion?.price} x {product?.quantity}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={isWritten ? 3 : 5}>
            <Box display="flex" m={2}>
              <Typography>{product?.productVersion?.product?.id}</Typography>
            </Box>
          </Grid>
          <Grid item md={isWritten ? 1 : 2}>
            <Box display="flex" m={2} justifyContent="flex-end">
              <Typography>
                ${product?.productVersion?.price * product?.quantity}
              </Typography>
            </Box>
          </Grid>
          {isWritten && (
            <Grid item md={3}>
              <Box display="flex" m={2} justifyContent="flex-end">
                <Button
                  color="secondary"
                  onClick={() => setIsSelected(!isSelected)}
                >
                  {isSelected ? "Close review" : "Write A Review"}
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
      {isSelected && (
        <Box display="flex" flexDirection="column">
          <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
            Ratings + Reviews
          </Typography>
          <Box my={2} display="flex" justifyContent="center">
            <Rating
              value={rating}
              precision={0.1}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              className={classes.rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>
          <TextField
            fullWidth
            id="content"
            label="Content"
            variant="outlined"
            value={content}
            multiline
            rows={2}
            onChange={(e) => setContent(e.target.value)}
            // InputProps={{ style: { fontSize: 16 } }}
            // InputLabelProps={{ style: { fontSize: 16 } }}
          />
          <Box my={4} display="flex" flexDirection="row">
            <Box mr={2}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  setIsSelected(!isSelected);
                  dispatch(
                    createFeedback({
                      id: product?.productVersion?.id,
                      body: {
                        content,
                        rating,
                        feedbackImages: [
                          "https://cf.shopee.vn/file/6721e2037646b1375d9d5c7cb39e1304",
                          "https://cf.shopee.vn/file/f3f9e91014d84e4846b12612c77bd45f",
                        ],
                      },
                    })
                  );
                }}
              >
                Confirm
              </Button>
            </Box>
            <Box>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => setIsSelected(!isSelected)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
