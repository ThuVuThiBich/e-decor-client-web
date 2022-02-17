import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import RoomIcon from "@material-ui/icons/Room";
import { LoadingTable } from "components/common/LoadingTable";
import AddressForm from "components/user/addressForm";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteAddress, getAddresses } from "redux/addressRedux";
import { addressSelector } from "redux/selectors";
import { useStyles } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAddressText } from "utils/helpers";

export default function Address() {
  const history = useHistory();
  const { addresses, isUpdating, isLoading } = useSelector(addressSelector);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();
  //

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch, isUpdating]);

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Box display="flex" alignItems="center">
          <RoomIcon className={classes.icon} />
          <Typography className={classes.title}>My Addresses</Typography>
        </Box>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            id ? history.push("/address") : history.push("/address/add");
          }}
        >
          {id ? "Back To Address" : "Add New Address"}
        </Button>
      </Box>
      <Box my={2} mb={4}>
        {id ? (
          <AddressForm />
        ) : (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Receiver's Name</TableCell>
                  <TableCell>Address Detail</TableCell>
                  <TableCell align="center">Phone Number</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading ? (
                  <LoadingTable />
                ) : (
                  addresses.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {row?.name ? row?.name : "Vu Thu"}
                      </TableCell>
                      <TableCell>
                        {getAddressText(row)}
                      </TableCell>
                      <TableCell align="center">
                        {row?.phone ? row?.phone : "0123456789"}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Edit">
                          <IconButton
                            aria-label="edit"
                            onClick={() => {
                              history.push(`address/${row?.id}`);
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            aria-label="delete"
                            onClick={() => {
                              dispatch(deleteAddress(row?.id));
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <ToastContainer autoClose={2000} style={{ marginTop: "100px" }} />
    </div>
  );
}
