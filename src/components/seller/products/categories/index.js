import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Category from "./category";
import { useStyles } from "./styles";

const categoriesMock = [
  { label: "lighting", name: "Lighting" },
  { label: "candles", name: "Candles" },
  { label: "stationary", name: "Stationary" },
  { label: "storage", name: "Storage" },
  { label: "clocks", name: "Clocks" },
  { label: "plants", name: "Plants" },
];
export default function Categories() {
  const classes = useStyles();
  const [categories, setCategories] = useState(categoriesMock);
  return (
    <Paper>
      <Box p={4} my={2}>
        <Box pb={2}>
          <Typography className={classes.headText}>All Categories</Typography>
        </Box>

        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} md={4} key={category.name}>
              <Category category={category} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}
