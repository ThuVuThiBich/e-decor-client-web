import React from "react";
import { TableRow, Typography } from "@material-ui/core";
import { StyledTableCell } from "./styles";

const EMPTY_TABLE = "No orders yet.";

export const EmptyRows = ({ isEmptyTable, rowHeight }) => {
  return (
    <TableRow className={rowHeight}>
      <StyledTableCell colSpan={6}>
        <Typography color="primary" align="center">
          {isEmptyTable ? EMPTY_TABLE : ""}
        </Typography>
      </StyledTableCell>
    </TableRow>
  );
};
