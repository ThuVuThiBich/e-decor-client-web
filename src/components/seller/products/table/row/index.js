import { IconButton, Tooltip } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import * as _ from "underscore";
import { StyledTableCell, StyledTableRow } from "../common/styles";
import { useStyles } from "./styles";

export default function EnhancedTableRow(props) {
  const { row } = props;
  const classes = useStyles();
  const { categoryName } = useParams();
  const history = useHistory();

  return (
    <StyledTableRow key={row.id}>
      <StyledTableCell>{_.get(row, "id")}</StyledTableCell>
      <StyledTableCell>{_.get(row, "stock")}</StyledTableCell>
      <StyledTableCell>{_.get(row, "price")}</StyledTableCell>
      <StyledTableCell>
        <Tooltip title="View detail" arrow>
          <Link to={`${history.location.pathname}/${row.id}`}>
            <IconButton>
              <ArrowForwardIcon className={classes.icon} />
            </IconButton>
          </Link>
        </Tooltip>
      </StyledTableCell>
    </StyledTableRow>
  );
}
