import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Logo from "components/common/Logo";
import SearchInput from "components/common/SearchInput";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getCartItems, getRecentCartItems } from "redux/cartRedux";
import { cartSelector, userSelector } from "redux/selectors";
import { logOut } from "redux/userRedux";
import { getToken } from "utils/helpers";
import SubHeader from "../SubHeader";
import { useStyles } from "./styles";

export default function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(userSelector);

  useEffect(() => {
    currentUser && dispatch(getRecentCartItems());
  }, [currentUser, dispatch]);
  const { recentProducts } = useSelector(cartSelector);
  const cartStore = useSelector(cartSelector);
  const history = useHistory();
  const [isVisible, setIsVisible] = useState(true);

  const classes = useStyles({ isVisible });
  const [anchorEl, setAnchorEl] = useState(null);
  const [cardAnchorEl, setCardAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isCardMenuOpen = Boolean(cardAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setCardAnchorEl(null);
  };

  const handleCardMenuClose = () => {
    setCardAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCardMenuOpen = (event) => {
    setCardAnchorEl(event.currentTarget);
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logOut());
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ marginTop: 50, marginRight: 40 }}
      MenuListProps={{ onMouseLeave: handleMenuClose }}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/profile"} className={classes.link}>
          My Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/orders"} className={classes.link}>
          My Orders
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/shop/dashboard"} className={classes.link}>
          My Shop
        </Link>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <Link to={"/home"} className={classes.link}>
          Log out
        </Link>
      </MenuItem>
    </Menu>
  );

  const cardMenuId = "card-menu";
  const renderCardMenu = (
    <Menu
      anchorEl={cardAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={cardMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isCardMenuOpen}
      onClose={handleCardMenuClose}
      style={{
        marginTop: 50,
        marginRight: 40,
        cursor: "pointer",
        minWidth: 400,
      }}
      MenuListProps={{ onMouseLeave: handleCardMenuClose }}
      onClick={() => {
        history.push("/cart");
      }}
    >
      <Box p={2}>
        <Typography style={{ color: "#7d879c" }}>
          Recently Added Products
        </Typography>
      </Box>
      {recentProducts?.map((item, index) => (
        <MenuItem style={{ minWidth: 400 }} key={index}>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems="center"
            style={{ minWidth: 400 }}
          >
            <Box display={"flex"} alignItems="center">
              <img
                width={50}
                height={50}
                src={item?.productVersion?.image}
                alt=""
              />
              <Box>
                <Typography style={{ marginLeft: 8 }}>Clock</Typography>
                <Typography
                  style={{ marginLeft: 8, fontSize: 12, color: "#757575" }}
                >
                  {item?.productVersion?.name}
                </Typography>
              </Box>
            </Box>
            <Box style={{ color: "#D23F57" }}>
              {item?.productVersion?.price} VND
            </Box>
          </Box>
        </MenuItem>
      ))}

      <Box p={2} display="flex" justifyContent="center">
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            handleCardMenuClose();
            history.push("/cart");
          }}
        >
          View My Shopping Cart
        </Button>
      </Box>
    </Menu>
  );

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className={classes.grow}>
      {<SubHeader style={{ display: isVisible ? "block" : "none" }} />}
      {/* {isVisible && <SubHeader />} */}
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Logo />
          <SearchInput />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => {
                currentUser ? history.push("/cart") : history.push("/login");
              }}
              onMouseOver={handleCardMenuOpen}
              style={{ cursor: "pointer" }}
            >
              <Badge badgeContent={cartStore.quantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {getToken() ? (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                onMouseOver={handleProfileMenuOpen}
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={() => {
                  history.push("/login");
                }}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {currentUser && renderCardMenu}
    </div>
  );
}
