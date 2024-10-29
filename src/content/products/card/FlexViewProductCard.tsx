import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Card, CardActionArea, Zoom } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useIsVisible } from "@common/hooks/UseIsVisible";
import { previewProductDetailsRoute } from "@/common/constants/routes";

type ProductCardType = {
  alt: string;
  description: string;
  img: any;
  cardMediaHeight: string;
  section: string;
  productId: string;
};

const FlexViewProductCard = (props: ProductCardType) => {
  const router = useRouter();
  const { alt, description, img, cardMediaHeight, productId, section } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  const lineHeight = 1.1;

  // FP remove this later, added to remove amplify build error
  const Section = {
    main: "main",
    suggested: "suggested",
  };

  const handleNavigate = (id: string) => {
    if (Section.main === section) {
      router.push(previewProductDetailsRoute(id));
    } else if (Section.suggested === section) {
      router.replace(`${id}`);
    }
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        opacity: isVisible ? 1 : 0.4,
      }}
      ref={ref}
    >
      <CardActionArea onClick={() => handleNavigate(productId)}>
        <Zoom in={isVisible}>
          <CardMedia
            component="img"
            image={img}
            alt={alt}
            sx={{ height: `${cardMediaHeight}`, width: "10rem", opacity: 1 }}
          />
        </Zoom>
      </CardActionArea>
      <CardContent
        sx={{
          boxShadow: "none",
        }}
      >
        <Typography variant="subtitle1" component="h1" lineHeight={lineHeight}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FlexViewProductCard;
