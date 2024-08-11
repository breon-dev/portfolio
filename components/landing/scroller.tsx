//icons
import { FaArrowDown } from "react-icons/fa";

//components
import { Button } from "@/components/ui/button";
import { ButtonWrapper } from "@/components/button-wrapper";

export const Scroller = () => {
  return (
    <div className="w-fit m-auto flex flex-col justify-center items-center mt-12 text-sm hover:translate-y-2 transition-all">
      <ButtonWrapper href="#techStack" type="redirect">
        <p className="text-gray-300 text-center">Scroll</p>
        <Button variant="link" aria-label="Scroller, to move user down the page">
          <FaArrowDown className="text-white" />
        </Button>
      </ButtonWrapper>
    </div>
  );
};
