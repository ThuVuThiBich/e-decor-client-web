import { Box, withStyles } from "@material-ui/core";
import Rating from "material-ui-rating";
import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export default function Pick(props) {
  const { item } = props;
  const history = useHistory();
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
    <Rating
      value={5}
      max={5}
      // onChange={(i) => console.log("onChange " + i)}
      classes={classes}
      readOnly={true}
    />
  );
  const SmallRating = withStyles(smallStyles)(MyRating);
  return (
    <Box
      className={classes.root}
      onClick={() => history.push(`/product/${item.id}`)}
    >
      {/* <h2 className={classes.text}>{props.event.name}</h2>
        <p className={classes.subText}>{props.event.description}</p> */}
      <Link to="/" className={classes.image}>
        <Box>
          <img
            width={"100%"}
            src={item.image}
            height={150}
            alt=""
            display="block"
            className={classes.image}
          />
        </Box>
      </Link>
      <Box pt={2} p={1} style={{ backgroundColor: "white" }}>
        <Box>
          <h4>{props.item.name}</h4>
          <SmallRating />
          <span style={{ color: "#D23F57" }}>${item.price}</span>
        </Box>
      </Box>
    </Box>
  );
}
