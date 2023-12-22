import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import authService from "../services/authServices";
import { useDispatch } from "react-redux";
import accountsSlices from "../redux/accountsSlice";
import { GoogleLogin } from "react-google-login";
import { touchRippleClasses } from "@mui/material";
import { gapi } from "gapi-script";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const CLIENT_ID =
    "673103240557-13qqv9hdlmrt8ldiqvaviep1had1vftb.apps.googleusercontent.com";
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const isSignedIn = await authService.signIn(data);
    if (isSignedIn) {
      // console.log(isSignedIn);
      dispatch(accountsSlices.actions.setAccount(isSignedIn));
      // localStorage.setItem("account", JSON.stringify(isSignedIn));
      navigate("/dashboard");
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  useEffect(() => {
    console.log(CLIENT_ID);
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: "https://www.googleapis.com/auth/userinfo.profile",
      });
    }
    gapi.load("client:auth2", start);
  });

  const onSuccess = async (res) => {
    console.log(res.profileObj);
    const data = {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
    };
    const isSignedIn = await authService.signIn(data);
    if (isSignedIn) {
      // console.log(isSignedIn);
      dispatch(accountsSlices.actions.setAccount(isSignedIn));
      // localStorage.setItem("account", JSON.stringify(isSignedIn));
      navigate("/dashboard");
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };
  const onFailure = (res) => {
    alert("Sai tài khoản hoặc mật khẩu!");
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register-account" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Login with google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
