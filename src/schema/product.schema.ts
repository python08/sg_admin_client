import { z, object, string, TypeOf } from 'zod';

export const createProductSchema = object({
  festivalName: string().min(1, 'Festival name is required'),
  name: string()
    .min(1, 'Name is required')
    .max(50, 'Name cannot exceed 50 characters'),
  title: string()
    .min(1, 'Title is required')
    .max(50, 'Title cannot exceed 50 characters'),
  description: string()
    .min(1, 'Description is required')
    .max(120, 'Description cannot exceed 120 characters'),
  price: z.coerce.number().min(1, 'price is required'), // Optional price field
  category: string()
    .min(1, 'Category is required')
    .max(50, 'Category cannot exceed 50 characters'),
  brief1: string()
    .min(1, 'brief 1 is required')
    .max(120, 'String 1 cannot exceed 120 characters')
    .refine(
      (value: string) => /^[^.]*\.$/.test(value ?? ''),
      'Brief should contian only one full stop at the end of sentence',
    ),
  brief2: string()
    .min(1, 'brief 2 is required')
    .max(120, 'String 2 cannot exceed 120 characters')
    .refine(
      (value: string) => /^[^.]*\.$/.test(value ?? ''),
      'Brief should contian only one full stop at the end of sentence',
    ),
  brief3: string()
    .min(1, 'brief 3 is required')
    .max(120, 'String 3 cannot exceed 120 characters')
    .refine(
      (value: string) => /^[^.]*\.$/.test(value ?? ''),
      'Brief should contian only one full stop at the end of sentence',
    ),
  brief4: string()
    .min(1, 'brief 4 is required')
    .max(120, 'String 4 cannot exceed 120 characters')
    .refine(
      (value: string) => /^[^.]*\.$/.test(value ?? ''),
      'Brief should contian only one full stop at the end of sentence',
    ),
  _id: string().optional(),
});

export type CreateProductInput = TypeOf<typeof createProductSchema>;
