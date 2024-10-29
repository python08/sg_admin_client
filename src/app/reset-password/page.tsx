"use client";

import { useForm } from "react-hook-form";
import { Suspense, useState } from "react";
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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { CreateSessionInput, createSessionSchema } from "@/schema/schema";
import { checkError } from "@/util";
import api from "@/api";
import { get } from "lodash";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ResetPasswordForm = () => {
  const params = useSearchParams();
  const email = params.get("email");
  const token = params.get("token");

  const [loginError, setLoginError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setValue("email", email || "");
  }, [email, token]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
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
      `auth/reset-password/${token}`,
      "PUT",
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

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box height={"1rem"}>
        {loginError && (
          <FormHelperText sx={{ color: "red" }}>{loginError}</FormHelperText>
        )}
      </Box>
      <TextField
        autoComplete="off"
        {...register("email", { required: true })}
        label="Email"
        fullWidth
        margin="normal"
        sx={{ mb: 2, width: "50%" }}
        disabled
      />
      <FormControl
        fullWidth
        margin="normal"
        variant="outlined"
        error={!!errors.password}
        sx={{
          mb: 2,
          width: "50%",
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
        <FormHelperText>{checkError(errors.password?.message)}</FormHelperText>
      </FormControl>
      <Box
        sx={{
          mb: 2,
          width: "50%",
        }}
      >
        <Button type="submit" variant="outlined" fullWidth>
          reset
        </Button>
      </Box>
    </Box>
  );
};

// used suspense due to next js error for useSearchParams
const ResetPassword = () => {
  return (
    <Suspense>
      <ResetPasswordForm />
    </Suspense>
  );
};
export default ResetPassword;
