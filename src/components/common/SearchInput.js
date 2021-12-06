import {
  Divider,
  FormControl,
  InputBase,
  MenuItem,
  Paper,
  Select,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 40,
    display: "flex",
    alignItems: "center",
    width: 550,
    margin: theme.spacing(0, 3),
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
    backgroundColor: "rgba(0, 0, 0, 0.05)",
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
export default function SearchInput() {
  const categories = [
    "All categories",
    "Lighting",
    "Candles",
    "Stationary",
    "Storage",
    "Clocks",
    "Plants",
  ];
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("All categories");
  const handleChangeDropdown = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Searching for ..."
        inputProps={{ "aria-label": "search" }}
      />

      <Divider className={classes.divider} orientation="vertical" />
      {/* <Button
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        All categories
        <ExpandMoreIcon />
      </Button> */}
      <FormControl variant="outlined" className={classes.select}>
        <Select
          value={searchValue}
          name={"category"}
          displayEmpty
          MenuProps={MenuProps}
          input={<InputBase classes={{ input: classes.selectInput }} />}
          onChange={handleChangeDropdown}
        >
          {categories.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
}
