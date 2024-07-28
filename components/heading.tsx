
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: string;
  size?: "default" | "large";
  left?: boolean;
}

export const Heading = ({ 
  children, 
  size = "default" ,
  left
}: HeadingProps) => {
  const styles = `${left ? 'text-left' : 'text-center'} text-white font-semibold`;

  if (size === "large") {
    return <h1 className={cn(
      styles,
      "text-5xl"
    )}>{children}</h1>;
  }

  return <h1 className={cn(
    styles,
    "text-2xl"
  )}>{children}</h1>;
};
