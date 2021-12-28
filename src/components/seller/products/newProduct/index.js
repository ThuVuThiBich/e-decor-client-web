import {
  Box,
  Button as MuiButton,
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
import {
  CloudUpload as MuiCloudUpload,
  Delete as MuiDelete,
} from "@material-ui/icons";
import { spacing } from "@material-ui/system";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React, { createRef, useEffect, useState } from "react";
//
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import ProductVersionForm from "../productVersion";
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

export default function NewProductForm() {
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

  const Button = styled(MuiButton)(spacing);

  //
  const [image, setImage] = useState("");
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
  };

  const handleClick = (event) => {
    if (image) {
      event.preventDefault();
      setImageUrl(null);
      //  setAvatarFile(null);
      //  setResource({ ...resource, avatar: "" });
    }
  };

  //
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  //  const contentBlock = htmlToDraft(html);
  //  if (contentBlock) {
  //    const contentState = ContentState.createFromBlockArray(
  //      contentBlock.contentBlocks
  //    );
  //    const editorState = EditorState.createWithContent(contentState);
  //    this.state = {
  //      editorState,
  //    };
  //  }
  return (
    <Paper>
      <Box p={2} my={2}>
        <form>
          <Grid container>
            <Grid item xs={12} md={6}>
              <FormControl variant="outlined" margin="dense" fullWidth>
                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={name}
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
                  {["EN", "VI"].map((option) => (
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
              <Box className={classes.editorWrapper}>
                <Editor
                  rows={5}
                  placeholder="Description ..."
                  toolbarClassName={classes.editorToolbar}
                  editorClassName={classes.editor}
                  editorState={editorState}
                  onEditorStateChange={onEditorStateChange}
                />
              </Box>
            </Grid>
          </Grid>

          <ProductVersionsForm />
        </form>

        <Box>
          <Button color="primary" variant="contained">
            Save Product
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
