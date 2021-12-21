import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import PlaceIcon from "@material-ui/icons/Place";
import Rating from "material-ui-rating/lib/components/Rating/Rating";
import { useStyles } from "./styles";
export default function Filter(props) {
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
    <Card className={classes.root}>
      <Box>
        <Box>
          <Typography className={classes.text}>Categories</Typography>
        </Box>
        <Box>
          <Typography className={classes.text}>Category 1</Typography>
          <Typography className={classes.text}>Category 1</Typography>
          <Typography className={classes.text}>Category 1</Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography className={classes.text}>Price Range</Typography>
        </Box>
        <Box>
          <Typography className={classes.text}>price</Typography>
          <Typography className={classes.text}>price</Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography className={classes.text}>Brands</Typography>
        </Box>
        <Box>
          <Typography className={classes.text}>Brand 1</Typography>
          <Typography className={classes.text}>Brand 2</Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography className={classes.text}>Status</Typography>
        </Box>
        <Box>
          <Typography className={classes.text}>On Sale</Typography>
          <Typography className={classes.text}>In Stock</Typography>
          <Typography className={classes.text}>Featured</Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography className={classes.text}>Ratings</Typography>
        </Box>
        <Box>
          <Typography className={classes.text}>star</Typography>
          <Typography className={classes.text}>star</Typography>
          <Typography className={classes.text}>star</Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography className={classes.text}>Colors</Typography>
        </Box>
        <Box>
          <Typography className={classes.text}>select color</Typography>
        </Box>
      </Box>
    </Card>
  );
}
