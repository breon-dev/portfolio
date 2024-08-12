//Icons
import * as Icons from "react-icons/si";

//Components
import { Heading } from "@/components/heading";

//Types
type IconNames = keyof typeof Icons;
type Tools = {
  name: string;
  icon: IconNames;
  color: string;
};

// Interfaces
interface IconMapperProps {
  title: string;
  tools: Tools[];
}

export const TechStack = () => {
  const frontendTools: Tools[] = [
    { name: "Typescript", icon: "SiTypescript", color: "text-blue-500" },
    { name: "TailwindCSS", icon: "SiTailwindcss", color: "text-teal-300" },
    { name: "React", icon: "SiReact", color: "text-teal-300" },
    { name: "Vue", icon: "SiVuedotjs", color: "text-green-600" },
    { name: "Svelte", icon: "SiSvelte", color: "text-red-600" },
  ];

  const backendTools: Tools[] = [
    { name: "Python", icon: "SiPython", color: "text-blue-400" },
    { name: "Go", icon: "SiGo", color: "text-teal-400" },
    { name: "PHP", icon: "SiPhp", color: "text-indigo-300" },
    { name: "NextJS", icon: "SiNextdotjs", color: "text-white" },
    { name: "NuxtJS", icon: "SiNuxtdotjs", color: "text-emerald-500" },
    { name: "Flask", icon: "SiFlask", color: "text-gray-200" },
    { name: "PostgreSQL", icon: "SiPostgresql", color: "text-cyan-700" },
    { name: "Prisma", icon: "SiPrisma", color: "text-white" },
  ];

  const devopsTools: Tools[] = [
    { name: "Linux", icon: "SiLinux", color: "text-white" },
    { name: "Git", icon: "SiGit", color: "text-orange-600" },
    { name: "Github", icon: "SiGithub", color: "text-white" },
  ];

  return (
    <section className="m-auto pt-24 w-2/3" id="techStack">
      <Heading size="large">Tech Stack &lt;/&gt;</Heading>
      <p className="text-gray-200 text-lg py-2 mt-10 ">
        In the realm of code, my primary stack encompasses NextJS and
        TypeScript, harmoniously weaving their magic in web development. I am
        also learning new languages and technologies to further my knowledge and
        expertise.
      </p>
      <IconMapper title="Frontend" tools={frontendTools} />
      <IconMapper title="Backend" tools={backendTools} />
      <IconMapper title="DevOps" tools={devopsTools} />
    </section>
  );
};

//Sub component
export const IconMapper = ({ title, tools }: IconMapperProps) => {
  return (
    <section className="m-auto mt-8">
      <h3 className="text-xl text-gray-200 ">{title}</h3>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-4 w-full mt-4">
        {tools.map(({ name, icon, color }: Tools, index) => {
          const IconComponent = Icons[`${icon}`];
          return (
            <div
              key={index}
              className="text-3xl flex items-center w-fit gap-3 opacity-70 hover:opacity-100 hover:translate-x-2 transition-all"
            >
              <IconComponent height={15} width={15} className={color} />
              <p className="text-white text-sm">{name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
