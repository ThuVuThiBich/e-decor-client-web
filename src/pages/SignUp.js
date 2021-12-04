import { Container } from "@material-ui/core";
import Header from "components/auth/Header";
import SignUpForm from "components/auth/SignUpForm";

const SignUp = () => {
  return (
    <>
      <Header />
      <Container
        style={{
          margin: "auto",
          marginTop: 100,
          height: "calc(100vh - 100px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SignUpForm />
      </Container>
    </>
  );
};

export default SignUp;
