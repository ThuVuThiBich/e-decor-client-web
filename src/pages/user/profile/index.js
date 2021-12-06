import { Box, Button, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";

export default function Profile() {
  return (
    <div>
      <Box style={{ border: "1px solid black" }}>
        <Typography>
          <PersonIcon />
          My Profile
        </Typography>
        <Button color="primary">Edit Profile</Button>
      </Box>
      <Box style={{ border: "1px solid black", height: 500 }}></Box>
    </div>
  );
}
