import {
  Box,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  storeCategories,
  storeMax,
  storeMin,
  storeRatings,
} from "redux/filterRedux";
import { filterSelector } from "redux/selectors";
import { useStyles } from "./styles";
export default function Filter(props) {
  const { allCategories } = props;
  const { categories, ratings } = useSelector(filterSelector);
  const dispatch = useDispatch();
  const classes = useStyles();
  const stars = [5, 4, 3, 2, 1];

  const [status, setStatus] = useState({
    sale: false,
    stock: false,
    featured: false,
  });

  const handleChangeRating = (event) => {
    dispatch(storeRatings(event.target.value));
  };
  const handleChangeStatus = (event) => {};
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const handleChangeCategory = (event) => {
    if (selectedCategories?.includes(+event.target.name)) {
      setSelectedCategories(
        selectedCategories?.filter((item) => +item !== +event.target.name)
      );
      dispatch(
        storeCategories(
          selectedCategories?.filter((item) => +item !== +event.target.name)
        )
      );
    } else {
      dispatch(storeCategories([...selectedCategories, +event.target.name]));
      setSelectedCategories([...selectedCategories, +event.target.name]);
    }
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
              {allCategories?.map((item, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={selectedCategories?.includes(item.id)}
                      onChange={handleChangeCategory}
                      name={item?.id?.toString()}
                    />
                  }
                  label={item?.name}
                />
              ))}
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
              InputProps={{ inputProps: { min: 0, step: 10 } }}
              onChange={(event) => {
                dispatch(storeMin(event.target.value));
              }}
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
              placeholder="100000"
              size="small"
              InputProps={{ inputProps: { min: 0, step: 10 } }}
              onChange={(event) => {
                dispatch(storeMax(event.target.value));
              }}
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
            <RadioGroup
              name="type"
              // defaultValue={""}
              value={+ratings}
              onChange={handleChangeRating}
            >
              {stars.map((item) => (
                <FormControlLabel
                  // onChange={handleChangeRating}
                  key={item}
                  value={+item}
                  control={<Radio />}
                  label={
                    <Rating
                      name="size-medium"
                      value={item}
                      readOnly
                      className={classes.rating}
                    />
                  }
                />
              ))}
            </RadioGroup>
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
