import { Paper, Table, TableBody, TableContainer } from "@material-ui/core";
import { INITIAL_PAGE, INITIAL_ROWS_PER_PAGE } from "constants/index";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProducts } from "redux/productRedux";
import { productSelector, shopSelector } from "redux/selectors";
import { EmptyRows } from "./common/EmptyData";
import { LoadingTable } from "./common/LoadingTable";
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
const mockOrders = [
  {
    id: "1050017AS",
    stock: 50,
    price: "$5 - $15",
  },
  {
    id: "2050017AS",
    stock: 50,
    price: "$5 - $15",
  },
  {
    id: "3050017AS",
    stock: 50,
    price: "$5 - $15",
  },
  {
    id: "4050017AS",
    stock: 50,
    price: "$5 - $15",
  },
  {
    id: "5050017AS",
    stock: 50,
    price: "$5 - $15",
  },
];
export default function ProductsTable() {
  const history = useHistory();
  const dispatch = useDispatch();

  const storeProduct = useSelector(productSelector);
  const storeShop = useSelector(shopSelector);
  const id = history.location.state.categoryId;
  const shopId = storeShop.currentShop.id;
  useEffect(() => {
    dispatch(
      getProducts({ id: shopId, params: { categories: id, limit: 5, page: 1 } })
    );
  }, [dispatch, id, shopId]);

  const classes = useStyles();
  const isLoading = false;
  const [orders, setOrders] = useState(mockOrders);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [params, setParams] = useState(DEFAULT_PARAMS);
  const storeOrders = useSelector((state) => state.orders);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = orders?.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
              <LoadingTable />
            ) : (
              <>
                {storeProduct.products?.map((row) => (
                  <EnhancedTableRow
                    key={row.id}
                    row={row}
                    //   handleOpenDialog={handleOpenDialog}
                    //   handleDeleteProject={handelDeleteResource}
                    //   handleArchiveProject={callApiArchiveResource}
                  />
                ))}

                <EmptyRows isEmptyTable={orders.length === 0} />
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {orders.length === 0 ? (
        <></>
      ) : (
        <TableFooter
          page={params.page}
          rowsPerPage={5}
          pageSize={storeOrders?.pageSize | 1}
          handleChangePage={handleChangePage}
        />
      )}
    </Paper>
  );
}
