//components
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ButtonWrapper } from "@/components/button-wrapper";
import { Button } from "@/components/ui/button";

//interface
interface ProjectProps {
  title: string;
  description?: string;
  codeLink: string;
  demoLink: string;
  techStackIcons: string[];
}

//component
export const Project = ({
  title,
  description,
  codeLink,
  demoLink,
  techStackIcons,
}: ProjectProps) => {
  return (
    <Card className="w-full max-w-md object-cover hover:scale-105 transition-all">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex gap-2">
          {techStackIcons?.map((icon, index) => (
            <li key={index}>{icon}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-left items-center h-fit">
        <section className="flex gap-2">
          <ButtonWrapper href={codeLink} type="redirect">
            <Button variant="default">VIEW CODE</Button>
          </ButtonWrapper>
          <ButtonWrapper href={demoLink} type="redirect">
            <Button variant="outline">LIVE DEMO</Button>
          </ButtonWrapper>
        </section>
      </CardFooter>
    </Card>
  );
};
