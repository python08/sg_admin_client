import { Box, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { fontSize } from "@global/font";

import { style } from "./style";

type ProductQuantityProps = {
  quantity: number;
  setQuantity: (count: number) => void;
};

const ProductQuantity = (props: ProductQuantityProps) => {
  const { quantity, setQuantity } = props;
  const changeQuantity = (action: string) => {
    if (action === "add") {
      if (quantity >= 0 && quantity < 10) setQuantity(quantity + 1);
    } else if (action === "minus") {
      if (quantity !== 1) setQuantity(quantity - 1);
    }
  };
  return (
    <Box width="100%">
      <Box>
        <Typography variant="subtitle2" fontSize={fontSize[6]}>
          QUANTITY:
        </Typography>
      </Box>
      <Box>
        <Box sx={style.productQuantityBox}>
          <Box ml="-0.1rem">
            <Fab
              size="small"
              aria-label="add"
              onClick={() => changeQuantity("minus")}
              sx={{ boxShadow: "none" }}
            >
              <RemoveRoundedIcon />
            </Fab>
          </Box>
          <Box>{quantity}</Box>
          <Box mr="-0.1rem">
            <Fab
              size="small"
              aria-label="add"
              onClick={() => changeQuantity("add")}
              sx={{ boxShadow: "none" }}
            >
              <AddIcon />
            </Fab>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductQuantity;
