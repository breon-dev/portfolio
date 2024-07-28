import { NextResponse } from "next/server";

type projects = {
  title: string;
  description: string;
  codeLink: string;
  demoLink: string;
}

let data: projects[] = [
  { 
    title: "hello", 
    description: "this is a test",
    codeLink: "/",
    demoLink: "/"
  },
  {
    title: "another",
    description: "this is another test",
    codeLink: "/",
    demoLink: "/"
  },
  {
    title: "hello",
    description: "This is the final test",
    codeLink: "/",
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
