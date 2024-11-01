"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  Button,
  Box,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import { RegisterUserInput, registerUserScehma } from "@/schema/schema";
import { checkError, getObjFromLocalStorage } from "@/util";
import { useState } from "react";
import api from "@/api";
import ApiAlert from "@/util/alert/Alert";
import { get, isEmpty } from "lodash";
import { useRouter } from "next/navigation";
import { UserRole } from "@/common/constants/user-role";
import { webContainerPadding } from "@/styles/global.style";

const LoginForm = () => {
  const [response, setResponse] = useState<any>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserInput>({
    resolver: zodResolver(registerUserScehma),
  });

  if (!(get(getObjFromLocalStorage("user"), "role") === UserRole.superAdmin)) {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    return <Unauthorized />;
  }
  const onSubmit = async (data: RegisterUserInput) => {
    const res = await api(`users`, "POST", data);
    // navigate to login page
    router.push("/");

    if (!isEmpty(get(res, "error"))) {
      setResponse(res);
    }
  };

  return (
    <Grid container p={webContainerPadding}>
      <Grid item xs={12} sm={12} md={2} lg={3}></Grid>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          {response && (
            <ApiAlert responseStatus={get(response, "status", null)} />
          )}
          <Box height={"1rem"}>
            {response && (
              <FormHelperText sx={{ color: "red" }}>
                {get(response, "error.message")}
              </FormHelperText>
            )}
          </Box>
          <TextField
            autoComplete="off"
            {...register("name", { required: true })}
            label="Name"
            error={!!errors.name}
            helperText={checkError(errors.name?.message)}
            fullWidth
            margin="normal"
            sx={{ mb: 2 }}
          />
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
          <TextField
            autoComplete="off"
            type="password"
            {...register("password", { required: true })}
            label="Password"
            error={!!errors.email}
            helperText={checkError(errors.password?.message)}
            fullWidth
            margin="normal"
            sx={{ mb: 2 }}
          />
          <TextField
            autoComplete="off"
            type="password"
            {...register("passwordConfirmation", { required: true })}
            label="Confirm Password"
            error={!!errors.email}
            helperText={checkError(errors.passwordConfirmation?.message)}
            fullWidth
            margin="normal"
            sx={{ mb: 2 }}
          />
          <Box sx={{ mb: 2 }}>
            <Button type="submit" variant="contained" fullWidth>
              Register
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={3}></Grid>
    </Grid>
  );
};

export default LoginForm;

const Unauthorized = () => (
  <Box textAlign={"center"}>
    <Typography color={"red"} variant="h3">
      Unauthorized !
    </Typography>
  </Box>
);
