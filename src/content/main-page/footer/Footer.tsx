import { Box, Grid, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import { fontWeight } from "@global/font";
import { color } from "@global/colors";
import PlatformLink from "@components/platform-link/PlatformLink";
import { platformLinks } from "@common/constants/platform-links";

import { style } from "./style";

const Footer = () => (
  <Box sx={style.container}>
    <Grid container>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box sx={style.aboutus}>
          <Box>
            <Typography
              variant="subtitle2"
              component="p"
              fontWeight={fontWeight[0]}
              color={color.main.pureWhite}
            >
              SMD mahila gruh udyog is small local business owner. We sell
              delicious homemade and also wholesale food products at affordable
              price as per orders.
            </Typography>
          </Box>
          <Box sx={style.shareLinks}>
            {/* <PlatformLink icon={<FacebookIcon />} href={""} /> */}
            <PlatformLink icon={<GoogleIcon />} href={platformLinks.Google} />
            <PlatformLink
              icon={<InstagramIcon />}
              href={platformLinks.Instagram}
            />
          </Box>
        </Box>
      </Grid>
      {/*
      FP
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box>
          <Typography component="p">Home</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box>
          <Typography component="p">About us</Typography>
        </Box>
      </Grid> */}
    </Grid>
  </Box>
);

export default Footer;
