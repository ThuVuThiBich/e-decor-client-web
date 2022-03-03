import { Container } from "@material-ui/core";
import Header from "components/auth/Header";
import SignUpForm from "components/auth/SignUpForm";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signUp } from "redux/userRedux";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSignUp = async (user) => {
    try {
      dispatch(signUp(user)).then((data) => {
        history.push("/verify-email");
      });
    } catch (error) {
      console.log("Failed to sign up ", error.message);
      // show toast error
    }
  };
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
        <SignUpForm handleSignUp={handleSignUp} />
      </Container>
    </>
  );
};

export default SignUp;
