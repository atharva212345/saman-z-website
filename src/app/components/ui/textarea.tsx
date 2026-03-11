import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none border-input placeholder:text-muted-foreground focus-visible:border-[#1E88E5] focus-visible:ring-[#1E88E5]/20 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-24 w-full rounded-xl border-2 bg-white px-4 py-3 text-base transition-all duration-300 outline-none focus-visible:ring-4 focus-visible:shadow-lg focus-visible:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-sm hover:border-gray-400 hover:shadow-md",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };