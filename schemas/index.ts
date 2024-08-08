import * as z from "zod";

export const EmailSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(50, { message: "Message must be at least 50 characters long" }),
  tools: z.string().min(1, { message: "Tools field is required" }),
});
