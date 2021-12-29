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
import ProductVersionsForm from "../productVersions";
import { useStyles } from "./styles";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 200,
  height: 200,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
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

export default function ViewProductForm() {
  const classes = useStyles();
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  // images
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  console.log(files);
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="" />
      </div>
    </div>
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

  const mockData = {
    name: "",
    category: "Category1",
    images: [],
    productVersions: [],
  };

  const [isEdit, setIsEdit] = useState(true);

  return (
    <Paper>
      <Box p={2} my={2}>
        <form>
          <Grid container>
            <Grid item xs={12} md={6}>
              <FormControl variant="outlined" margin="dense" fullWidth>
                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                <OutlinedInput
                  disabled={isEdit}
                  id="component-outlined"
                  value={"name"}
                  onChange={handleChange}
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
                  value={""}
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
                >
                  {["Category1", "Category2"].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
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
                <aside style={thumbsContainer}>{thumbs}</aside>
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <Box>
                {isEdit ? (
                  <FormControl variant="outlined" margin="dense" fullWidth>
                    <InputLabel htmlFor="component-outlined">
                      Description
                    </InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      value={name}
                      onChange={handleChange}
                      label="Description"
                      placeholder="Description"
                      multiline
                      rows={3}
                    />
                  </FormControl>
                ) : (
                  <Editor
                    rows={5}
                    placeholder="Description ..."
                    toolbarClassName={classes.editorToolbar}
                    editorClassName={classes.editor}
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                  />
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
            onClick={() => setIsEdit(!isEdit)}
          >
            {isEdit ? "Edit Product" : "Save Changes"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
