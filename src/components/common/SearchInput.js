import { Button, Divider, InputBase, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 40,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 550,
    margin: theme.spacing(0, 3),
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.9),
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchInput() {
  const classes = useStyles();

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
      <Button
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        All categories
      </Button>
    </Paper>
  );
}
