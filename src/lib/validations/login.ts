import * as z from 'zod';

export const userAuthSchema = z.object({
  email: z.string().email('Please use a valid email address.'),
  password: z
    .string()
    .min(4, 'Password must be at least 4 characters in length.'),
});

export type UserAuthSchema = z.infer<typeof userAuthSchema>;
