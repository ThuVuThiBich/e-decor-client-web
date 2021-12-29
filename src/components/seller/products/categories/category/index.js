import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";

export default function Category(props) {
  const { category } = props;

  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });

  const history = useHistory();
  return (
    <Card
      className={classes.root}
      classes={{ root: state.raised ? classes.cardHovered : "" }}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      raised={state.raised}
      zdepth={state.shadow}
      onClick={() => history.push(`/shop/products/${category.label}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/33I74NXII4I6RBCJD7ZGGYE2GE.jpg&w=916"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Candles
          </Typography>
          <Typography variant="body1" color="textSecondary">
            20 Products
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
