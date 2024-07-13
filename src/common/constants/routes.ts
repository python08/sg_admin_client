// l => main route link
// c => main route inner link
export const route = {
  adminProducts: {
    l: '/admin-products',
    c: {
      addProduct: '/add-product',
    },
  },
  preview: {
    l: '/preview',
    c: {
      home: '/home',
    },
  },
};

export const previewProductDetailsRoute = (productId: string | number) =>
  `${route.preview.l}${route.preview.c.home}/${productId}`;

export const editProductDetailsRoute = (productId: string | number) =>
  `${route.adminProducts.l}/${productId}`;

export const addNewProduct = () =>
  `${route.adminProducts.l}${route.adminProducts.c.addProduct}`;

export const allProducts = () => route.adminProducts.l;
