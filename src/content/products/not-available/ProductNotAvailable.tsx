import { color } from "@global/colors";
import { fontSize, fontWeight } from "@global/font";
import { Box, Typography } from "@mui/material";
import EmptyBowl from "@common/temp/images/Empty.jpg";
import { style } from "./style";

const ProductNotAvailable = () => (
  <Box sx={style.container}>
    <Box textAlign="center">
      <Typography
        variant="subtitle2"
        component="p"
        fontWeight={fontWeight[0]}
        color={color.fontColors.softGray}
        fontSize={fontSize[8]}
      >
        opps..need to stock up
      </Typography>
    </Box>
    <Box
      sx={style.EmptyBowlImg}
      component="img"
      src={EmptyBowl.src}
      alt="empty sweets container"
    />
  </Box>
);

export default ProductNotAvailable;
