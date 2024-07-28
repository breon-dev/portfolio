//components
import { Heading } from "@/components/heading";

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

//Interfaces
interface ProjectProps {
  title: string;
  description?: string;
  codeLink: string;
  demoLink: string;
  techStackIcons: string[];
}

//types
type Project = {
  title: string;
  description: string;
  codeLink: string;
  demoLink: string;
};

//Server-side fetching
async function fetchProjects() {
  let projects: Project[] = [];

  try {
    let res = await fetch("http://localhost:3000/api/projects", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    projects = await res.json();
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }
  return projects;
}

//Projects Containers
export const Projects = async () => {
  let projects = await fetchProjects();
  
  return (
    <section className="pt-10" id="projects">
      <Heading size="large">Projects</Heading>
      <section className="mt-20 flex flex-row flex-wrap justify-center items-center gap-6 m-auto">
        {projects?.map(
          (
            { title, description, codeLink, demoLink }: Project,
            index: number
          ) => (
            <Project title={title} description={description} codeLink={codeLink} demoLink={demoLink} techStackIcons={['next', 'tailwindcss']} key={index} />
          )
        )}
        {!projects && <p>No Projects to be found</p>}
      </section>
    </section>
  );
};

//Individual Project
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
