"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {

        const variants = {
            primary: "bg-accent text-white hover:bg-accent/90 shadow-[0_0_20px_rgba(27,77,255,0.3)]",
            outline: "border border-secondary/30 text-foreground hover:border-secondary hover:bg-secondary/10",
            ghost: "text-muted-foreground hover:text-foreground hover:bg-white/5"
        };

        const sizes = {
            sm: "h-9 px-4 text-xs tracking-wide",
            md: "h-11 px-8 text-sm tracking-widest uppercase",
            lg: "h-14 px-10 text-base tracking-widest uppercase",
            icon: "h-10 w-10 p-0"
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50 disabled:pointer-events-none font-medium",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
