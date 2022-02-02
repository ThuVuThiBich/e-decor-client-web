import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  addAddress,
  getCities,
  getDistricts,
  getWards,
  updateAddress,
} from "redux/addressRedux";
import { addressSelector } from "redux/selectors";
import { useStyles } from "./styles";

export default function AddressForm(props) {
  const { id } = useParams();
  const { addresses } = useSelector(addressSelector);

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    detail: "",
    cityId: "",
    districtId: "",
    wardId: "",
  });

  const storeAddress = useSelector(addressSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [detail, setDetail] = useState(address?.detail);
  const [cityId, setCityId] = useState(address?.cityId);
  const [districtId, setDistrictId] = useState(address?.districtId);
  const [wardId, setWardId] = useState(address?.wardId);

  useEffect(() => {
    id !== "add" &&
      setAddress(addresses?.filter((address) => +address.id === +id)?.[0]);
  }, [addresses, id]);
  useEffect(() => {
    if (id !== "add") {
      setDetail(address?.detail);
      setCityId(address?.cityId);
      setDistrictId(address?.districtId);
      setWardId(address?.wardId);
    }
  }, [
    address?.cityId,
    address?.detail,
    address?.districtId,
    address?.wardId,
    id,
  ]);
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setDetail(event.target.value);
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

  const handleSubmit = () => {
    const address = { detail, cityId, districtId, wardId };
    if (id === "add") {
      dispatch(addAddress(address));
    } else {
      dispatch(updateAddress({ id, address }));
    }
    history.push("/address");
  };
  return (
    <Paper>
      <Box p={4}>
        <Box mb={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl variant="outlined" margin="dense" fullWidth>
                <InputLabel htmlFor="component-outlined">
                  Deliver's Name
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={name}
                  onChange={handleChangeName}
                  label="Shop Name"
                  placeholder="Shop Name"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                variant="outlined"
                margin="dense"
                fullWidth
                className={classes.phone}
              >
                <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={phone}
                  onChange={handleChangePhone}
                  label="Phone"
                  placeholder="Phone"
                  inputProps={{ type: "text" }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl variant="outlined" margin="dense" fullWidth>
                <InputLabel htmlFor="component-outlined">Address</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={detail}
                  onChange={handleChangeAddress}
                  label="Address"
                  placeholder="Address"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
                margin="dense"
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel id="select-outlined-label">Select City</InputLabel>
                <Select
                  labelId="select-outlined-label"
                  id="select-outlined"
                  value={cityId}
                  onChange={handleChangeCity}
                  label="Select City"
                  className={classes.input}
                  defaultValue=""
                  MenuProps={{
                    classes: { paper: classes.menuPaper },
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  {storeAddress.cities?.map((city) => (
                    <MenuItem key={city.id} value={city.id}>
                      {city.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
                margin="dense"
                variant="outlined"
                className={classes.formControl}
                disabled={!cityId}
              >
                <InputLabel id="select-outlined-label">
                  Select District
                </InputLabel>
                <Select
                  labelId="select-outlined-label"
                  id="select-outlined"
                  value={districtId}
                  onChange={handleChangeDistrict}
                  label="Select District"
                  className={classes.input}
                  defaultValue=""
                  MenuProps={{
                    classes: { paper: classes.menuPaper },

                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  {storeAddress.districts?.map((district) => (
                    <MenuItem key={district.id} value={district.id}>
                      {district.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
                margin="dense"
                variant="outlined"
                className={classes.formControl}
                disabled={!districtId}
              >
                <InputLabel id="select-outlined-label">Select Ward</InputLabel>
                <Select
                  labelId="select-outlined-label"
                  id="select-outlined"
                  value={wardId}
                  onChange={handleChangeWard}
                  label="Select Ward"
                  className={classes.input}
                  defaultValue=""
                  MenuProps={{
                    classes: { paper: classes.menuPaper },

                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  {storeAddress.wards?.map((ward) => (
                    <MenuItem key={ward.id} value={ward.id}>
                      {ward.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            {id === "add" ? "Add New" : "Save Changes"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}