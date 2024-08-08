"use server";

import { EmailSchema } from "@/schemas";
import * as z from "zod";

export const SubmitEmail = async (values: z.infer<typeof EmailSchema>) => {
    const validatedFields = EmailSchema.safeParse(values);

    console.log(validatedFields);

    if (!validatedFields.success) {
        return {
            error: "Invalid fields!"
        }
    }

    return {
        success: "The email has been sent!"
    }
}