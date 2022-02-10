import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import PostAddIcon from "@material-ui/icons/PostAdd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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
  //
  editor: {
    "& .ql-container": {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      // background: "#fefcfc",
      height: 200,
    },
    "& .ql-toolbar": {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      background: "#f5f5f5",
    },
  },
}));
export default function AddBlog() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState("");
  const handleChange = (value) => {
    console.log(value);
    setValue(value);
  };
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["link", "image"],

      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "size",
    "align",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];
  return (
    <Box>
      <Box
        mb={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <PostAddIcon className={classes.icon} />
          <Typography className={classes.title}>Add New Post</Typography>
        </Box>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => history.push("/blog/my-blog")}
        >
          View Posts
        </Button>
      </Box>
      <Box style={{}}>
        <Paper>
          <Box p={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  id="postTitle"
                  label="Post Title"
                  variant="outlined"
                  InputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  id="description"
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  InputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <ReactQuill
                  className={classes.editor}
                  style={{ borderRadius: 8 }}
                  // theme="snow"
                  value={value}
                  onChange={handleChange}
                  modules={modules}
                  formats={formats}
                  placeholder={"Content ..."}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
