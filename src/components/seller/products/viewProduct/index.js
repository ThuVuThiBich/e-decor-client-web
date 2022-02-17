import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React, { useEffect, useState } from "react";
//
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct, updateProduct } from "redux/productRedux";
import { categorySelector, productSelector } from "redux/selectors";
import ProductVersionsForm from "../productVersions";
import { useStyles } from "./styles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import { formats, modules } from "pages/blog/addBlog";
const thumbsContainer = {
  marginTop: 16,
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
  borderRadius: 8,
  border: "1px solid #ccc",
};

const style = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

export default function ViewProductForm(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const storeCategory = useSelector(categorySelector);
  const { product } = useSelector(productSelector);
  const [name, setName] = useState(product && product?.name);
  const [images, setImages] = useState(
    product?.images?.map((item) => item.image)
  );
  const [description, setDescription] = useState(
    product && product?.description
  );
  const [categoryId, setCategoryId] = useState(
    product && product?.category?.id
  );
  const handleChange = (event) => {
    setDescription(event?.target?.value);
  };

  // images
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
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
    <Grid item xs={12} md={3} key={index}>
      <Box
        style={{
          borderRadius: 8,
          width: 200,
          height: 200,
          boxSizing: "border-box",
        }}
      >
        <img src={file.preview} style={img} alt="" />
      </Box>
    </Grid>
  ));
  const previousThumbs = product.images?.map((file, index) => (
    <Grid item xs={12} md={3} key={index}>
      <Box
        style={{
          borderRadius: 8,
          width: 200,
          height: 200,
          boxSizing: "border-box",
        }}
      >
        <img src={file.image} style={img} alt="" />
      </Box>
    </Grid>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  // edit

  //
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  const [isEdit, setIsEdit] = useState(true);

  return (
    <Paper>
      <Box p={2} my={2}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl
                variant="outlined"
                margin="dense"
                fullWidth
                disabled={isEdit}
              >
                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="Name"
                  placeholder="Name"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
                margin="dense"
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel id="select-outlined-label">
                  Select Category
                </InputLabel>
                <Select
                  disabled={isEdit}
                  labelId="select-outlined-label"
                  id="select-outlined"
                  value={categoryId}
                  onChange={handleChange}
                  label="Select Category"
                  className={classes.input}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      classes: {
                        paper: classes.paper,
                      },
                    },
                  }}
                >
                  {storeCategory.categories?.map((option, index) => (
                    <MenuItem key={index} value={option?.id}>
                      {option?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {isEdit ? (
              <fieldset
                style={{
                  border: "1px solid #cccccc",
                  borderRadius: 4,
                  padding: "8px 16px 16px",
                  margin: 8,
                }}
              >
                <legend
                  style={{
                    margin: "0px 8px opx -4px",
                    padding: "0px 4px",
                    color: "#777d82",
                  }}
                >
                  Images
                </legend>
                <Grid container item xs={12} md={12} spacing={2}>
                  {images?.map((image, index) => (
                    <Grid item xs={12} md={3} key={index}>
                      <img
                        src={image}
                        alt=""
                        style={{
                          borderRadius: 4,
                          border: "1px solid #cccccc",
                          minHeight: 186.5,
                          minWidth: 186.5,
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </fieldset>
            ) : (
              <Grid item xs={12} md={12}>
                <Box>
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
                        <Typography
                          component="span"
                          className={classes.dividerText}
                        >
                          or
                        </Typography>
                      </Box>
                      <Divider className={classes.divider} />
                    </Box>
                    <Button color="primary" variant="contained">
                      Select Files
                    </Button>
                  </div>
                  <aside style={thumbsContainer}>
                    <Grid container spacing={2}>
                      {previousThumbs}
                      {thumbs}
                    </Grid>
                  </aside>
                </Box>
              </Grid>
            )}

            <Grid item xs={12} md={12}>
              <Box>
                {isEdit ? (
                  <fieldset
                    style={{
                      border: "1px solid #cccccc",
                      borderRadius: 4,
                      padding: "8px 16px 16px",
                      margin: 8,
                    }}
                  >
                    <legend
                      style={{
                        margin: "0px 8px opx -4px",
                        padding: "0px 4px",
                        color: "#777d82",
                      }}
                    >
                      Description
                    </legend>
                    <div
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                  </fieldset>
                ) : (
                  // <FormControl variant="outlined" margin="dense" fullWidth>
                  //   <InputLabel htmlFor="component-outlined">
                  //     Description
                  //   </InputLabel>
                  //   <OutlinedInput
                  //     id="component-outlined"
                  //     value={description}
                  //     onChange={handleChange}
                  //     label="Description"
                  //     placeholder="Description"
                  //     multiline
                  //     rows={3}
                  //   />
                  // </FormControl>
                  <ReactQuill
                    className={classes.editor}
                    style={{ borderRadius: 8 }}
                    // theme="snow"
                    value={description}
                    onChange={handleChange}
                    modules={modules}
                    formats={formats}
                    placeholder={"Description ..."}
                  />
                  // <Editor
                  //   rows={5}
                  //   placeholder="Description ..."
                  //   toolbarClassName={classes.editorToolbar}
                  //   editorClassName={classes.editor}
                  //   editorState={editorState}
                  //   onEditorStateChange={onEditorStateChange}
                  // />
                )}
              </Box>
            </Grid>
          </Grid>

          <ProductVersionsForm isEdit={isEdit} />
        </form>

        <Box>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              setIsEdit(!isEdit);
              console.log(isEdit);
              !isEdit && dispatch(updateProduct());
            }}
          >
            {isEdit ? "Edit Product" : "Save Changes"}
          </Button>
        </Box>
      </Box>
      <ToastContainer autoClose={2000} style={{ marginTop: "100px" }} />
    </Paper>
  );
}
