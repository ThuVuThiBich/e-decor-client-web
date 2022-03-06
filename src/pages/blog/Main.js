import { Box, FormControl, MenuItem, Select } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { blogSelector } from "redux/selectors";
import PostCard from "./post";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { title } = props;
  const [type, setType] = useState("Newest");
  const { posts } = useSelector(blogSelector);
  return (
    <Grid item xs={12} md={8}>
      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="h6"
          gutterBottom
          style={{
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 1,
            textTransform: "none",
            whiteSpace: "normal",
            color: "#2B3445",
          }}
        >
          {title}
        </Typography>
        <FormControl
          // style={{ width: "25%" }}
          // margin="dense"

          variant="outlined"
          className={classes.formControl}
          size="small"
        >
          {/* <InputLabel id="select-outlined-label">Select City</InputLabel> */}
          <Select
            labelId="select-outlined-label"
            id="select-outlined"
            value={type}
            // onChange={handleChangeCity}
            // label="Select City"
            className={classes.input}
            defaultValue=""
            MenuProps={{
              disableScrollLock: true,
              classes: { paper: classes.menuPaper },
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
            {["Newest", "Popular", "Oldest"]?.map((city, index) => (
              <MenuItem key={index} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Divider />
      {posts?.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
