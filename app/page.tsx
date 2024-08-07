import { Metadata } from "next";
import Image from "next/image";

//Components
import { Projects } from "@/components/projects";
import { Introduction } from "@/components/landing/introduction";
import { Navigation } from "@/components/landing/navigation";
import { Scroller } from "@/components/landing/scroller";

export default function Home() {
  return (
    <main className="flex flex-col min-h-fit justify-center scroll-smooth">
      <div className="max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:items-center w-full">
        <section className="flex justify-between items-center px-16 w-full max-w-screen-2xl m-auto h-full mt-16 max-lg:justify-center max-lg:flex-col max-lg:items-center">
          <div className="text-white w-1/2 m-auto max-lg:w-3/4 max-lg:flex max-lg:flex-col">
            <Introduction name="Ben Rodger" job="Full Stack Developer">
              17 year old student & developer, currently studying at the
              University of St Andrews in Scotland
            </Introduction>

            <Navigation />
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src="/assets/hero-graphic.svg"
              width={450}
              height={450}
              className="flex max-lg:hidden"
              alt="Hero section Graphic"
            />
          </div>
        </section>
        <Scroller />
      </div>
      <Projects />
    </main>
  );
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
