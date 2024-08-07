import * as z from "zod";

export const EmailSchema = z.object({
    name: z.string({
        message: ""
    }),
    email: z.string().email({
        message: ""
    }),
    message: z.string().min(50, {
        message: ""
    }),
    tools: z.string({
        message: ""
    })
})