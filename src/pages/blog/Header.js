import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  Button,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Logo from "components/common/Logo";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid rgb(116, 116, 116)`,
    backgroundColor: "#0c0e30",
    color: "white",
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  custom: {
    borderColor: "rgb(116, 116, 116) !important",
  },
  link: {
    flexShrink: 0,
    color: "white",
    transition: "color 150ms ease-in-out",
    cursor: "pointer",
    "&:hover": { color: "#D23F57 !important", textDecoration: "none" },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={"menuId"}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ marginTop: 40 }}
      MenuListProps={{ onMouseLeave: handleMenuClose }}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link
          to={"/blog/my-blog"}
          className={classes.link}
          style={{ color: "#2B3445" }}
        >
          My blog
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          to={"/blog/my-favorite"}
          className={classes.link}
          style={{ color: "#2B3445" }}
        >
          My favorite
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        {/* <Button size="small" variant="outlined">
          Subscribe
        </Button> */}
        <Logo />

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <FormControl>
          <TextField
            id="outlined-number"
            type="text"
            variant="outlined"
            placeholder="Search Post"
            size="small"
            InputProps={{
              classes: { notchedOutline: classes.custom },
              inputProps: {
                min: 0,
                step: 10,
                style: {
                  color: "white",
                  "& .MuiOutlinedInput-root": {
                    borderColor: "red !important",
                  },
                  borderColor: "white !important",
                },
              },
              endAdornment: <SearchIcon style={{ color: "#747474" }} />,
            }}
            style={{ color: "white" }}
            onChange={(event) => {}}
          />
        </FormControl>

        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
          style={{ marginLeft: 8 }}
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.link}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      {renderMenu}
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
