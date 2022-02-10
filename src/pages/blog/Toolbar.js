import {
  Box,
  Divider,
  FormControl,
  InputBase,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "redux/categoryRedux";
import { useHistory } from "react-router-dom";
import { categorySelector } from "redux/selectors";
import AppsIcon from "@material-ui/icons/Apps";
import ViewListIcon from "@material-ui/icons/ViewList";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 16,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 32,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 40,
  },
  selectInput: {
    height: 26,
    padding: "8px 15px",
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    width: "100%",
  },
  select: {
    marginLeft: 16,
    border: "1px solid rgba(0, 0, 0, 0.05)",
    borderRadius: 4,
  },
  text: { fontSize: 16, fontWeight: 600 },
  subText: { color: "#7D879C" },
  //
  searchRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderBottom: "1px solid #eeeeee",
    "&:hover": {
      borderBottomColor: "#2B3445",
    },
  },
  searchIconButton: {
    padding: 10,
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      marginTop: 40,
      width: 200,
    },
  },
};
export default function ToolbarBox() {
  const dispatch = useDispatch();
  const history = useHistory();
  const storeCategory = useSelector(categorySelector);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const handleChangeDropdown = (e) => {
    setCategoryValue(e.target.value);
    history.push("/products");
  };
  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <Paper component="form" className={classes.root}>
      <Box className={classes.searchRoot}>
        <IconButton className={classes.searchIconButton} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.searchInput}
          placeholder="Search post ..."
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
          mx={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography className={classes.subText}>Short By:</Typography>
          <FormControl variant="outlined" className={classes.select}>
            <Select
              value={categoryValue}
              name={"category"}
              displayEmpty
              MenuProps={MenuProps}
              input={<InputBase classes={{ input: classes.selectInput }} />}
              onChange={handleChangeDropdown}
            >
              <MenuItem key={"0"} value={""}>
                Relevance
              </MenuItem>
              <MenuItem key={"1"} value={"1"}>
                Price Low To High
              </MenuItem>
              <MenuItem key={"2"} value={"2"}>
                Price High To Low
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          mx={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography className={classes.subText}>View:</Typography>
          <Box ml={1}>
            <IconButton>
              <AppsIcon />
            </IconButton>
            <IconButton>
              <ViewListIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
