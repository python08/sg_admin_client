const sliderContainer = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  overflow: "hidden",
  borderRadius: "10px",
  border: "none",
};

const leftArrow = {
  position: "absolute",
  top: "50%",
  left: "-0.1rem",
  zIndex: "1",
  cursor: "pointer",
};
const rightArrow = {
  position: "absolute",
  top: "50%",
  right: "-0.1rem",
  zIndex: "1",
  cursor: "pointer",
};

const productCard = {
  minWidth: "100%",
  height: "100%",
  borderRadius: "10px",
  boxShadow: "none",
};

const slide = {
  opacity: 0,
  transitionDuration: "all .75s ease",
};
const slideActive = [
  slide,
  {
    opacity: 1,
    transitionDuration: "3s",
    transform: "scale(0.8)",
  },
];

export const style = {
  SliderContainer: sliderContainer,
  LeftArrow: leftArrow,
  RightArrow: rightArrow,
  ProductCard: productCard,
  Slide: slide,
  SlideActive: slideActive,
};
