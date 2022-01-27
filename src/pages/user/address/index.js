import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./styles";
import RoomIcon from "@material-ui/icons/Room";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addressSelector } from "redux/selectors";
import { getCities, getDistricts, getWards } from "redux/addressRedux";
import AddressForm from "components/user/addressForm";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];
export default function Address() {
  const history = useHistory();
  const storeAddress = useSelector(addressSelector);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [cityId, setCityId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [wardId, setWardId] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddressDetail(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCityId(event.target.value);
  };
  const handleChangeDistrict = (event) => {
    setDistrictId(event.target.value);
  };
  const handleChangeWard = (event) => {
    setWardId(event.target.value);
  };
  //

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  useEffect(() => {
    cityId && dispatch(getDistricts(cityId));
  }, [cityId, dispatch]);

  useEffect(() => {
    districtId && dispatch(getWards(districtId));
  }, [dispatch, districtId]);

  const { id } = useParams();
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
            history.push("/address/add");
          }}
        >
          {isEdit ? "Back To Address" : "Add New Address"}
        </Button>
      </Box>
      <Box my={2} mb={4}>
        {id ? (
          <AddressForm setIsEdit={setIsEdit} />
        ) : (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Receiver's Name</TableCell>
                  <TableCell align="center">Address Detail</TableCell>
                  <TableCell align="center">Phone Number</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit">
                        <IconButton
                          aria-label="edit"
                          onClick={() => {
                            history.push("address/id");
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={() => {}}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </div>
  );
}
