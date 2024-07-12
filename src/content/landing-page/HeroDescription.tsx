import { Box, Typography } from "@mui/material";
import Image from "next/image";

import { heroDescriptionStyle, style } from "./style";
import Karanji from "../../../public/assests/Karanji.jpg";

type HeroDescriptionType = {
  lgDown: boolean;
  xlUp: boolean;
};

const HeroDescription = ({ lgDown, xlUp }: HeroDescriptionType) => {
  const getSecondaryImage = () => (
    <Box sx={style.secondaryImageContainer}>
      <Image
        src={Karanji.src}
        alt="Modak"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
    </Box>
  );

  const getHeroDescription = (smallSize: boolean) => {
    const description =
      "Indulge in the rich flavours of authentic homemade Indian sweets and savoury delights at our online hub.";
    const extra =
      " Explore a culinary journey that celebrates tradition and taste.";
    return smallSize ? `${description}` : `${description}${extra}`;
  };

  return (
    <Box sx={style.heroDescriptionContainer(lgDown)}>
      <Typography
        variant="body1"
        gutterBottom
        fontSize="2rem"
        fontWeight={200}
        sx={
          lgDown
            ? { padding: "0rem 1rem 1rem 1rem" }
            : heroDescriptionStyle(xlUp)
        }
      >
        {getHeroDescription(lgDown)}
      </Typography>
      {!lgDown && getSecondaryImage()}
    </Box>
  );
};

export default HeroDescription;
