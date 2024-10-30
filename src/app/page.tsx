"use client";

import useSWR from "swr";
import { Box, Button, FormHelperText, Grid } from "@mui/material";
import { fetcher, getObjFromLocalStorage, setObjToStorage } from "@/util";
import { useRouter } from "next/navigation";
import { addNewProduct, route } from "@/common/constants/routes";
import { webContainerPadding } from "@/styles/global.style";
import { get } from "lodash";
import { UserRole } from "@/common/constants/user-role";

const Home = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    fetcher
  );
  const router = useRouter();

  if (get(data, "_id")) {
    setObjToStorage(data, "user");
  }
  const authorizedUser =
    get(getObjFromLocalStorage("user"), "role") === UserRole.superAdmin;

  return (
    <Grid container p={webContainerPadding}>
      <Grid item xs={12} sm={12} md={2} lg={3}></Grid>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box component="form">
          <Box height={"1rem"}>
            {error && (
              <>
                <FormHelperText sx={{ color: "red", textAlign: "center" }}>
                  please login
                </FormHelperText>
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </Button>
                </Box>
              </>
            )}
            {data && (
              <FormHelperText sx={{ color: "blue", textAlign: "center" }}>
                Welcome {data.name}
              </FormHelperText>
            )}
          </Box>
          {data && (
            <>
              <Box sx={{ mt: 2, mb: 2 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => router.push(addNewProduct())}
                >
                  Add Product
                </Button>
              </Box>
              <Box sx={{ mt: 2, mb: 2 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => router.push(route.adminProducts.l)}
                >
                  View or Update Products
                </Button>
              </Box>
              <Box sx={{ mt: 2, mb: 2 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => router.push(route.preview.l)}
                >
                  LIVE WEB-APP
                </Button>
              </Box>
              {authorizedUser && (
                <Box sx={{ mt: 2, mb: 2 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => router.push(route.register.l)}
                  >
                    ADD USER
                  </Button>
                </Box>
              )}
            </>
          )}
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={3}></Grid>
    </Grid>
  );
};

export default Home;
