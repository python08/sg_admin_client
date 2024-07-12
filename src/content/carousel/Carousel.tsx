import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Card from "@components/Card/component/Card";

import { style } from "./style";
import { CarouselType, SliderCardData } from "./model";

const Carousel = ({ sliderData }: CarouselType) => {
  const [current, setCurrent] = useState(0);
  const { length } = sliderData;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handler = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <Box sx={style.SliderContainer} {...handler}>
      <Box sx={style.LeftArrow}>
        <KeyboardArrowLeftIcon
          fontSize="large"
          onClick={prevSlide}
          sx={{ color: "#E3E5E7" }}
        />
      </Box>
      <Box sx={style.RightArrow}>
        <KeyboardArrowRightIcon
          fontSize="large"
          onClick={nextSlide}
          sx={{ color: "#E3E5E7" }}
        />
      </Box>
      {sliderData.map((data: SliderCardData, index: number) => {
        const { updateTitle, updateDescription, image } = data;
        return (
          <Box
            sx={index === current ? style.SlideActive : style.Slide}
            key={updateTitle}
          >
            {index === current && (
              <Card
                key={updateTitle}
                title={updateTitle}
                description={updateDescription}
                img={image}
                sx={style.ProductCard}
                cardMediaHeight="200"
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default Carousel;
