import { TableCell, TableHead, TableSortLabel } from "@material-ui/core";
import React from "react";
import { StyledTableRow } from "../common/styles";
import { useStyles } from "./styles";

export default function EnhancedTableHead(props) {
  const classes = useStyles();
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const headCells = [
    { id: "order", label: "Order #" },
    { id: "status", label: "Status" },
    { id: "datePurchased", label: "Date purchased" },
    { id: "total", label: "Total" },
  ];
  return (
    <TableHead>
      <StyledTableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            padding={"normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            className={classes.tableCell}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell width={"10%"} />
      </StyledTableRow>
    </TableHead>
  );
}
