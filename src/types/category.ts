export const Categories = {
  Ladoo: 'ladoo',
  Others: 'others',
} as const;

// Convert object key in a type
export type CategoriesKeys = (typeof Categories)[keyof typeof Categories];
