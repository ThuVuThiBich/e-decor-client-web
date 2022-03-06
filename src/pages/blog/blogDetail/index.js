import {
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import BallotIcon from "@material-ui/icons/Ballot";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import ScrollToTop from "components/common/ScrollToTop";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useHistory } from "react-router-dom";

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
  //
  wallInput: {
    display: "none",
  },
  wallLabel: {
    "& .MuiIconButton-root": {
      backgroundColor: "#E3E9EF",
      "&:hover": {
        backgroundColor: "rgba(15, 52, 96, 0.04)",
      },
    },
  },
}));

export const modules = {
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

export const formats = [
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
export default function BlogDetail() {
  ScrollToTop();
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState("");
  const handleChange = (value) => {
    setValue(value);
  };

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
          <Typography className={classes.title}>Post Detail</Typography>
        </Box>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => history.push("/blog/my-posts")}
        >
          View Posts List
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
              <Grid item xs={12} md={12}>
                <Typography>Image</Typography>
                <Box
                  style={{
                    border: "1px solid #ccc",
                    backgroundImage: `url(${"wallUrl"})`,
                    backgroundPositionX: `center`,
                    backgroundPositionY: `center`,
                    // backgroundSize: uploadCover ? "cover" : 150,
                    // backgroundRepeat: uploadCover ? "none" : "no-repeat",
                    borderRadius: 10,
                    overflow: "hidden",
                    height: 173,
                    position: "relative",
                  }}
                >
                  <Box style={{ position: "absolute", top: 20, right: 24 }}>
                    <input
                      accept="image/*"
                      className={classes.wallInput}
                      id="wall-file"
                      type="file"
                      onChange={(e) => {
                        // getUploadedUrl(e.target.files?.[0]).then((result) =>
                        //   setWallUrl(result)
                        // );
                      }}
                    />
                    <label
                      className={classes.wallLabel}
                      htmlFor="wall-file"
                      style={{ marginLeft: -24 }}
                    >
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Button color="primary" variant="contained">
                  Post
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
