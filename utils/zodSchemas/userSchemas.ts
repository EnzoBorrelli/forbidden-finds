import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long"),
  email: z
    .string()
    .min(3, "email must be at least 3 characters long")
    .email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const userFormSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must be at most 20 characters long"),
    email: z
      .string()
      .min(3, "email must be at least 3 characters long")
      .email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "passwords do not match",
  });

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(3, "email must be at least 3 characters long")
    .email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const updatedUserSchema = z.object({
  id: z.string().min(1, "ID is needed"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long"),
  email: z
    .string()
    .min(3, "email must be at least 3 characters long")
    .email("Invalid email"),
  avatar: z.number().min(1, "Please select an avatar"),
});
