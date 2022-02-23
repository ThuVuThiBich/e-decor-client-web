import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { LoadingTable } from "components/common/LoadingTable";
import { INITIAL_PAGE, INITIAL_ROWS_PER_PAGE } from "constants/index";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getProducts, getShopProducts } from "redux/productRedux";
import { productSelector, shopSelector } from "redux/selectors";
import { EmptyRows } from "./common/EmptyData";
import TableFooter from "./footer";
import TableHeader from "./header";
import EnhancedTableRow from "./row";
import { useStyles } from "./styles";
import TableToolbar from "./toolbar";

const DEFAULT_PARAMS = {
  page: INITIAL_PAGE,
  size: INITIAL_ROWS_PER_PAGE,
  keyword: "",
  sortColumn: "",
  type: false,
};

export default function ProductsTable() {
  const history = useHistory();
  const dispatch = useDispatch();
  const limit = 5;
  const storeProduct = useSelector(productSelector);
  const { isLoading } = useSelector(productSelector);
  const storeShop = useSelector(shopSelector);
  const id = history.location.state.categoryId;
  const shopId = storeShop.currentShop.id;

  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(1);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(
      getShopProducts({
        id: shopId,
        params: { categories: id, limit, page },
      })
    );
  }, [dispatch, id, page, shopId]);
  return (
    <Paper>
      <TableToolbar />
      <TableContainer component={Paper} className={classes.root} elevation={0}>
        <Table className={classes.table}>
          <TableHeader
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {isLoading ? (
              <LoadingTable colsNumber={5} />
            ) : (
              <>
                {storeProduct.products?.map((row) => (
                  <EnhancedTableRow key={row.id} row={row} />
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {storeProduct.products.length === 0 ? (
        <></>
      ) : (
        <Box p={2} display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(storeProduct.totalProducts / limit)}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            color="primary"
          />
        </Box>
      )}
      <ToastContainer autoClose={2000} style={{ marginTop: "100px" }} />
    </Paper>
  );
}
