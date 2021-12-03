import { Container } from "@material-ui/core";
import Header from "components/auth/Header";
import React from "react";

const withoutAuth = (Component) => (props) => {
  return (
    <>
      <Header />
      <Container
        style={{
          margin: "auto",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Component {...props} />
      </Container>
    </>
  );
};

export default withoutAuth;
