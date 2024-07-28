//components
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { ButtonWrapper } from "@/components/button-wrapper";

export const About = () => {
  return (
    <section className="w-1/3">
      <Heading left>Hi there!</Heading>
      <p className="text-white my-5">
        I am a student currently living in Edinburgh, Scotland. I will be
        studying Management at the University of St Andrews in September of this
        year. <br /><br />My passions lay both in Finance and Computing. I am currently
        learning Vue and Nuxt, so that I can build full-stack webapps in the
        future. I also occassionally trade in the Crypto Markets.
      </p>
      <ButtonWrapper href="/about" type="redirect">
        <Button variant="default">READ MORE</Button>
      </ButtonWrapper>
    </section>
  );
};
