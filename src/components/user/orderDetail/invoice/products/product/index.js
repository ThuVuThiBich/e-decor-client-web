import {
  Box,
  Button,
  Divider,
  Grid, TextField, Typography
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { createFeedback } from "redux/feedbackRedux";
import ProductImage from "../image";
import { useStyles } from "./styles";

const style = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 4,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};
export default function Product(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { product, isWritten = false } = props;
  const [content, setContent] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [rating, setRating] = useState(5);
  const [feedbackImages, setFeedbackImages] = useState([]);
  // images
  const [files, setFiles] = useState([]);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  // images
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      // Push all the axios request promise into a single array
      const uploaders = acceptedFiles?.map((file) => {
        // Initial FormData
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "uploads"); // Replace the preset name with your own
        formData.append("api_key", "824454275614915"); // Replace API key with your own Cloudinary key
        formData.append("timestamp", (Date.now() / 1000) | 0);

        // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
        return axios
          .post(
            "https://api.cloudinary.com/v1_1/e-decor/image/upload",
            formData,
            {
              headers: { "X-Requested-With": "XMLHttpRequest" },
            }
          )
          .then((response) => {
            return response.data.secure_url;
          });
      });
      //
      // Once all the files are uploaded
      axios.all(uploaders).then((response) => {
        // ... perform after upload is successful operation
        setFeedbackImages(response);
        console.log(response);
      });
      //
      setFiles(
        acceptedFiles?.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files?.map((file, index) => (
    <ProductImage file={file.preview} key={index} />
  ));

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
              name="rating"
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
          <Box mt={2}>
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <p>Drag & drop product images here</p>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={1}
              >
                <Divider className={classes.divider} />
                <Box>
                  <Typography component="span" className={classes.dividerText}>
                    or
                  </Typography>
                </Box>
                <Divider className={classes.divider} />
              </Box>
              <Button color="primary" variant="contained">
                Select Files
              </Button>
            </div>
            <Box display="flex" flexWrap="wrap" ml={-1}>
              {thumbs}
            </Box>
          </Box>
          <Box my={4} display="flex" flexDirection="row">
            <Box mr={2}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  setIsSelected(!isSelected);
                  dispatch(
                    createFeedback({
                      id: product?.productVersion?.product?.id,
                      body: {
                        content,
                        rating,
                        feedbackImages,
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
