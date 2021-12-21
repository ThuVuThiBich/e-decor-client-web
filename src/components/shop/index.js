import {
  Avatar,
  Box,
  Card,
  IconButton,
  Tooltip,
  Typography,
  withStyles,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CallIcon from "@material-ui/icons/Call";
import PlaceIcon from "@material-ui/icons/Place";
import Rating from "material-ui-rating/lib/components/Rating/Rating";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export default function Shop(props) {
  const { shop } = props;
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
      <Box className={classes.top}>
        <Typography className={classes.text}>Scarlett Beauty</Typography>
        <SmallRating />
        <Box className={classes.info} display={"flex"}>
          <PlaceIcon className={classes.icon} />
          <Typography className={classes.detail} component={"span"}>
            845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark
          </Typography>
        </Box>
        <Box className={classes.info} display={"flex"}>
          <CallIcon className={classes.icon} />
          <Typography className={classes.detail} component={"span"}>
            (613) 343-9004
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
        <Avatar alt="" src="" className={classes.avatar} />
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
