import {
  Box,
  Container,
  Divider,
  FormControl,
  Input,
  MenuItem,
  Select,
  Typography,
  InputBase,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { useStyles } from "./styles";
import LanguageIcon from "@material-ui/icons/Language";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export default function SubHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.box}>
          <Link className={classes.link} to="/shops">
            All Shops
          </Link>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <Link className={classes.link} to="/shop/login">
            Join as Seller
          </Link>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <Link className={classes.link} to="/blog">
            Blog
          </Link>
        </Box>
        <Box className={classes.box}>
          <Box className={classes.help}>
            <HelpOutlineIcon className={classes.helpIcon} />
            <Link className={classes.link} to="/help">
              Help
            </Link>
          </Box>
          <FormControl variant="outlined" className={classes.languages}>
            <Select
              value={"EN"}
              name={"size"}
              displayEmpty
              input={
                <InputBase
                  startAdornment={<LanguageIcon className={classes.icon} />}
                  classes={{ input: classes.input }}
                  disableUnderline={true}
                />
              }
            >
              {["EN", "VI"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Link className={classes.link} to="/sign-up">
            Sign Up
          </Link>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <Link className={classes.link} to="/login">
            Login
          </Link>
        </Box>
      </Container>
      SubHeader
    </div>
  );
}
