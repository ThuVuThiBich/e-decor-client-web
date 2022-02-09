import { Box, Container, CssBaseline, makeStyles } from "@material-ui/core";
import Footer from "components/layout/Footer";
import React from "react";
import { sections } from "../Blog";
import Header from "../Header";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));
export default function MyBlogs() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Box
        style={{
          backgroundColor: "#0c0e30",
          zIndex: 1000,
          position: "fixed",
          width: "100%",
        }}
        mb={10}
      >
        <Container maxWidth="lg">
          <Header title="E-Decor Blog" sections={sections} />
        </Container>
      </Box>
      <Container maxWidth="lg" style={{ paddingTop: 150 }}>
        <main>here</main>
      </Container>
      <Footer isBlog={true} />
    </>
  );
}
