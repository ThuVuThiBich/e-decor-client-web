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
import Product from "./product";
import { useStyles } from "./styles";
const mockProducts = [
  { id: "1", name: "name1", price: 50 },
  { id: "2", name: "name1", price: 50 },
  { id: "3", name: "name1", price: 50 },
  { id: "4", name: "name1", price: 50 },
  { id: "5", name: "name1", price: 50 },
  { id: "6", name: "name1", price: 50 },
];
export default function Products(props) {
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
    <Grid container spacing={3}>
      {mockProducts.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} lg={4}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
