import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  OutlinedInput,
  Tooltip,
} from "@material-ui/core";
import axios from "axios";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { createRef, useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { removeProductVersion, updateProductVersion } from "redux/productRedux";

export default function ProductVersionForm(props) {
  const { productVersion, isEdit } = props;
  const classes = useStyles();
  // images
  const [files, setFiles] = useState([]);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  //
  const [image, setImage] = useState(productVersion?.image);
  const inputFileRef = createRef(null);

  const cleanup = () => {
    URL.revokeObjectURL(image);
    inputFileRef.current.value = null;
  };

  const setImageUrl = (newImage) => {
    if (image) {
      cleanup();
    }
    setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];
    //  setAvatarFile(newImage);
    if (newImage) {
      setImageUrl(URL.createObjectURL(newImage));
    }
    getUploadedUrl(event.target.files[0]).then((result) => {
      dispatch(updateProductVersion({ ...productVersion, image: result }));
    });
  };

  const handleClick = (event) => {
    if (image) {
      event.preventDefault();
      setImageUrl(null);
      //  setAvatarFile(null);
      //  setResource({ ...resource, avatar: "" });
    }
  };

  const [showedBtn, setShowedBtn] = useState(false);
  const [name, setName] = useState(productVersion?.name);
  const [price, setPrice] = useState(productVersion?.price);
  const [quantity, setQuantity] = useState(productVersion?.quantity);
  // const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const handleChangeName = (event) => {
    setName(event.target.value);
    dispatch(
      updateProductVersion({ ...productVersion, name: event.target.value })
    );
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
    dispatch(
      updateProductVersion({ ...productVersion, price: event.target.value })
    );
  };
  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
    dispatch(
      updateProductVersion({ ...productVersion, quantity: event.target.value })
    );
  };

  const getUploadedUrl = async (file) => {
    //  setUploadCover(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/e-decor/image/upload",
        data
      );
      const { url } = uploadRes.data;
      return url;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box my={2}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={3}>
          <Box
            className={classes.container}
            onMouseEnter={() => setShowedBtn(true)}
            onMouseLeave={() => setShowedBtn(false)}
          >
            <Avatar
              alt=""
              variant="rounded"
              src={image}
              className={classes.avatarWrapper}
              style={{ opacity: `${showedBtn ? 0.5 : 1}` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                width="764.17285"
                height="572.568"
                viewBox="0 0 764.17285 572.568"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M949.08643,695.284H373.91357a33.03734,33.03734,0,0,1-33-33v-307a33.03734,33.03734,0,0,1,33-33H949.08643a33.03734,33.03734,0,0,1,33,33v307A33.03734,33.03734,0,0,1,949.08643,695.284Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#fff"
                />
                <path
                  d="M949.08643,695.284H373.91357a33.03734,33.03734,0,0,1-33-33v-307a33.03734,33.03734,0,0,1,33-33H949.08643a33.03734,33.03734,0,0,1,33,33v307A33.03734,33.03734,0,0,1,949.08643,695.284Zm-575.17286-371a31.03521,31.03521,0,0,0-31,31v307a31.03521,31.03521,0,0,0,31,31H949.08643a31.03521,31.03521,0,0,0,31-31v-307a31.03521,31.03521,0,0,0-31-31Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#f2f2f2"
                />
                <path
                  d="M949.08643,671.284H373.91357a9.01032,9.01032,0,0,1-9-9v-307a9.01032,9.01032,0,0,1,9-9H949.08643a9.01032,9.01032,0,0,1,9,9v307A9.01032,9.01032,0,0,1,949.08643,671.284Zm-575.17286-323a7.00787,7.00787,0,0,0-7,7v307a7.00787,7.00787,0,0,0,7,7H949.08643a7.00787,7.00787,0,0,0,7-7v-307a7.00787,7.00787,0,0,0-7-7Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#f2f2f2"
                />
                <path
                  d="M802.69825,672.74654,246.72732,525.369a33.03733,33.03733,0,0,1-23.44266-40.354L301.9478,188.26413a33.03732,33.03732,0,0,1,40.354-23.44266L898.27268,312.199a33.03733,33.03733,0,0,1,23.44266,40.354L843.0522,649.30387A33.03734,33.03734,0,0,1,802.69825,672.74654Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#f2f2f2"
                />
                <path
                  d="M802.69825,672.74654,246.72732,525.369a33.03733,33.03733,0,0,1-23.44266-40.354L301.9478,188.26413a33.03732,33.03732,0,0,1,40.354-23.44266L898.27268,312.199a33.03733,33.03733,0,0,1,23.44266,40.354L843.0522,649.30387A33.03734,33.03734,0,0,1,802.69825,672.74654ZM341.78929,166.7547A31.0352,31.0352,0,0,0,303.881,188.77659L225.21789,485.52751a31.0352,31.0352,0,0,0,22.02189,37.90826L803.21071,670.8133A31.0352,31.0352,0,0,0,841.119,648.79141l78.66314-296.75092a31.0352,31.0352,0,0,0-22.02189-37.90826Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#e6e6e6"
                />
                <path
                  d="M808.84781,649.54777,252.87688,502.17024a9.01031,9.01031,0,0,1-6.39345-11.00563l78.66314-296.75092a9.01031,9.01031,0,0,1,11.00562-6.39346L892.12312,335.39777a9.0103,9.0103,0,0,1,6.39345,11.00562L819.85343,643.15431A9.01031,9.01031,0,0,1,808.84781,649.54777ZM335.63973,189.95347a7.00786,7.00786,0,0,0-8.55993,4.97268L248.41666,491.67707a7.00786,7.00786,0,0,0,4.97268,8.55993L809.36027,647.61454a7.00787,7.00787,0,0,0,8.55993-4.97269l78.66314-296.75092a7.00786,7.00786,0,0,0-4.97268-8.55993Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#fff"
                />
                <path
                  d="M826.08643,736.284H250.91357a33.03734,33.03734,0,0,1-33-33v-307a33.03734,33.03734,0,0,1,33-33H826.08643a33.03734,33.03734,0,0,1,33,33v307A33.03734,33.03734,0,0,1,826.08643,736.284Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#fff"
                />
                <path
                  d="M669.818,710.284h-371.43c-.46507.002-.92966-.01-1.38793-.03577l175.66931-98.93366c3.345-1.92234,10.84959-2.599,16.762-1.51148a15.18339,15.18339,0,0,1,4.64878,1.51148l117.89608,66.39218,5.64814,3.17689Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#e6e6e6"
                />
                <path
                  d="M787,710.284H465.74351l62.2532-29.40041,4.48-2.11794,81.1215-38.31431c5.31828-2.51112,18.11244-2.66746,24.3653-.47362q.63.22445,1.16817.47362Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#e6e6e6"
                />
                <path
                  d="M250.91357,365.284a31.03521,31.03521,0,0,0-31,31v307a31.03521,31.03521,0,0,0,31,31H826.08643a31.03521,31.03521,0,0,0,31-31v-307a31.03521,31.03521,0,0,0-31-31Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#3f3d56"
                />
                <path
                  d="M826.08643,712.284H250.91357a9.01032,9.01032,0,0,1-9-9v-307a9.01032,9.01032,0,0,1,9-9H826.08643a9.01032,9.01032,0,0,1,9,9v307A9.01032,9.01032,0,0,1,826.08643,712.284Zm-575.17286-323a7.00787,7.00787,0,0,0-7,7v307a7.00787,7.00787,0,0,0,7,7H826.08643a7.00787,7.00787,0,0,0,7-7v-307a7.00787,7.00787,0,0,0-7-7Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#ccc"
                />
                <circle
                  cx="480.01677"
                  cy="217.85864"
                  r="61.9031"
                  fill="#ff6584"
                />
                <ellipse
                  cx="505.89607"
                  cy="345.09898"
                  rx="78.40314"
                  ry="98.13725"
                  fill="#f2f2f2"
                />
                <polygon
                  points="506.112 325.365 506.327 325.365 510.204 547.65 502.019 547.65 506.112 325.365"
                  fill="#ccc"
                />
                <path
                  d="M737.39778,636.24085v0a1.93854,1.93854,0,0,1-.81224,2.61841l-11.245,5.92024-1.80617-3.43065,11.245-5.92025A1.93854,1.93854,0,0,1,737.39778,636.24085Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#ccc"
                />
                <ellipse
                  cx="280.48957"
                  cy="345.09898"
                  rx="78.40314"
                  ry="98.13725"
                  fill="#f2f2f2"
                />
                <path
                  d="M511.99148,639.916v-.00008a1.939,1.939,0,0,0-2.61875-.81222l-7.85028,4.133-2.68873-154.15586h-.21534l-4.092,222.28567H502.711l-1.11258-63.788,9.58076-5.04407A1.93935,1.93935,0,0,0,511.99148,639.916Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#ccc"
                />
                <path
                  d="M610.83353,282.6528c54.86685,0,99.46253,103.38233,99.46253,172.05918s-44.47834,124.35043-99.3452,124.35043S511.60567,523.38883,511.60567,454.712,555.96669,282.6528,610.83353,282.6528Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#dee0de"
                />
                <path
                  d="M628.16826,619.831a2.45587,2.45587,0,0,0-3.31741-1.02913l-9.94743,5.2369-3.40653-195.332h-.27276L606.03866,710.3665h10.37093l-1.40987-80.82639,12.1397-6.39128A2.45593,2.45593,0,0,0,628.16826,619.831Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#3f3d56"
                />
                <path
                  d="M828.08643,734.284H252.91357a33.03734,33.03734,0,0,1-33-33v-307a33.03734,33.03734,0,0,1,33-33H828.08643a33.03734,33.03734,0,0,1,33,33v307A33.03734,33.03734,0,0,1,828.08643,734.284Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#fff"
                />
                <path
                  d="M671.818,708.284h-371.43c-.46507.002-.92966-.01-1.38793-.03577l175.66931-98.93366c3.345-1.92234,10.84959-2.599,16.762-1.51148a15.18339,15.18339,0,0,1,4.64878,1.51148l117.89608,66.39218,5.64814,3.17689Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#e6e6e6"
                />
                <path
                  d="M789,708.284H467.74351l62.2532-29.40041,4.48-2.11794,81.1215-38.31431c5.31828-2.51112,18.11244-2.66746,24.3653-.47362q.63.22445,1.16817.47362Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#e6e6e6"
                />
                <path
                  d="M828.08643,734.284H252.91357a33.03734,33.03734,0,0,1-33-33v-307a33.03734,33.03734,0,0,1,33-33H828.08643a33.03734,33.03734,0,0,1,33,33v307A33.03734,33.03734,0,0,1,828.08643,734.284Zm-575.17286-371a31.03521,31.03521,0,0,0-31,31v307a31.03521,31.03521,0,0,0,31,31H828.08643a31.03521,31.03521,0,0,0,31-31v-307a31.03521,31.03521,0,0,0-31-31Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#3f3d56"
                />
                <path
                  d="M828.08643,710.284H252.91357a9.01032,9.01032,0,0,1-9-9v-307a9.01032,9.01032,0,0,1,9-9H828.08643a9.01032,9.01032,0,0,1,9,9v307A9.01032,9.01032,0,0,1,828.08643,710.284Zm-575.17286-323a7.00787,7.00787,0,0,0-7,7v307a7.00787,7.00787,0,0,0,7,7H828.08643a7.00787,7.00787,0,0,0,7-7v-307a7.00787,7.00787,0,0,0-7-7Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#ccc"
                />
                <circle
                  cx="482.01677"
                  cy="215.85864"
                  r="61.9031"
                  fill="#ff6584"
                />
                <ellipse
                  cx="507.89607"
                  cy="343.09898"
                  rx="78.40314"
                  ry="98.13725"
                  fill="#f2f2f2"
                />
                <polygon
                  points="508.112 323.365 508.327 323.365 512.204 545.65 504.019 545.65 508.112 323.365"
                  fill="#ccc"
                />
                <path
                  d="M739.39778,634.24085v0a1.93854,1.93854,0,0,1-.81224,2.61841l-11.245,5.92024-1.80617-3.43065,11.245-5.92025A1.93854,1.93854,0,0,1,739.39778,634.24085Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#ccc"
                />
                <ellipse
                  cx="282.48957"
                  cy="343.09898"
                  rx="78.40314"
                  ry="98.13725"
                  fill="#f2f2f2"
                />
                <path
                  d="M513.99148,637.916v-.00008a1.939,1.939,0,0,0-2.61875-.81222l-7.85028,4.133-2.68873-154.15586h-.21534l-4.092,222.28567H504.711l-1.11258-63.788,9.58076-5.04407A1.93935,1.93935,0,0,0,513.99148,637.916Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#ccc"
                />
                <path
                  d="M612.83353,280.6528c54.86685,0,99.46253,103.38233,99.46253,172.05918s-44.47834,124.35043-99.3452,124.35043S513.60567,521.38883,513.60567,452.712,557.96669,280.6528,612.83353,280.6528Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#dee0de"
                />
                <path
                  d="M630.16826,617.831a2.45587,2.45587,0,0,0-3.31741-1.02913l-9.94743,5.2369-3.40653-195.332h-.27276L608.03866,708.3665h10.37093l-1.40987-80.82639,12.1397-6.39128A2.45593,2.45593,0,0,0,630.16826,617.831Z"
                  transform="translate(-217.91357 -163.716)"
                  fill="#3f3d56"
                />
              </svg>
            </Avatar>
            <Box
              className={classes.btn}
              style={{
                display: `${showedBtn ? "block" : "none"}`,
              }}
            >
              <input
                ref={inputFileRef}
                accept="image/*"
                hidden
                id={`avatar-image-upload-${productVersion.id}`}
                type="file"
                onChange={handleOnChange}
              />
              <label htmlFor={`avatar-image-upload-${productVersion.id}`}>
                <IconButton
                  variant="outlined"
                  color="primary"
                  component="span"
                  mb={1}
                  onClick={handleClick}
                  className={classes.btnUpload}
                  style={{
                    opacity: `${showedBtn ? 1 : 0.3}`,
                  }}
                >
                  {image ? (
                    <Tooltip title="Remove">
                      <DeleteIcon />
                    </Tooltip>
                  ) : (
                    <Tooltip title="Upload">
                      <CloudUploadIcon />
                    </Tooltip>
                  )}
                </IconButton>
              </label>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl
                variant="outlined"
                margin="dense"
                fullWidth
                disabled={isEdit}
              >
                <InputLabel htmlFor="component-outlined">Price</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={price}
                  onChange={handleChangePrice}
                  label="Price"
                  placeholder="Price"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                variant="outlined"
                margin="dense"
                fullWidth
                disabled={isEdit}
              >
                <InputLabel htmlFor="component-outlined">Stock</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={quantity}
                  onChange={handleChangeQuantity}
                  label="Stock"
                  placeholder="Stock"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl
                variant="outlined"
                margin="dense"
                fullWidth
                disabled={isEdit}
              >
                <InputLabel htmlFor="component-outlined">
                  Description
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={name}
                  onChange={handleChangeName}
                  label="Description"
                  placeholder="Description"
                  multiline
                  rows={3}
                />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              display="flex"
              // alignItems="center"
              // justifyContent="center"
            >
              <Button
                color="primary"
                variant="outlined"
                onClick={() =>
                  dispatch(removeProductVersion(productVersion.id))
                }
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}