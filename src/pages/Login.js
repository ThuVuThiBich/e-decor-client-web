import { Container } from "@material-ui/core";
import Header from "components/auth/Header";
import LoginForm from "components/auth/LoginForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    // login(dispatch, { username, password });
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
        <LoginForm />
      </Container>
    </>
  );
};

export default Login;
