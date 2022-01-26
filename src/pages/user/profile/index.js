import { Box, Button, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import { useStyles } from "./styles";

export default function Profile() {
  const classes = useStyles();

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
      <Box style={{ border: "1px solid black", height: 500 }}></Box>
    </div>
  );
}
