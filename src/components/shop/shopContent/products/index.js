import { Grid } from "@material-ui/core";
import Product from "./product";
import { useStyles } from "./styles";

export default function Products(props) {
  const classes = useStyles();
  const { products } = props;
  return (
    <Grid container spacing={3}>
      {products?.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} lg={4}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
