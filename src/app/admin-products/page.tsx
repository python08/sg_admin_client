'use client';

import api from '@/api';
import {
  addNewProduct,
  editProductDetailsRoute,
} from '@/common/constants/routes';
import ProductCard from '@/content/products/card/ProductCard';
import { productList } from '@/content/products/view/style';
import { ProductsType } from '@/types/product';
import { Box, Button, Grid, Typography } from '@mui/material';
import { get, isArray } from 'lodash';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Products = () => {
  const [serverError, setServerError] = useState<string>('');
  const [allProducts, setAllProducts] = useState<ProductsType[]>([]);

  const router = useRouter();

  useEffect(() => {
    api('all-products', 'GET', null, { withCredentials: true })
      .then((response: any) => {
        if (isArray(response.data)) {
          const products: ProductsType[] = response.data;
          setAllProducts(products);
        } else if (response.error) {
          setServerError(get(response, 'error.message'));
        }
      })
      .catch((err: any) => console.log(err));
  }, []);

  return (
    <Grid container padding={'3rem'}>
      <Grid item xs={12} padding={'1rem'}>
        <Box textAlign={'center'}>
          {serverError && (
            <Typography variant="h5" color={'red'}>
              Error: {serverError}
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={12} padding={'1rem'}>
        <Box textAlign={'center'}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => router.push(addNewProduct())}
          >
            Add Product
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} padding={'1rem'}>
        <Box textAlign={'center'}>
          <Typography variant="h4">ALL PRODUCTS</Typography>
        </Box>
        <Box textAlign={'center'}>
          <Typography variant="h5">click to edit</Typography>
        </Box>
        <Box textAlign={'center'}>
          <Typography variant="subtitle1">
            TOTAL: {allProducts.length}
          </Typography>
        </Box>
        <RenderProductList products={allProducts} router={router} />
      </Grid>
    </Grid>
  );
};

export default Products;

const RenderProductList = ({
  products,
  router,
}: {
  products: ProductsType[];
  router: AppRouterInstance;
}) => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <Grid container spacing={2}>
        {products.map((product: ProductsType) => (
          <Grid item xs={12} key={product.name}>
            <ProductCard
              title={product.name}
              description={product.description}
              img={product.link}
              /* eslint-disable */
              productId={product._id}
              cardMediaHeight={"200"}
              sx={productList}
              onClick={() => router.push(editProductDetailsRoute(product._id))}
              isActive={product.isActive}
              chipVisible
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
  </Grid>
);
