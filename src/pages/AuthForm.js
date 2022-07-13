import { useState, useEffect } from "react";
import { Logo } from "../components";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

const initialState = {
  name: null,
  email: null,
  password: null,
  isMember: null,
  errors: {
    name: "",
    email: "",
    password: "",
    isMember: true,
  },
};
const paperStyle = {
  padding: 20,
  height: "95vh",
  width: 350,
  margin: "10px auto",
};
// const avatarStyle = { margin: '-15px auto'}
const typoStyle = { margin: "5px auto" };
const errorInfo = { color: "red" };

function AuthForm() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    let errors = values.errors;

    switch (name) {
      case "name":
        errors.name =
          value.length < 5
            ? "User name must be at least 5 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;
      default:
        break;
    }

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  if (validateForm(values.errors)) {
    console.info("Valid Form");
  } else {
    console.error("Invalid Form");
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);
  const { errors } = values;

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid sx={{ mb: -3, pb: 2 }} align="center">
          <Box sx={{ mt: "0px" }}>
            {" "}
            <Logo />
          </Box>

          <Avatar sx={{ bgcolor: "#1bbd7e", mt: "-30px" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography style={typoStyle} variant="h5" color="green">
            {values.isMember ? "Login" : "Register"}
          </Typography>
        </Grid>

        <form onSubmit={onSubmit}>
          {!values.isMember && (
            <TextField
              fullWidth
              label="Username"
              id="name"
              name="name"
              onChange={handleChange}
              defaultValue={values.name}
              sx={{ m: "8px 0px" }}
            />
          )}
          {errors.name.length > 0 && (
            <span style={errorInfo}>{errors.name}</span>
          )}

          <TextField
            fullWidth
            label="Email"
            id="email"
            name="email"
            onChange={handleChange}
            defaultValue={values.email}
            sx={{ m: "8px 0px" }}
          />
          {errors.email.length > 0 && (
            <span style={errorInfo}>{errors.email}</span>
          )}
          <TextField
            fullWidth
            label="Password"
            id="password"
            name="password"
            onChange={handleChange}
            defaultValue={values.password}
          />
          {errors.password.length > 0 && (
            <span style={errorInfo}>{errors.password}</span>
          )}
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
            alignItems="center"
          />

          <Button
            fullWidth
            sx={{
              m: "8px 0px",
              ":hover": {
                boxShadow: 6,
              },
            }}
            type="submit"
            variant="contained"
            disabled={isLoading}
            color="success"
          >
            {" "}
            {isLoading ? "loading..." : "submit"}
          </Button>

          <Button
            fullWidth
            disabled={isLoading}
            variant="contained"
            color="success"
            onClick={() =>
              dispatch(
                loginUser({ email: "testUser@test.com", password: "secret" })
              )
            }
          >
            {isLoading ? "loading..." : "demo app"}
          </Button>
          <Typography>
            {values.isMember ? "Not a member yet?" : "Already a member?"}
            <Button onClick={toggleMember}>
              {values.isMember ? "Register" : "Login"}
            </Button>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
}
export default AuthForm;