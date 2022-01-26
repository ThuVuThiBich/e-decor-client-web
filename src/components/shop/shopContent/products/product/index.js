import { Box, Card, IconButton, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import noImage from "assets/images/no-image.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getPrice } from "utils/helpers";
import { useStyles } from "./styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { createWishlist, deleteWishlist } from "redux/wishlistRedux";

export default function Product(props) {
  const { product } = props;
  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });

  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Card
      className={classes.root}
      classes={{ root: state.raised ? classes.cardHovered : "" }}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      raised={state.raised}
      zdepth={state.shadow}
      style={{ cursor: "pointer" }}
    >
      <Box
        style={{
          minHeight: 275,
          maxHeight: 275,
          borderBottom: "1px solid #eee",
        }}
        display="flex"
        justifyContent="center"
        onClick={() => {
          history.push(`/product/${product?.id}`);
        }}
      >
        <img src={product?.images[0]?.image || noImage} alt="" />
      </Box>
      <Box display="flex" p={2} flexDirection="column">
        <Typography gutterBottom className={classes.name} component="div">
          {product?.name}
        </Typography>
        <Typography className={classes.price}>
          {getPrice(product?.minPrice, product?.maxPrice)} VND
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Rating
            value={
              Number(product?.avgRatings) === 0
                ? 5
                : Number(product?.avgRatings)
            }
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            readOnly
          />
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              product?.inWishlist
                ? dispatch(deleteWishlist(product?.wishlistId))
                : dispatch(createWishlist({ productId: product?.id }));
            }}
          >
            {product?.inWishlist ? (
              <FavoriteIcon style={{ color: "#D23F57" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
