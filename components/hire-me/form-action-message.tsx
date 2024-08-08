//icons
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

//utils
import { cn } from "@/lib/utils";

//interface
interface FormActionMessageProps {
  message: string | undefined;
  variant: "error" | "success";
}

export const FormActionMessage = ({
  message,
  variant,
}: FormActionMessageProps) => {
  if (!message) return null;

  return (
    <section
      className={cn(
        "p-3 rounded-md flex items-center gap-x-2 text-sm",
        variant === "error"
          ? "bg-destructive/15 text-destructive"
          : "bg-emerald-500/15 text-emerald-500"
      )}
    >
      {variant === "error" ? (
        <ExclamationTriangleIcon className="h-4 w-4" />
      ) : (
        <CheckCircledIcon className="h-4 w-4" />
      )}

      <p>{message}</p>
    </section>
  );
};
