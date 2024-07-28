import { Metadata } from "next";
import Image from "next/image";

//components
import { ButtonWrapper } from "@/components/button-wrapper";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="text-white flex items-center flex-col justify-center gap-3 px-14 m-auto">
      <h2 className="font-bold text-5xl">404</h2>
      <div className="gap-2 flex items-center">
        <p>Oops, Looks like you are in the wrong place</p>{"  "}
        <ButtonWrapper href="/" type="redirect">
          <Button variant="default">Go back</Button>
        </ButtonWrapper>
      </div> 
      <Image
        src="/assets/loading.gif"
        height={500}
        width={500}
        alt="404 image"
      />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Not Found",
  description:
    "The requested page does not exist. Perhaps check out the other pages?",
};
