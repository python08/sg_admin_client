"use client";

import { Box, Grid } from "@mui/material";
import { ProductsType } from "@common/temp/temp";
import { displayFlexCenter } from "@global/global.style";

import ProductCard from "../card/ProductCard";
import { productList } from "./style";
import { Headline } from "../../../common/components/Headline/Headline";
import { previewProductDetailsRoute } from "@/common/constants/routes";
import { useRouter } from "next/navigation";

type ProductListType = {
  products: ProductsType[];
  height?: string;
  headLine?: string;
};

const ViewProductList = ({ products, height, headLine }: ProductListType) => {
  const router = useRouter();
  return (
    <>
      <Box sx={{ textAlign: "center" }} pb="1rem">
        {headLine && <Headline headLine={headLine} />}
      </Box>
      <Box sx={displayFlexCenter}>
        <Grid container spacing={2}>
          {products.map((product: ProductsType) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={product.name}>
              <ProductCard
                title={product.name}
                description={product.description}
                img={product.link}
                /* eslint-disable */
                productId={product._id}
                cardMediaHeight={height || "200"}
                sx={productList}
                onClick={() =>
                  router.push(previewProductDetailsRoute(product._id))
                }
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ViewProductList;
