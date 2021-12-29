import { Box } from "@material-ui/core";
import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";

export default function ProductsTable(props) {
  const classes = useStyles();

  const history = useHistory();

  return <Box>table</Box>;
}
