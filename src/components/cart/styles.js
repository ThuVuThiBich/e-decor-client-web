import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {},
  row: {
    "& .MuiTableCell": {
      root: {
        //This can be referred from Material UI API documentation.
        padding: "4px 8px",
        backgroundColor: "#eaeaea",
      },
    },
  },
}));
