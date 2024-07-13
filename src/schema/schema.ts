import { object, string, TypeOf } from 'zod';

export const createSessionSchema = object({
  password: string().min(6, 'Please enter minimum 6 character password'),
  email: string().min(1, 'Email is required').email('Please enter valid email'),
});

export const registerUserScehma = object({
  name: string().min(1, 'Name is required'),
  password: string({
    required_error: 'Password is required',
  }).min(6, 'Please enter minimum 6 character password'),
  passwordConfirmation: string({
    required_error: 'Please confirm password',
  }),
  email: string({
    required_error: 'Email is required',
  }).email('Please enter valid email'),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: 'Password did not match',
  path: ['passwordConfirmation'],
});

export type RegisterUserInput = TypeOf<typeof registerUserScehma>;
export type CreateSessionInput = TypeOf<typeof createSessionSchema>;
