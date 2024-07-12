import { CardActionArea, SxProps, Theme } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { color } from "@global/colors";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { CardStyle } from "@components/styles/style";

import { MuiCard } from "./index";

type ProductCardType = {
  title?: string;
  description?: string;
  img?: any;
  cardMediaHeight?: string;
  sx?: SxProps<Theme>;
  productCard?: boolean;
  cardContent?: EmotionJSX.Element;
};

const Card = (props: ProductCardType) => {
  const {
    title,
    description,
    img,
    cardMediaHeight,
    sx,
    productCard,
    cardContent,
  } = props;

  let cardImage = img;
  let lineHeight = 1.6;
  if (productCard) {
    cardImage = img.src;
    lineHeight = 1;
  }

  let cardDescription = (
    <>
      <Typography
        gutterBottom
        variant="body1"
        component="h5"
        lineHeight={lineHeight}
        fontSize={img ? "" : "2.5rem"}
      >
        {title}
      </Typography>
      <Typography
        variant={productCard ? "body2" : "subtitle1"}
        color={color.grey[0]}
        lineHeight={lineHeight}
        fontSize={img ? "" : "2rem"}
      >
        {description}
      </Typography>
    </>
  );

  if (cardContent) cardDescription = cardContent;

  return (
    <MuiCard sx={sx || CardStyle}>
      <CardActionArea>
        {img && (
          <CardMedia
            component="img"
            height={cardMediaHeight || "200"}
            image={cardImage}
            alt={title}
          />
        )}
        <CardContent>{cardDescription}</CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
