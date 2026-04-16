"use client";
import { cn } from "@/lib/utils";
import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    // 1. Base styles
    // Added 'gap-2' here. This perfectly spaces an icon and text if both exist,
    // but remains invisible if you only pass text.
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-display tracking-[0.05em] uppercase rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    // 2. Variants
    const variants = {
      // Your specific primary styling
      primary: "bg-primary text-primary-foreground hover:bg-white/90",
      // Placeholder alternative variants you can adjust as needed
      secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
      outline: "border border-button-border bg-transparent hover:bg-zinc-800",
      ghost: "bg-transparent text-t-secondary hover:text-t-primary",
    };

    // 3. Sizes
    const sizes = {
      sm: "px-4 py-2.5 text-[10px]",
      // Your specific padding and text size setup as the default 'md' size
      md: "px-6 py-2.5 text-xs",
      lg: "px-8 py-4 text-sm",
      icon: "h-[44px] w-[44px] p-0", // Matches the height of the py-3.5 md button
    };

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className,
    );

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
