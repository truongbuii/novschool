import { z } from 'zod';

const SignInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: 'Password must contain at least 6 character(s)' })
    .max(20, { message: 'Password must contain at most 20 character(s)' })
});

type TSignInSchema = z.infer<typeof SignInSchema>;

export { SignInSchema };
export type { TSignInSchema };
