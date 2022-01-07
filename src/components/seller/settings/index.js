import {
  Avatar,
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
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCities, getDistricts, getWards, reset } from "redux/addressRedux";
import { addressSelector } from "redux/selectors";
import { useStyles } from "./styles";
import defaultWall from "../../../assets/images/wall.svg";
import defaultAva from "../../../assets/images/profile_pic.svg";
import { useState } from "react";
import axios from "axios";

export default function ShopInfo() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleChangeCity = (event) => {
    dispatch(reset());
    setCity(event.target.value);
  };
  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value);
  };
  const handleChangeWard = (event) => {
    setWard(event.target.value);
  };

  const storeAddress = useSelector(addressSelector);
  console.log(storeAddress);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("getCities");
    dispatch(getCities());
  }, [dispatch]);

  useEffect(() => {
    console.log("getDistricts");
    city && dispatch(getDistricts(city));
  }, [city, dispatch]);

  useEffect(() => {
    console.log("getWards");
    district && dispatch(getWards(district));
  }, [dispatch, district]);

  // const [file, setFile] = useState(null);

  const [avaUrl, setAvaUrl] = useState(defaultAva);
  const [wallUrl, setWallUrl] = useState(defaultWall);

  // upload
  const getUploadedUrl = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/e-decor/image/upload",
        data
      );
      const { url } = uploadRes.data;
      console.log(url);
      return url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper>
      <Box p={3}>
        <Box
          mb={3}
          style={{
            border: "1px solid #ccc",
            background: `url(${wallUrl}) center center / cover`,
            backgroundSize: 150,
            backgroundRepeat: "no-repeat",
            borderRadius: 10,
            overflow: "hidden",
            height: 173,
            position: "relative",
          }}
        >
          <Box
            display="flex"
            alignItems="flex-end"
            style={{ position: "absolute", bottom: 20, left: 24 }}
          >
            <Avatar alt="" src={avaUrl} className={classes.avatar} />
            <Box>
              <input
                accept="image/*"
                className={classes.uploadInput}
                id="ava-file"
                type="file"
                onChange={(e) => {
                  getUploadedUrl(e.target.files[0]).then((result) =>
                    setAvaUrl(result)
                  );
                }}
              />
              <label
                className={classes.label}
                htmlFor="ava-file"
                style={{ marginLeft: -24 }}
              >
                <IconButton
                  size="small"
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Box>
          </Box>
          <Box style={{ position: "absolute", top: 20, right: 24 }}>
            <input
              accept="image/*"
              className={classes.wallInput}
              id="wall-file"
              type="file"
              onChange={(e) => {
                getUploadedUrl(e.target.files[0]).then((result) =>
                  setWallUrl(result)
                );
              }}
            />
            <label
              className={classes.wallLabel}
              htmlFor="wall-file"
              style={{ marginLeft: -24 }}
            >
              <IconButton
                size="small"
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Box>
        </Box>
        <Box>
          <Box mb={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <FormControl variant="outlined" margin="dense" fullWidth>
                  <InputLabel htmlFor="component-outlined">
                    Shop Name
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
                    inputProps={{ type: "number" }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl variant="outlined" margin="dense" fullWidth>
                  <InputLabel htmlFor="component-outlined">Address</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    value={address}
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
                  <InputLabel id="select-outlined-label">
                    Select City
                  </InputLabel>
                  <Select
                    labelId="select-outlined-label"
                    id="select-outlined"
                    value={city}
                    onChange={handleChangeCity}
                    label="Select City"
                    className={classes.input}
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
                  disabled={!city}
                >
                  <InputLabel id="select-outlined-label">
                    Select District
                  </InputLabel>
                  <Select
                    labelId="select-outlined-label"
                    id="select-outlined"
                    value={district}
                    onChange={handleChangeDistrict}
                    label="Select District"
                    className={classes.input}
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
                  disabled={!district}
                >
                  <InputLabel id="select-outlined-label">
                    Select Ward
                  </InputLabel>
                  <Select
                    labelId="select-outlined-label"
                    id="select-outlined"
                    value={ward}
                    onChange={handleChangeWard}
                    label="Select Ward"
                    className={classes.input}
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
            <Button
              color="primary"
              variant="contained"
              // onClick={handleCreate}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
