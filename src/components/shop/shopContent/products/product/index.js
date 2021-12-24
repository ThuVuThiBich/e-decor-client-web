import {
  Box,
  Card,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Rating from "material-ui-rating/lib/components/Rating/Rating";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useStyles } from "./styles";
export default function Product(props) {
  const { product } = props;
  const classes = useStyles();
  const smallStyles = {
    root: {
      marginLeft: -10,
    },
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

  const history = useHistory();
  return (
    <Card
      onClick={() => {
        history.push(`/product/${product.id}`);
      }}
      style={{ cursor: "pointer" }}
    >
      <Box>
        <img
          src="https://cf.shopee.com.my/file/c15a6382557e79cb23db5f01d4c2481b"
          alt=""
        />
      </Box>
      <Box display="flex" p={2} justifyContent="space-between">
        <Box>
          <Typography className={classes.name}>{product.name}</Typography>
          <SmallRating />
          <Typography className={classes.price}>${product.price}</Typography>
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
