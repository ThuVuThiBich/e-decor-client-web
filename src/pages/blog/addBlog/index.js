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
import PostAddIcon from "@material-ui/icons/PostAdd";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Images from "constants/image";
import RegionSelect from "react-region-select";
import objectAssign from "object-assign";

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
export default function AddBlog() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState("");
  const [files, setFiles] = useState([]);
  const [regions, setRegions] = useState([]);

  const fileRef = useRef(0);
  const handleChange = (value) => {
    setValue(value);
  };
  // console.log(fileRef.current);
  useEffect(() => {
    console.log("useEffect");
    // const tmp = files.map((file, index) => (
    //   <img key={index} src={file} alt={file} id={`preview-${index + 1}`} />
    // ));
    // setRenderImages(tmp);
  }, []);

  const detectObjects = (area) => {
    console.log(area);
    // this.setState({ savedObject: area });
    let img = document.getElementById("image");
    let xPx = img.clientWidth * area.x * 0.01;
    let yPx = img.clientHeight * area.y * 0.01;
    let widthPx = img.clientWidth * area.width * 0.01;
    let heightPx = img.clientHeight * area.height * 0.01;
    /*Перевернутая ось y, т.к по дефолту точка начала координат 
    в левом верхнем углу. Делаем его в нижнем левом. */
    // Inverted y-axis, because by default the origin point
    //  in the upper left corner. We do it in the lower left.
    // let reverseY = img.clientHeight - yPx;
    console.log("img.clientWidth", img.clientWidth);
    console.log("img.clientHeight", img.clientHeight);
    console.log(`Object coordinates:: 
    First point: [${xPx.toFixed(2)} px, ${yPx.toFixed(2)} px], 
    Second point: [${(xPx + widthPx).toFixed(2)} px, ${(yPx + heightPx).toFixed(
      2
    )} px]`);
  };
  const changeRegionData = (index, event) => {
    const region = regions[index];
    let color;
    detectObjects(regions[0]);
    color = "rgba(0, 255, 0, 0.5)";

    region.data.regionStyle = {
      background: color,
    };
    onChange([
      ...regions.slice(0, index),
      objectAssign({}, region, {
        data: objectAssign({}, region.data, { dataType: event.target.value }),
      }),
      ...regions.slice(index + 1),
    ]);
  };
  const regionStyle = {
    background: "rgba(0, 0, 255, 0.5)",
    zIndex: 99,
  };

  const onChange = (regions) => {
    console.log(regions);
    setRegions(regions);
  };
  const regionRenderer = (regionProps) => {
    if (!regionProps.isChanging) {
      return (
        <div style={{ position: "absolute", right: 0, bottom: "-1.5em" }}>
          <button
            onClick={(event) => changeRegionData(regionProps.index, event)}
            value={regionProps.data.dataType}
          >
            Add product's link
          </button>
        </div>
      );
    }
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
          <PostAddIcon className={classes.icon} />
          <Typography className={classes.title}>Add New Post</Typography>
        </Box>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => history.push("/blog/my-posts")}
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
                <Typography gutterBottom>Image</Typography>
                <Box key={"index"} my={2}>
                  <RegionSelect
                    maxRegions={1}
                    regions={regions}
                    regionStyle={regionStyle}
                    onChange={onChange}
                    regionRenderer={regionRenderer}
                    style={{ border: "1px solid black" }}
                    constraint={true}
                  >
                    <img
                      id="image"
                      alt="alt"
                      src={
                        "https://media.designcafe.com/wp-content/uploads/2021/04/23193918/study-room-decoration-ideas-for-your-home.jpg"
                      }
                    />
                  </RegionSelect>
                  {/* <img
                    src={
                      "https://media.designcafe.com/wp-content/uploads/2021/04/23193918/study-room-decoration-ideas-for-your-home.jpg"
                    }
                    alt={""}
                  /> */}
                </Box>
                <Box display="flex" alignItems="center" flexDirection="column">
                  {/* <img key={"index"} src={""} alt="" id={`preview-1`} /> */}
                  {/* {renderImages} */}
                  {files?.length > 0 &&
                    files?.map((file, index) => (
                      <Box key={index} my={2}>
                        <img
                          src={file}
                          alt={file}
                          id={`preview-${index + 1}`}
                        />
                      </Box>
                    ))}
                </Box>
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
                      // onClick={() => {
                      //   console.log(fileRef.current);
                      //   fileRef.current = fileRef.current + 1;
                      //   console.log(fileRef.current);
                      // }}
                      onChange={(e) => {
                        // console.log(fileRef.current);
                        console.log(e);
                        if (e.target.files.length > 0) {
                          var src = URL.createObjectURL(e.target.files[0]);
                          // var preview = document.getElementById(
                          //   `preview-${fileRef.current}`
                          // );
                          // preview.src = src;
                          // preview.style.display = "block";

                          console.log(src);

                          console.log(files);
                          const tmp = [...files, src];

                          setFiles(tmp);
                          console.log(files);

                          fileRef.current = fileRef.current + 1;
                        }
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
                    <Box display="flex" justifyContent="center">
                      <img src={Images.PRODUCT_VERSION} alt="" width={"10%"} />
                    </Box>
                    <Box p={2} display="flex" justifyContent={"center"}>
                      Add decoration images
                    </Box>
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
