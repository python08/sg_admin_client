"use client";

import useSWR from "swr";
import { Box, Button, FormHelperText, Grid, Typography } from "@mui/material";
import { fetcher } from "@/util";
import { useRouter } from "next/navigation";
import { addNewProduct, route } from "@/common/constants/routes";
import { webContainerPadding } from "@/styles/global.style";
import { color } from "@/styles/colors";

const Home = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    fetcher
  );
  const router = useRouter();

  return (
    <Grid container p={webContainerPadding}>
      <Grid item xs={12} sm={12} md={2} lg={3}></Grid>
      {error && (
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Box textAlign={"center"} pb="1rem">
            <Typography color={"red"}>please login</Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          </Box>
        </Grid>
      )}
      {data && (
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Box textAlign={"center"} pb="1rem">
            <Typography color={color.main.primary}>Welcome {data.name}</Typography>
          </Box>

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
        </Grid>
      )}

      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Home;
