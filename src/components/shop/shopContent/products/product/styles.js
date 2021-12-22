import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  name: {
    fontWeight: 700,
    fontSize: 16,
    color: "#373F50",
  },
  price: {
    fontWeight: 600,
    color: "#D23F57",
  },
  rating: {
    marginLeft: -8,
  },
}));
