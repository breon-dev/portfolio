//icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

//components
import { Button } from "@/components/ui/button";
import { ButtonWrapper } from "@/components/button-wrapper";

export const Navigation = () => {
  return (
    <section className="flex items-center gap-4 mt-6 m-auto">
      <ButtonWrapper href="#footer">
        <Button variant="default">Get in touch</Button>
      </ButtonWrapper>
      <ButtonWrapper href="/">
        <Button variant="default">CV</Button>
      </ButtonWrapper>
    </section>
  );
};
