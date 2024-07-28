"use client";

//hooks
import { useState, useEffect } from "react";

//components
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

export const HireForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    tools: "",
  });

  function handleSubmit(event: any) {
    event.preventDefault();

    handleReset();
  }

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleReset() {
    const newFormData = {
      name: "",
      email: "",
      message: "",
      tools: "",
    };
    setFormData(newFormData);
  }

  return (
    <section className="w-full flex justify-center items-center text-white flex-col gap-10">
      <h2 className="text-center text-4xl font-bold">Have a Request?</h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col gap-4 text-white w-1/3"
      >
        <input
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-950 border-2 border-gray-500 rounded-md p-2 w-full outline-none"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-950 border-2 border-gray-500 rounded-md p-2 w-full outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-950 border-2 border-gray-500 rounded-md p-2 w-full outline-none"
          required
        />
        <input
          name="tools"
          type="text"
          placeholder="What you want me to use"
          value={formData.tools}
          onChange={handleChange}
          className="bg-gray-950 border-2 border-gray-500 rounded-md p-2 w-full outline-none"
          required
        />
        <div className="w-full flex flex-col justify-center gap-4">
          <Button className="w-full" variant="secondary">
            Send Message
          </Button>
          <Button className="w-full" variant="default" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>
    </section>
  );
};
