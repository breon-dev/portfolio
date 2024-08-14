"use server";

import { EmailSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";

export const SubmitEmail = async (values: z.infer<typeof EmailSchema>) => {
    const validatedFields = EmailSchema.safeParse(values);

    console.log(validatedFields);

    if (!validatedFields.success) {
        return {
            error: "Invalid fields!"
        }
    }

    const addedMessage = await db.messages.create({
        data: {...values}
    })

    return {
        success: "The email has been sent!"
    }
}