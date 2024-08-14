//Metadata
import { Metadata } from "next";

//Components
import { Heading } from "@/components/heading";

//Types
type Project = {
  title: string;
  description: string;
  codeLink: string;
  demoLink: string;
};

//Interfaces
interface ProjectProps {
  title: string;
  description?: string;
  codeLink: string;
  demoLink: string;
  techStackIcons: string[];
}

//Server-side fetching
async function fetchProjects() {
  let projects: Project[] = [];

  try {
    let res = await fetch("http://localhost:3000/api/projects", {
      cache: "default",
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

export default function Projects() {
  return (
    <main className="flex flex-col min-h-fit justify-center scroll-smooth">
      <Heading size="large">Projects</Heading>
    </main>
  );
}

//Page Metadata
export const metadata: Metadata = {
    title: "Projects | Ben Rodger - Full-stack Developer",
    description:
      "Hi, I'm Ben. A Full-stack Developer with 2+ years of experience",
    keywords: [
      "ben",
      "ben rodger",
      "breon",
      "developer",
      "fullstack",
      "portfolio",
      "resume",
      "cv",
    ],
    openGraph: {
      siteName: "Ben — Full-stack Developer",
      title: "Home",
      description:
        "Hi, I'm Ben. A Full-stack Developer with 2+ years of experience",
    },
  };
  
