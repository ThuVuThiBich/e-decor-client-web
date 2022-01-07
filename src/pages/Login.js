import { Container } from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import Header from "components/auth/Header";
import LoginForm from "components/auth/LoginForm";
import { Progress } from "components/common/Progress";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userSelector } from "redux/selectors";
import { login } from "redux/userRedux";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, error } = useSelector(userSelector);

  const handleLogin = async (user) => {
    try {
      const actionResult = await dispatch(login(user));
      const currentUser = unwrapResult(actionResult);
      history.push("/");
    } catch (error) {
      console.log("Failed to login ", error.message);
      // show toast error
    }
  };
  return (
    <>
      <Header />
      <Container
        style={{
          margin: "auto",
          marginTop: 80,
          height: "calc(100vh - 80px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginForm handleLogin={handleLogin} />
      </Container>
      <Progress isOpen={isLoading} />
    </>
  );
};

export default Login;
