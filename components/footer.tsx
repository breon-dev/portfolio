//Icons
import { 
  FaDiscord, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaArrowUp, 
} from "react-icons/fa";

//Components
import { ButtonWrapper } from "@/components/button-wrapper";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="flex flex-col m-auto justify-center mt-10 px-16 py-8 text-white" id="footer">
      <div className="w-full flex justify-between items-center max-lg:flex-col">
        <section className="max-lg:text-center">
          <h3 className="text-2xl font-semibold">Let's connect</h3>
          <p className="text-lg mt-5">
            Shoot me email to chat about my work or just like to say hey 👋
          </p>
        </section>
        <section className="max-lg:mt-5">
          <div className="flex gap-2">
            <ButtonWrapper href="mailto:rodgerbs31@gmail.com">
              <Button variant="secondary" aria-label="Link to Ben's Email">
                <FaEnvelope />
              </Button>
            </ButtonWrapper>
            <ButtonWrapper href="https://discord.com/users/401689336967462914" type="redirect">
              <Button variant="secondary" aria-label="Link to Ben's Discord">
                <FaDiscord />
              </Button>
            </ButtonWrapper>
            <ButtonWrapper href="https://www.linkedin.com/in/ben-rodger-a36235280/" type="redirect">
              <Button variant="secondary" aria-label="Link to Ben's LinkedIn">
                <FaLinkedinIn />
              </Button>
            </ButtonWrapper>
          </div>
          <ButtonWrapper
            href="#top"
            type="redirect"
            className="flex flex-col justify-center m-auto mt-5 hover:-translate-y-1 w-fit transition-all"
          >
            <p className="text-center">Back to top</p>
            <FaArrowUp className="m-auto" />
          </ButtonWrapper>
        </section>
      </div>
      <p className="text-center mt-10">Coded with ❤️ & <b>NextJS</b> by Ben Rodger</p>
    </footer>
  );
};
