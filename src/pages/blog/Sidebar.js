import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Box, Paper, Typography, Grid } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import Product from "components/shop/shopContent/products/product";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  product: {},
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Box
        mb={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mb={2}
          style={{
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 1,
            textTransform: "none",
            whiteSpace: "normal",
            color: "#2B3445",
          }}
        >
          Featured Products
        </Box>
        <Carousel
          className={classes.product}
          animation="slide"
          duration="5000"
          interval={5000}
        >
          {[1, 2, 3, 4]?.map((event, i) => (
            <Product key={i} noHover={true} />
          ))}
        </Carousel>
      </Box>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
