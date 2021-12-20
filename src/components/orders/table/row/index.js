import { IconButton, Tooltip } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import { Link } from "react-router-dom";
import * as _ from "underscore";
import { StyledTableCell, StyledTableRow } from "../common/styles";
import { useStyles } from "./styles";

export default function EnhancedTableRow(props) {
  const { row } = props;
  const classes = useStyles();

  return (
    <StyledTableRow key={row.id}>
      <StyledTableCell>{_.get(row, "id")}</StyledTableCell>
      <StyledTableCell>{_.get(row, "status")}</StyledTableCell>
      <StyledTableCell>{_.get(row, "datePurchased")}</StyledTableCell>
      <StyledTableCell>${_.get(row, "total")}</StyledTableCell>
      <StyledTableCell>
        <Tooltip title="View detail" arrow>
          <Link to={`orders/${row.id}`}>
            <IconButton>
              <ArrowForwardIcon className={classes.icon} />
            </IconButton>
          </Link>
        </Tooltip>
      </StyledTableCell>
    </StyledTableRow>
  );
}