import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";

//utils
import { cn } from "@/lib/utils";

//Components
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-gray-950 min-h-screen container m-auto",
          poppins.className
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Home | Portfolio Website",
  description: "A collection of all of Ben's Projects",
};
