import { color } from "@global/colors";

const boxflex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const container = {
  backgroundColor: color.main.primary, // "rgba(0,0,0,0.3)",
  padding: "2rem 1rem",
  height: "auto",
  width: "100%",
  left: 0,
  bottom: 0,
};

const aboutus = {
  color: "white",
};

const shareLinks = {
  boxSizing: "border-box",
  paddingTop: "1rem",
};

export const style = {
  container,
  boxflex,
  aboutus,
  shareLinks,
};
