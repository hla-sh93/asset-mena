import { z } from 'zod'

export const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full Name must be more than 1 character' }),
  message: z
    .string()
    .trim()
    .min(4, { message: 'Message must be more than 3 character' }),
  emailAddress: z
    .string()
    .trim()
    .min(1, 'The email is required.')
    .email({ message: 'The email is invalid.' }),
  recaptcha: z.string().trim(),
})
