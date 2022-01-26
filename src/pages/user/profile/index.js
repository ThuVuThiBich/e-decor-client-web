import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import React, { useState } from "react";
import { useStyles } from "./styles";

export default function Profile() {
  const classes = useStyles();
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <PersonIcon className={classes.icon} />
          <Typography className={classes.title}>My Profile</Typography>
        </Box>
        <Button color="primary" variant="outlined">
          Edit Profile
        </Button>
      </Box>
      <Box my={4} mb={10}>
        <Grid container spacing={3}>
          <Grid item sm={6} md={4}>
            <Card>
              <Box p={2} style={{ fontSize: 16, fontWeight: "bold" }}>
                Profile Picture
              </Box>
              <Divider />
              <CardContent>
                <Box
                  display="flex"
                  my={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Avatar alt="" src={""} className={classes.avatar} />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Button color="primary" variant="contained">
                    Upload Avatar
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={8}>
            <Card>
              <Box p={2} pl={4} style={{ fontSize: 16, fontWeight: "bold" }}>
                Account Details
              </Box>
              <Divider />
              <CardContent px={4}>
                <Box p={2} px={2}>
                  <Grid container spacing={2}>
                    <Grid container item sm={12}>
                      <Grid
                        item
                        sm={3}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        Name
                      </Grid>
                      <Grid item sm={9}>
                        <FormControl
                          variant="outlined"
                          margin="dense"
                          fullWidth
                        >
                          <TextField
                            size="small"
                            required
                            id="name"
                            defaultValue="Name"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container item sm={12}>
                      <Grid
                        item
                        sm={3}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        Gender
                      </Grid>
                      <Grid item sm={9}>
                        <RadioGroup
                          row
                          aria-label="gender"
                          name="gender1"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                          />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                    <Grid container item sm={12}>
                      <Grid
                        item
                        sm={3}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        Phone Number
                      </Grid>

                      <Grid item sm={9}>
                        <FormControl
                          variant="outlined"
                          margin="dense"
                          fullWidth
                        >
                          <TextField
                            type="number"
                            size="small"
                            required
                            id="phone-number"
                            defaultValue="Phone Number"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>

                    <Grid container item sm={12}>
                      <Grid
                        item
                        sm={3}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        Email
                      </Grid>
                      <Grid item sm={9}>
                        <FormControl
                          variant="outlined"
                          margin="dense"
                          fullWidth
                        >
                          <TextField
                            type="email"
                            size="small"
                            required
                            id="name"
                            defaultValue="Email"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                <Box display="flex" alignItems="center" pl={2} mt={2}>
                  <Button color="primary" variant="contained">
                    Save Changes
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
