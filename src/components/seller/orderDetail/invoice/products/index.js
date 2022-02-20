import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Product from "./product";
import { useStyles } from "./styles";
import { format } from "date-fns";
import { STATUSES } from "constants/index";

export default function Products({ order }) {
  const classes = useStyles();
  const defaultStatus = order?.status;
  const [status, setStatus] = useState(order?.status);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <Box>
      {defaultStatus !== status && (
        <Box style={{ width: "100%" }}>
          <Button
            style={{ width: "100%" }}
            variant="contained"
            color="secondary"
          >
            Save Changes
          </Button>
        </Box>
      )}
      <Paper>
        <Box my={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.head}
            p={1}
          >
            <Box display="flex" alignItems="center" ml={1}>
              <Box display="flex">
                <Typography className={classes.title}>Order ID: </Typography>
                <Typography>{order?.id}</Typography>
              </Box>
              <Box display="flex" pl={1}>
                <Typography className={classes.title}>Placed on: </Typography>
                <Typography>
                  {format(new Date(order?.createdAt), "MMM dd, yyyy")}
                </Typography>
              </Box>
            </Box>
            <Box>
              <FormControl
                margin="dense"
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Order Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={status}
                  onChange={handleChange}
                  label="Order Status"
                  inputProps={{ MenuProps: { disableScrollLock: true } }}
                >
                  {STATUSES?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box p={2}>
            {order?.orderItems?.map((product) => (
              <Product product={product} key={product.id} isWritten={true} />
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
