import { CategoriesKeys } from "./category";
import { FestivalsE } from "./festival";

export type ProductsType = {
  _id: string;
  name: string;
  title: string;
  brief: string;
  price: string;
  link: string;
  description: string;
  category: CategoriesKeys;
  festivalName: FestivalsE;
  isActive: boolean;
  active?: boolean;
};