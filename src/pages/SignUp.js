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
      // dispatch(signUp(user));
      fetch(`https://8686-14-254-247-140.ngrok.io/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => console.log("here"));
      // history.push("/login");
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
