import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  name: {
    fontWeight: 700,
    fontSize: 16,
    minHeight: 48,
    color: "#373F50",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkitBoxOrient": "vertical",
    "-webkitLineClamp": 2,
  },
  price: {
    fontWeight: 600,
    color: "#D23F57",
  },
  rating: {
    marginLeft: -8,
  },
}));
