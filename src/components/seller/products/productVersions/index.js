import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ProductVersionForm from "../productVersion";
import { useStyles } from "./styles";
const initialProductVersion = {};

export default function ProductVersionsForm(props) {
  const { isEdit } = props;
  const classes = useStyles();
  const [productVersions, setProductVersions] = useState([]);
  return (
    <Box my={2}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography className={classes.headText}>Product Versions</Typography>
        <Button
          disabled={isEdit}
          color="primary"
          variant="outlined"
          onClick={() =>
            setProductVersions([...productVersions, initialProductVersion])
          }
        >
          <AddIcon /> Add
        </Button>
      </Box>
      <Grid container spacing={3}>
        {productVersions.length > 0 ? (
          productVersions.map((productVersion) => (
            <Grid item xs={12} md={12}>
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
