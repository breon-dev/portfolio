"use client";

//Zod
import * as z from "zod";

//React Hooks
import { useState, useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//Schemas
import { EmailSchema } from "@/schemas";

//ShadCn components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

//Actions
import { SubmitEmail } from "@/actions/submit-email";

export const HireForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  //Form Object
  const form = useForm<z.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      tools: ""
    },
  });

  //On Submit for data
  const onSubmit = (values: z.infer<typeof EmailSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      SubmitEmail(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success)
        })
    })
  }


  return (
    <section className="w-full flex justify-center items-center text-white flex-col gap-10">
      <h2 className="text-center text-4xl font-bold">Have a Request?</h2>
      <form
        className="flex items-center justify-center flex-col gap-4 text-white w-1/3"
      >
        <div className="w-full flex flex-col justify-center gap-4">
          <Button className="w-full" variant="secondary">
            Send Message
          </Button>
          <Button className="w-full" variant="default">
            Reset
          </Button>
        </div>
      </form>
    </section>
  );
};
