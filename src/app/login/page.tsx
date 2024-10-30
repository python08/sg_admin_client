"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
  Box,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { CreateSessionInput, createSessionSchema } from "@/schema/schema";
import { checkError } from "@/util";
import api from "@/api";
import { get } from "lodash";
import { useRouter } from "next/navigation";
import { webContainerPadding } from "@/styles/global.style";

const LoginForm = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<CreateSessionInput>({
    resolver: zodResolver(createSessionSchema),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const onSubmit = async (data: CreateSessionInput) => {
    const res: any = await api(
      `sessions`,
      "POST",
      data,
      { withCredentials: true } // add this to set cookies in browser
    );

    if (res?.error) {
      setLoginError(get(res, "error.message", ""));
    } else {
      if (res?.data) {
        router.push("/");
      }
    }
  };

  const restPasswordHandle = async () => {
    const res: any = await api(
      `forgot-password`,
      "POST",
      { email: getValues("email") },
      { withCredentials: true } // add this to set cookies in browser
    );

    if (res?.error) {
      setLoginError(get(res, "error.message", ""));
    } else {
      if (res?.data && res.data.message === "Password reset link sent!") {
        setResetSuccess(true);
      }
    }
  };

  const handleForgetPassword = () => {
    setLoginError("");
    setForgetPassword(true);
  };

  if (resetSuccess) {
    return (
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
        }}
      >
        <Box height={"1rem"}>
          <FormHelperText sx={{ color: "green", textAlign: "center" }}>
            Please visit reset link to change password
          </FormHelperText>
        </Box>
      </Box>
    );
  }

  return (
    <Grid container p={webContainerPadding}>
      <Grid item xs={12} sm={12} md={2} lg={3}></Grid>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box height={"1rem"}>
            {loginError && (
              <FormHelperText sx={{ color: "red", textAlign: "center" }}>
                {loginError}
              </FormHelperText>
            )}
            {forgetPassword && (
              <FormHelperText sx={{ color: "red", textAlign: "center" }}>
                Please enter email address to rest password
              </FormHelperText>
            )}
          </Box>
          <TextField
            autoComplete="off"
            {...register("email", { required: true })}
            label="Email"
            error={!!errors.email}
            helperText={checkError(errors.email?.message)}
            fullWidth
            margin="normal"
            sx={{ mb: 2 }}
          />
          <FormControl
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.password}
            sx={{
              mb: 2,
              display: forgetPassword ? "none" : "inline-flex",
            }}
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...register("password", { required: true })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>
              {checkError(errors.password?.message)}
            </FormHelperText>
          </FormControl>
          <Box sx={{ mb: 2 }} display={forgetPassword ? "none" : "block"}>
            <Button type="submit" variant="outlined" fullWidth>
              Login
            </Button>
          </Box>
          <Box sx={{ mb: 2 }} display={forgetPassword ? "none" : "block"}>
            <Button variant="outlined" fullWidth onClick={handleForgetPassword}>
              Forget Password
            </Button>
          </Box>
          <Box sx={{ mb: 2 }} display={!forgetPassword ? "none" : "block"}>
            <Button variant="outlined" fullWidth onClick={restPasswordHandle}>
              send
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={3}></Grid>
    </Grid>
  );
};

export default LoginForm;
