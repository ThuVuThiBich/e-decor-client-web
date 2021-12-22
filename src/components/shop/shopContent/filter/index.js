import {
  Box,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";
import { useStyles } from "./styles";
export default function Filter(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { one, two, three, four, five } = state;
  const error = [one, two, three].filter((v) => v).length !== 2;

  const [status, setStatus] = useState({
    sale: false,
    stock: false,
    featured: false,
  });

  const handleChangeStatus = (event) => {
    setStatus({ ...state, [event.target.name]: event.target.checked });
  };

  const { sale, stock, featured } = status;
  return (
    <Card className={classes.root}>
      <Box my={1}>
        <Box>
          <Typography className={classes.headText}>Categories</Typography>
        </Box>
        <Box>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sale}
                    onChange={handleChangeStatus}
                    name="sale"
                  />
                }
                label="Candles"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={stock}
                    onChange={handleChangeStatus}
                    name="stock"
                  />
                }
                label="Plant decorations"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={featured}
                    onChange={handleChangeStatus}
                    name="featured"
                  />
                }
                label="Art and prints"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
      <Divider />

      <Box my={1}>
        <Box>
          <Typography className={classes.headText}>Styles</Typography>
        </Box>
        <Box>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sale}
                    onChange={handleChangeStatus}
                    name="sale"
                  />
                }
                label="Modern"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={stock}
                    onChange={handleChangeStatus}
                    name="stock"
                  />
                }
                label="Minimalist"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={featured}
                    onChange={handleChangeStatus}
                    name="featured"
                  />
                }
                label="Classic"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
      <Divider />

      <Box my={1}>
        <Box>
          <Typography className={classes.headText}>Price Range</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pb={1}
        >
          <FormControl fullWidth>
            <TextField
              id="outlined-number"
              type="number"
              variant="outlined"
              placeholder="0"
              size="small"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
          </FormControl>
          <Box mx={1} className={classes.headText}>
            -
          </Box>
          <FormControl fullWidth>
            <TextField
              id="outlined-number"
              type="number"
              variant="outlined"
              placeholder="100"
              size="small"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
          </FormControl>
        </Box>
      </Box>
      <Divider />

      <Box my={1}>
        <Box>
          <Typography className={classes.headText}>Status</Typography>
        </Box>
        <Box>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sale}
                    onChange={handleChangeStatus}
                    name="sale"
                  />
                }
                label="On Sale"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={stock}
                    onChange={handleChangeStatus}
                    name="stock"
                  />
                }
                label="In Stock"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={featured}
                    onChange={handleChangeStatus}
                    name="featured"
                  />
                }
                label="Featured"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
      <Divider />
      <Box my={1}>
        <Box my={1}>
          <Typography className={classes.headText}>Ratings</Typography>
        </Box>
        <Box>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={five}
                    onChange={handleChange}
                    name="five"
                  />
                }
                label={
                  <Rating
                    name="size-medium"
                    value={5}
                    readOnly
                    className={classes.rating}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={four}
                    onChange={handleChange}
                    name="four"
                  />
                }
                label={
                  <Rating
                    name="size-medium"
                    value={4}
                    readOnly
                    className={classes.rating}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={three}
                    onChange={handleChange}
                    name="three"
                  />
                }
                label={
                  <Rating
                    name="size-medium"
                    value={3}
                    readOnly
                    className={classes.rating}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox checked={two} onChange={handleChange} name="two" />
                }
                label={
                  <Rating
                    name="size-medium"
                    value={2}
                    readOnly
                    className={classes.rating}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox checked={one} onChange={handleChange} name="one" />
                }
                label={
                  <Rating
                    name="size-medium"
                    value={1}
                    readOnly
                    className={classes.rating}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
      <Divider />

      <Box my={1}>
        <Box>
          <Typography className={classes.headText}>Colors</Typography>
        </Box>
        <Box>
          <Typography className={classes.text}>Featured colors</Typography>
        </Box>
      </Box>
    </Card>
  );
}
