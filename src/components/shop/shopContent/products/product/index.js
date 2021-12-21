import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import PlaceIcon from "@material-ui/icons/Place";
import Rating from "material-ui-rating/lib/components/Rating/Rating";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useStyles } from "./styles";
export default function Product(props) {
  const { product } = props;
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
    <Card>
      <Box>
        <img
          src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F14.MVMTMWatchBlack.png&w=1920&q=75"
          alt=""
        />
      </Box>
      <Box display="flex" p={2} justifyContent="space-between">
        <Box>
          <Typography className={classes.text}>{product.name}</Typography>
          <SmallRating />
          <Typography className={classes.text}>${product.price}</Typography>
        </Box>
        <Box display="flex" alignItems="flex-end">
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
