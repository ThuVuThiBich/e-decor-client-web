import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  headText: {
    fontWeight: 500,
  },
  subText: {
    color: "#7D879C",
  },
  rating: {
    "& .MuiRating-root": { marginBottom: 8, marginLeft: -4 },
    "& .MuiSvgIcon-root": { width: 32, height: 32 },
    "& .MuiRating-decimal": { padding: 4 },
    // "& .MuiRating-iconEmpty": { color: "rgb(255 255 255 / 72%) !important" },
  },
});
