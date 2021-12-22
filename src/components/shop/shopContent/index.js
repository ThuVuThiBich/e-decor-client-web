import { Grid } from "@material-ui/core";
import Filter from "./filter";
import Products from "./products";
import { useStyles } from "./styles";
export default function ShopContent(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} md={3} className={classes.sidebar}>
        <Filter />
      </Grid>
      <Grid item xs={12} md={9} className={classes.list}>
        <Products />
      </Grid>
    </Grid>
  );
}
