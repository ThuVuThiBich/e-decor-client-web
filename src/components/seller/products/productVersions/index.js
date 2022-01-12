import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductVersion } from "redux/productVersionsRedux";
import { productVersionsSelector } from "redux/selectors";
import ProductVersionForm from "../productVersion";
import { useStyles } from "./styles";
import { v4 as uuidv4 } from "uuid";

const initialProductVersion = {
  id: uuidv4(),
  name: "",
  price: "",
  image: "",
  quantity: "",
};

export default function ProductVersionsForm(props) {
  const { isEdit } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [productVersions, setProductVersions] = useState([]);
  const storeProductVersions = useSelector(productVersionsSelector);
  const { productVersions } = storeProductVersions;
  return (
    <Box my={2}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography className={classes.headText}>Product Versions</Typography>
        <Button
          disabled={isEdit}
          color="primary"
          variant="outlined"
          onClick={() =>
            dispatch(
              addProductVersion({
                id: uuidv4(),
                name: "",
                price: "",
                image: "",
                quantity: "",
              })
            )
          }
        >
          <AddIcon /> Add
        </Button>
      </Box>
      <Grid container spacing={3}>
        {productVersions.length > 0 ? (
          productVersions.map((productVersion, index) => (
            <Grid item xs={12} md={12} key={index}>
              <ProductVersionForm productVersion={productVersion} />
              <Divider />
            </Grid>
          ))
        ) : (
          <Grid item xs={12} md={12}>
            <Box p={2} display="flex" justifyContent={"center"}>
              No Product Versions
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
