import { Box, Paper, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styles";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
export default function Sidebar() {
  const classes = useStyles();

  return (
    <Paper>
      <Box pt={4} pb={2}>
        <Box display="flex" flexDirection="column">
          <NavLink
            className={classes.navLink}
            to="/seller/dashboard"
            activeClassName={classes.active}
          >
            <DashboardOutlinedIcon className={classes.icon} />
            Dashboard
          </NavLink>
          <NavLink
            className={classes.navLink}
            to="/seller/products"
            activeClassName={classes.active}
          >
            <AssignmentOutlinedIcon className={classes.icon} />
            Products
          </NavLink>
          <NavLink
            className={classes.navLink}
            to="/seller/add-product"
            activeClassName={classes.active}
          >
            <NoteAddOutlinedIcon className={classes.icon} />
            Add new product
          </NavLink>
          <NavLink
            className={classes.navLink}
            to="/seller/orders"
            activeClassName={classes.active}
          >
            <ShoppingCartOutlinedIcon className={classes.icon} />
            Orders
          </NavLink>
          <NavLink
            className={classes.navLink}
            to="/seller/settings"
            activeClassName={classes.active}
          >
            <SettingsOutlinedIcon className={classes.icon} />
            Settings
          </NavLink>
        </Box>
      </Box>
    </Paper>
  );
}
