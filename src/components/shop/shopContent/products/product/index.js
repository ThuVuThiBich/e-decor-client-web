import { Box, Card, IconButton, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import noImage from "assets/images/no-image.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useStyles } from "./styles";

export default function Product(props) {
  const { product } = props;
  const classes = useStyles();

  const history = useHistory();
  return (
    <Card
      onClick={() => {
        history.push(`/product/${product.id}`);
      }}
      style={{ cursor: "pointer" }}
    >
      <Box
        style={{ minHeight: 275, borderBottom: "1px solid #eee" }}
        display="flex"
        justifyContent="center"
      >
        <img src={product.image[0]?.image || noImage} alt="" />
      </Box>
      <Box display="flex" p={2} justifyContent="space-between">
        <Box>
          <Typography gutterBottom className={classes.name}>
            {product.name}
          </Typography>
          <Rating
            value={Number(product.avgRating)}
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            readOnly
          />
          <Typography className={classes.price}>
            {product.minPrice} - {product.minPrice} VND
          </Typography>
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
