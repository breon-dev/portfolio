//imports
import Link from "next/link";

//components
import { Button } from "@/components/ui/button";
import { ButtonWrapper } from "@/components/button-wrapper";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full py-8 px-16 max-w-screen-2xl m-auto max-lg:py-4 max-lg:px-8">
      <h1 className="font-bold text-4xl text-white">
        br<span className="text-purple-600">.</span>
      </h1>
      <ul className="flex items-center gap-6 text-gray-400">
        <Link
          href="/"
          className="border-w-2 border-gray-950 border-b-2 hover:text-white hover:border-purple-400 transition-all"
        >
          Home
        </Link>
        <Link
          href="/#projects"
          className="border-w-2 border-gray-950 border-b-2 hover:text-white hover:border-purple-400 transition-all"
        >
          Projects
        </Link>
        <ButtonWrapper href="/hire-me" type="redirect">
          <Button variant="secondary">Hire Me</Button>
        </ButtonWrapper>
      </ul>
    </nav>
  );
};
