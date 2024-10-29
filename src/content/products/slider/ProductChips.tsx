import React from "react";

import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

type ProductChipProps = {
  label: string;
};

const ProductChips = ({ label }: ProductChipProps) => (
  <Chip
    avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
    label={label}
    variant="outlined"
    clickable
    sx={{ marginRight: "0.5rem" }}
  />
);

export default ProductChips;
