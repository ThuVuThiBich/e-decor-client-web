import { Chip, IconButton, Tooltip } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import { Link } from "react-router-dom";
import { StyledTableCell, StyledTableRow } from "../common/styles";
import { useStyles } from "./styles";
import { format } from "date-fns";
export default function EnhancedTableRow(props) {
  const { row } = props;
  const classes = useStyles();
  return (
    <StyledTableRow key={row.id}>
      <StyledTableCell align="center">{row?.id}</StyledTableCell>
      <StyledTableCell align="center" className={classes.chip}>
        {row?.status === "purchased" ? (
          <Chip
            color="primary"
            size="small"
            label="Paid"
            style={{ letterSpacing: 1.2, fontSize: 12 }}
          />
        ) : (
          <Chip
            color="primary"
            size="small"
            label="Unpaid"
            style={{ letterSpacing: 1.2, fontSize: 12 }}
          />
        )}
      </StyledTableCell>
      <StyledTableCell align="center">
        {format(new Date(row?.createdAt), "MMM dd, yyyy")}
      </StyledTableCell>
      <StyledTableCell align="center">${row?.amount}</StyledTableCell>
      <StyledTableCell align="center">
        <Tooltip title="View detail" arrow>
          <Link to={`orders/${row?.id}`}>
            <IconButton>
              <ArrowForwardIcon className={classes.icon} />
            </IconButton>
          </Link>
        </Tooltip>
      </StyledTableCell>
    </StyledTableRow>
  );
}
