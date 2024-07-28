import { Metadata } from "next";

//External Components
import { HireForm } from "@/components/hire-me/hire-form";
import { Heading } from "@/components/heading";


//Component
export default function HireMe() {
  return <main>
    <HireForm />
  </main>;
}

export const metadata: Metadata = {
  title: "Home | Ben Rodger - Full-stack Developer",
  description:
    "Hi, I'm Ben. A Full-stack Developer with 2+ years of experience",
  keywords: [
    "ben",
    "ben rodger",
    "breon",
    "developer",
    "fullstack",
    "portfolio",
    "resume",
    "cv",
  ],
  openGraph: {
    siteName: "Ben — Full-stack Developer",
    title: "Home",
    description:
      "Hi, I'm Ben. A Full-stack Developer with 2+ years of experience",
  },
};
