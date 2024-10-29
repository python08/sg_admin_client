export type ProductsType = {
  _id: string;
  name: string;
  title: string;
  brief: string;
  price: string;
  link: string;
  description: string;
  category: Category;
  festivalName: Festival;
  isActive: boolean;
  active?: boolean;
};

export type ProductViewProps = {
  products: ProductsType[];
  productDetails: ProductsType;
  handleActivation: (productId: string, isActive: boolean) => Promise<void>;
  openProductActivationModal: boolean;
  setProductActivationModalOpen: (openProductActivationModal: boolean) => void;
  handleProductActivationDesicion: (_id: string, isActive: boolean) => void;
  openProductDeletionModal: boolean;
  setProductDeletionModalOpen: (openProductDeletionModal: boolean) => void;
  handleProductDeletionDesicion: (_id: string) => void;
};

export const Categories = {
  Ladoo: "ladoo",
  Others: "others",
} as const;

// Convert object key in a type
export type CategoriesKeys = (typeof Categories)[keyof typeof Categories];

export type Category = {
  _id: string;
  name: string;
};

export type Festival = {
  _id: string;
  name: string;
};

// FP sort by festivals
// export type FestivalsType = {
//   id: number;
//   name: string;
//   link: any;
//   active: boolean;
// };

// FP
// export const FestivalsData: FestivalsType[] = [
//   {
//     id: 0,
//     name: FESTIVALS[0],
//     link: allFestival,
//     active: true,
//   },
//   {
//     id: 1,
//     name: FESTIVALS[3],
//     link: diwali,
//     active: false,
//   },
//   {
//     id: 2,
//     name: FESTIVALS[2],
//     link: holi,
//     active: false,
//   },
//   {
//     id: 3,
//     name: FESTIVALS[1],
//     link: lordganesh,
//     active: false,
//   },
//   {
//     id: 4,
//     name: FESTIVALS[4],
//     link: sanskranti,
//     active: false,
//   },
// ];
