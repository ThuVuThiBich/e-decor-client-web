import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import PlaceIcon from "@material-ui/icons/Place";
import Rating from "material-ui-rating/lib/components/Rating/Rating";
import Products from "./products";
import Filter from "./filter";
import { useStyles } from "./styles";
export default function ShopContent(props) {
  const classes = useStyles();
  const smallStyles = {
    iconButton: {
      width: 32,
      height: 32,
      padding: 16,
    },
    icon: {
      width: 16,
      height: 16,
    },
  };
  const MyRating = ({ classes }) => (
    <Rating value={3} max={5} classes={classes} readOnly={true} />
  );
  const SmallRating = withStyles(smallStyles)(MyRating);
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} md={3} className={classes.sidebar}>
        <Filter />
      </Grid>
      <Grid item xs={12} md={9} className={classes.list}>
        <Products />
      </Grid>
    </Grid>
  );
}
