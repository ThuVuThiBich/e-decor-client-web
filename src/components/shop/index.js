import {
  Avatar,
  Box,
  Card,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CallIcon from "@material-ui/icons/Call";
import PlaceIcon from "@material-ui/icons/Place";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export default function Shop(props) {
  const { shop } = props;
  const classes = useStyles({ coverImageUrl: shop?.coverImage });

  return (
    <Card className={classes.root} style={{ minHeight: 260 }}>
      <Box className={classes.top} style={{ minHeight: 206 }}>
        <Typography className={classes.text}>{shop.name}</Typography>
        <Rating
          value={Number(shop?.avgRatings) === 0 ? 5 : Number(shop?.avgRatings)}
          precision={0.1}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          readOnly
          className={classes.rating}
        />
        <Box className={classes.info} display={"flex"}>
          <PlaceIcon className={classes.icon} />
          <Typography className={classes.detail} component={"span"}>
            {shop.ward.name}, {shop.district.name}, {shop.city.name}
          </Typography>
        </Box>
        <Box className={classes.info} display={"flex"}>
          <CallIcon className={classes.icon} />
          <Typography className={classes.detail} component={"span"}>
            {shop.phone || "N/A"}
          </Typography>
        </Box>
      </Box>
      <Box
        py={0.5}
        pr={1}
        pl={4}
        className={classes.bottom}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Avatar alt="" src={shop.owner.avatar} className={classes.avatar} />
        <Tooltip title="View detail" arrow>
          <Link to={`shops/${shop.id}`}>
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Link>
        </Tooltip>
      </Box>
    </Card>
  );
}
