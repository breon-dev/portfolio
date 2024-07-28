//imports
import Image from "next/image";

//components
import { About } from "@/components/introduction/about";

export const Introduction = () => {
  return (
    <section id="introduction" className="flex justify-center gap-4 items-center px-16 w-full max-w-screen-xl m-auto h-full mt-20">
      <About />
      <div className="flex justify-center items-center w-1/2">
        <Image
          src="/assets/about-me-graphic.png"
          width={500}
          height={500}
          alt="Picture of a bit of paper"
        />
      </div>
    </section>
  );
};
