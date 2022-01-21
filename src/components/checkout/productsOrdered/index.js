import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import ShopOrdered from "./shopOrdered";
import { useStyles } from "./styles";

export default function ProductsOrdered() {
  const classes = useStyles();

  return (
    <Box>
      <Paper className={classes.root}>
        <Box p={2} mb={2}>
          <Box
            display="flex"
            alignItems="center"
            my={1}
            justifyContent="space-between"
          >
            <Grid container alignItems="center" spacing={4}>
              <Grid item xs={12} md={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ color: "rgb(210, 63, 87)" }}
                >
                  <Box className={classes.icon}>
                    <svg
                      width="24px"
                      height="24px"
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8cqusc"
                      focusable="false"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M7.40692 11.3465L20.5779 4.304L16.0004 2L2.41992 8.836L7.40692 11.3465Z"></path>
                      <path d="M24.5773 6.3175L11.4062 13.36L15.9998 15.6725L29.5803 8.83601L24.5773 6.3175Z"></path>
                      <path d="M15.625 16.3275L11 13.9995V19.1145L9 17.101H7V11.986L2 9.46948V23.1415L15.625 30V16.3275Z"></path>
                      <path d="M16.375 16.3275V30L30 23.1415V9.46948L16.375 16.3275Z"></path>
                    </svg>
                  </Box>
                  <Typography className={classes.text} style={{ fontSize: 20 }}>
                    Products Ordered
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box
                  style={{ color: "#ccc" }}
                  display="flex"
                  justifyContent={"space-between"}
                >
                  <Grid item container spacing={4}>
                    <Grid item xs={12} md={3}>
                      Version
                    </Grid>
                    <Grid item xs={12} md={3}>
                      Unit Price
                    </Grid>
                    <Grid item xs={12} md={3}>
                      Amount
                    </Grid>
                    <Grid item xs={12} md={3}>
                      Item Subtotal
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
      <Grid container>
        <Grid item xs={12} md={12}>
          <ShopOrdered />
        </Grid>
      </Grid>
    </Box>
  );
}