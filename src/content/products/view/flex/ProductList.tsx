import { ProductsType } from "@common/temp/temp";
import FlexViewProductCard from "@content/products/card/FlexViewProductCard";
import { displayFlexCenter } from "@global/global.style";
import { Box } from "@mui/material";

type ProductListType = {
  products: ProductsType[];
  productCardHeight: string;
  section: string;
};

const FlexViewProductList = ({
  products,
  productCardHeight,
  section,
}: ProductListType) => (
  <Box sx={[displayFlexCenter, { boxSizing: "border-box", height: "100%" }]}>
    <Box
      sx={[
        displayFlexCenter,
        { overflowX: "auto", justifyContent: "flex-start" },
      ]}
    >
      {products.map((product: ProductsType) => (
        /* eslint-disable */
        <Box
          sx={{ boxSizing: "border-box", marginRight: "2rem" }}
          key={product._id}
        >
          <FlexViewProductCard
            alt={product.name}
            description={product.name}
            img={product.link}
            cardMediaHeight={productCardHeight}
            /* eslint-disable */
            productId={product._id}
            section={section}
          />
        </Box>
      ))}
    </Box>
  </Box>
);
export default FlexViewProductList;
