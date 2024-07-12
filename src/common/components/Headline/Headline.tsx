import { color } from "@global/colors";
import { Typography } from "@mui/material";

type HeadlineProps = {
  headLine: string;
};

export const Headline = ({ headLine }: HeadlineProps) => (
  <Typography
    component="p"
    variant="subtitle2"
    fontSize="1.7rem"
    color={color.main.primary}
  >
    {headLine}
  </Typography>
);
