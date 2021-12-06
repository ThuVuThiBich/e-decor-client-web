import { Container, Grid } from "@material-ui/core";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import { withAuthLayout } from "hocs";
import React from "react";

const withUser = (Component) => (props) => {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: 150 }}>
        <Grid container>
          <Grid item md={2} style={{ border: "1px solid black" }}></Grid>
          <Grid item md={10} style={{ border: "1px solid black" }}>
            <Component />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
export default withUser;
