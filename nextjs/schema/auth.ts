import { z } from "zod";

const signUpSchema = z.object({
    email: z.string().email(),
    first_name: z.string().min(1, "First name can't be empty"),
    last_name: z.string().optional(),
    password: z.string().min(8, "Password must contain at least 8 character(s)")
});

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must contain at least 8 character(s)")
});

export { signUpSchema, loginSchema }