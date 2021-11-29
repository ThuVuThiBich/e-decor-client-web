import { makeStyles, Typography } from "@material-ui/core";
import logo from "assets/icons/logo.png";
import React from "react";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 26,
  },
}));
export default function Logo() {
  const classes = useStyles();
  return (
    <a href="/" className={classes.wrapper}>
      <img src={logo} alt="logo" width={40} />
      <Typography variant="h6" className={classes.text} noWrap>
        E-DECOR
      </Typography>
    </a>
  );
}
