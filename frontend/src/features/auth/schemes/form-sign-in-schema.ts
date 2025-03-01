import { z } from 'zod';

export const formSignInSchema = z.object({
	email: z
	  .string()
	  .email({message: 'Check the correctness of the mail'}),
	password: z
	  .string()
	  .min(10, {
		message: 'Password must be at least 10 characters long.',
	  })
	  .regex(/^(?=.*[A-Z])(?=.*\d).{10,}$/, {
		message: 'Password must be at least 10 characters long, contain at least 1 uppercase letter, and 1 number.',
	  }),
	code: z.string().optional(),
  });

  export type TypeLoginSchema = z.infer<typeof formSignInSchema>
