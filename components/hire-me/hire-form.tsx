"use client";

//Zod
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//Hooks
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

//Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { FormActionMessage } from "@/components/hire-me/form-action-message";

//Schemas
import { EmailSchema } from "@/schemas";

//Actions
import { SubmitEmail } from "@/actions/submit-email";

export const HireForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const { toast } = useToast();

  //Form Object
  const form = useForm<z.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      tools: "",
    },
  });

  //On Submit for data
  const onSubmit = (values: z.infer<typeof EmailSchema>) => {
    setError("");
    setSuccess("");
  
    startTransition(() => {
      SubmitEmail(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
  
        if (data.success) {
          form.reset();
          toast({
            title: "Message Sent",
            description: "Ben will get back to you ASAP",
            action: (
              <ToastAction altText="Close">
                Close
              </ToastAction>
            ),
          });
        }
      });
    });
  };

  return (
    <section className="w-full flex justify-center items-center text-white flex-col gap-5">
      <h2 className="text-center text-4xl font-bold">Have a Request?</h2>
      <p className="text-gray-300 text-xl font-medium">
        <span className="text-purple-500">Flexible</span>, and able to{" "}
        <span className="text-purple-500">adapt</span> to any team
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-1/3"
        >
          <FormActionMessage message={success} variant="success" />
          <FormActionMessage message={error} variant="error" />
          <div className="space-y-3 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      type="text"
                      className="py-5"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="johndoe@gmail.com"
                      type="email"
                      className="py-5"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="A new website idea"
                      type="text"
                      className="py-5"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tools"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tools</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="What you'd like me to use"
                      type="text"
                      className="py-5"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            variant="secondary"
          >
            Send
          </Button>
        </form>
      </Form>
    </section>
  );
};
