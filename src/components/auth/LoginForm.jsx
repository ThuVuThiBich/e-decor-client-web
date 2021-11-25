import {
  Box,
  Button,
  CircularProgress,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { backgroundColor, secondaryColor } from "assets/css/Common";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    border: `1px solid ${secondaryColor}`,
    borderRadius: 16,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    width: "50%",
    padding: theme.spacing(0, 1),
  },
  dividerText: {
    color: secondaryColor,
    padding: theme.spacing(0, 1),
  },
  fbBtn: {
    backgroundColor: "1px solid rgb(59, 89, 152)",
    marginBottom: theme.spacing(1),
  },
  ggBtn: {
    backgroundColor: "1px solid rgb(66, 133, 244)",
    marginBottom: theme.spacing(1),
  },
}));

const FBBtn = styled(Button)`
  background-color: red;
`;
const LoginForm = (props) => {
  const classes = useStyles();

  //   const isLogging = useAppSelector((state) => state.auth.logging);

  const {
    handleInputChange,
    handleFormSubmit,
    handleLoginWithGG,
    errors,
    setInvalidInputs,
    isLoading = false,
    setLoginGG,
    isLoginGG = false,
  } = props;

  const handleClick = (renderProps) => {
    setInvalidInputs({});
    setLoginGG(true);
    renderProps.onClick();
  };
  return (
    <Box className={classes.root} px={8} py={4}>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <Typography variant="h5">Welcome To E-Decor</Typography>
        <Typography>Log in with email & password</Typography>

        <TextField
          size="small"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="off"
          onChange={handleInputChange}
          // {...(errors.email && { error: true, helperText: errors.email })}
        />
        <TextField
          size="small"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          autoComplete="off"
          onChange={handleInputChange}
          // {...(errors.password && {
          //   error: true,
          //   helperText: errors.password,
          // })}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          // disabled={isLogging}
        >
          {/* {isLogging && <CircularProgress size={24} color="primary" />} &nbsp; */}
          Login
        </Button>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Divider className={classes.divider} />
          <Typography
            component="span"
            className={classes.dividerText}
            gutterBottom
          >
            or
          </Typography>
          <Divider className={classes.divider} />
        </Box>

        <FBBtn variant="contained" size="large" type="submit" fullWidth>
          {/* {isLogging && <CircularProgress size={24} color="primary" />} &nbsp; */}
          Login with Facebook
        </FBBtn>
        <Button
          variant="contained"
          size="large"
          type="submit"
          fullWidth
          className={classes.ggBtn}
        >
          {/* {isLogging && <CircularProgress size={24} color="primary" />} &nbsp; */}
          Login with Google
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
