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
      <LoginForm />
    </>
  );
};

export default Login;
