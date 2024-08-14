import { NextResponse } from "next/server";

type projects = {
  title: string;
  description: string;
  codeLink: string;
  demoLink: string;
}

let data: projects[] = [
  { 
    title: "Portfolio Website", 
    description: "Personal website, for people to see my work and learn a little more about me.",
    codeLink: "https://github.com/breon-dev/portfolio",
    demoLink: "/"
  }
];

export async function GET() {
  try {
    const response = {
      ok:true,
      data
    }

    if (data) {
      return NextResponse.json(data, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new NextResponse('Currently there are no projects');

  } catch (error) {

    console.error('There is an error:', error);

    return new NextResponse('Internal Server Error', { 
      status: 500,
      headers: { 
        'Content-Type': 'application/json' 
      }
    });
  }
}
