import { Box, Typography } from "@mui/material";
import { displayFlexAlignCenter } from "@global/global.style";
import { color } from "@global/colors";

import house from "../../../public/assests/logo_house.svg";
import { style } from "./style";

type HeroType = {
  lgDown: boolean;
};

const Hero = ({ lgDown }: HeroType) => (
  <Box position="relative" height="50vh">
    <Box p={lgDown ? "2rem 1rem 0rem" : "4rem"}>
      <Box sx={displayFlexAlignCenter} justifyContent="flex-start">
        <Typography
          variant="h1"
          fontSize={lgDown ? "5rem" : "8rem"}
          fontWeight={400}
          sx={style.hero1(color, lgDown)}
        >
          Swad
        </Typography>
        {/* FP change to image next js */}
        {/* eslint-disable */}
        <img src={house.src} alt="swad_ghar" style={style.houseImage(lgDown)} />
      </Box>
      <Typography
        variant="h1"
        fontSize={lgDown ? "5rem" : "8rem"}
        fontWeight={400}
        lineHeight={0.8}
        color={color.main.primary}
      >
        Gharana{" "}
      </Typography>
      <Typography
        variant="h1"
        fontSize={lgDown ? "1rem" : "1.3rem"}
        fontWeight={200}
        lineHeight={1}
        color={lgDown ? color.main.pureWhite : color.main.primary}
        p="0.5rem"
      >
        By SMD Mahila Gruh Udyog.
      </Typography>
    </Box>
  </Box>
);

export default Hero;
