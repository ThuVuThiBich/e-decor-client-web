import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {},
  icon: {
    marginRight: 8,
  },
  shop: {
    fontSize: 18,
    cursor: "pointer",
    "&:hover": { color: "#D23F57", textDecoration: "underline" },
  },
}));
