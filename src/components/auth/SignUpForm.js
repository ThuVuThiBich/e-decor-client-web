import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Paper,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    borderRadius: 8,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
  },
  divider: {
    width: 170,
    padding: theme.spacing(0, 1),
  },
  dividerText: {
    color: "#9396b9",
    padding: theme.spacing(0, 1),
  },
  loginBtn: {
    color: "white",
    margin: theme.spacing(1, 0),
    backgroundColor: "#D23F57",
    "&:hover": {
      backgroundColor: "#db2b48",
    },
  },
  fbBtn: {
    color: "white",
    backgroundColor: "rgb(59, 89, 152)",
    margin: theme.spacing(1, 0),
    "&:hover": {
      backgroundColor: "rgb(39 75 151)",
    },
  },
  ggBtn: {
    color: "white",
    backgroundColor: "rgb(66, 133, 244)",
    margin: theme.spacing(1, 0),
    "&:hover": {
      backgroundColor: "rgb(38 115 243)",
    },
  },

  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },

  link: {
    marginLeft: 8,
    fontWeight: 500,
    color: "#2B3445",
    borderBottom: "1px solid #2B3445",
  },
}));

const SignUpForm = (props) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [check, setCheck] = useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChangeCheck = () => {
    setCheck(!check);
  };
  const handleFormSubmit = () => {};
  return (
    <Paper className={classes.root} elevation={2}>
      <Box px={8} py={4}>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <Box mb={2} display="flex" alignItems="center" flexDirection="column">
            <Typography variant="h5" className={classes.welcome}>
              Create Your Account
            </Typography>
            <Typography>Please fill all fields to continue</Typography>
          </Box>

          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-full-name">Full Name *</InputLabel>
            <OutlinedInput
              id="outlined-full-name"
              type={"text"}
              value={values.fullName}
              onChange={handleChange("fullName")}
              labelWidth={60}
            />
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-email">Email *</InputLabel>
            <OutlinedInput
              id="outlined-email"
              type={"text"}
              value={values.email}
              onChange={handleChange("email")}
              labelWidth={60}
            />
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-password">Password *</InputLabel>
            <OutlinedInput
              id="outlined-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={80}
            />
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-retype-password">
              Retype Password *
            </InputLabel>
            <OutlinedInput
              id="outlined-retype-password"
              type={values.showPassword ? "text" : "password"}
              value={values.retypePassword}
              onChange={handleChange("retype-password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={80}
            />
          </FormControl>
          <Box style={{ width: "100%" }}>
            <FormControlLabel
              fullWidth
              control={
                <Checkbox
                  checked={check}
                  onChange={handleChangeCheck}
                  name="check"
                  color="primary"
                />
              }
              label="By signing up, you agree to Terms & Condition"
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            className={classes.loginBtn}
          >
            Create Account
          </Button>

          <Box mt={2}>
            Already have an account?
            <Link to="/login" className={classes.link}>
              Login
            </Link>
          </Box>
        </form>
      </Box>
      <Box>
        <Box>
          <Box
            py={3}
            display="flex"
            justifyContent="center"
            style={{ backgroundColor: "#F3F5F9" }}
          >
            Forgot your password?
            <Link to="/reset-password" className={classes.link}>
              Reset It
            </Link>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default SignUpForm;