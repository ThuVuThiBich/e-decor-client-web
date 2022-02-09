import { makeStyles, Typography } from "@material-ui/core";
import logo from "assets/icons/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    marginLeft: -8,
  },
  text: {
    color: "white",
    fontSize: 26,
  },
}));
export default function Logo() {
  const classes = useStyles();
  return (
    <Link to="/" className={classes.wrapper}>
      <img src={logo} alt="logo" width={40} />
      <Typography variant="h6" className={classes.text} noWrap>
        E-DECOR
      </Typography>
    </Link>
  );
}
