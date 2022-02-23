import { Box, IconButton, Tooltip } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import * as _ from "underscore";
import { getPrice } from "utils/helpers";
import { StyledTableCell, StyledTableRow } from "../common/styles";
import { useStyles } from "./styles";
import { useConfirm } from "material-ui-confirm";
import { deleteProduct } from "redux/productRedux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function EnhancedTableRow(props) {
  const { row } = props;
  const classes = useStyles();
  const { categoryName } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const confirm = useConfirm();

  const handleDelete = (item) => {
    confirm({ description: `This will permanently delete this product.` })
      .then(() => {
        dispatch(deleteProduct(item));
      })
      .catch(() => console.log("Deletion cancelled."));
  };

  return (
    <StyledTableRow key={row.id}>
      <StyledTableCell style={{ paddingLeft: 40 }}>
        {_.get(row, "id")}
      </StyledTableCell>
      <StyledTableCell>{_.get(row, "name")}</StyledTableCell>
      <StyledTableCell style={{ paddingLeft: 30 }}>
        {_.get(row, "totalVersions")}
      </StyledTableCell>
      <StyledTableCell>
        {getPrice(_.get(row, "minPrice"), _.get(row, "maxPrice"))} $
      </StyledTableCell>
      <StyledTableCell>
        <Box display="flex">
          <Tooltip title="View detail" arrow>
            <Link to={`${history.location.pathname}/${row.id}`}>
              <IconButton>
                <ArrowForwardIcon className={classes.icon} />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Delete" arrow>
            <IconButton
              onClick={() => {
                handleDelete(row.id);
              }}
            >
              <DeleteIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
        </Box>
      </StyledTableCell>
    </StyledTableRow>
  );
}
