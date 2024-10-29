import { Categories, CategoriesKeys, ProductsType } from "@common/temp/temp";

export const getProductByCategory = (
  products: ProductsType[],
  category: CategoriesKeys
) => {
  switch (category) {
    case Categories.Ladoo:
      return products.filter(
        (product) => product.category.name === Categories.Ladoo
      );
    case Categories.Others:
      return products.filter(
        (product) => product.category.name === Categories.Ladoo
      );
    default:
      return products;
  }
};
