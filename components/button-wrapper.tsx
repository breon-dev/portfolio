"use client";

//Imports
import { useRouter } from "next/navigation";

//Utils
import { cn } from "@/lib/utils";

interface ButtonWrapperProps {
  href?: string;
  type?: "modal" | "redirect";
  className?: string;
  children: React.ReactNode;
}

export const ButtonWrapper = ({
  href = "/",
  type = "redirect",
  className = "",
  children,
}: ButtonWrapperProps) => {
  
  const router = useRouter();
  function handleRedirectClick() {
    router.push(href);
  }

  function handleModalClick() {
    return 1;
  }

  if (type === "modal") {
    return ( 
      <span 
        onClick={handleModalClick} 
        className={cn(className)}
      >
        {children}
      </span>);
  }

  return (
    <span 
      onClick={handleRedirectClick} 
      className={cn(className)}
    >
      {children}
    </span>
  );
};
