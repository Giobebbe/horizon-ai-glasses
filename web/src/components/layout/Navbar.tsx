"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";

/**
 * Navbar Component
 *
 * Global navigation bar for the website.
 *
 * Features:
 * - Fixed position with backdrop blur effect.
 * - Responsive design (links hidden on mobile, simplified view).
 * - Smooth fade-in animation on mount.
 * - Links to anchor points on the page.
 */
export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-background/50 border-b border-border/40"
        >
            <Link href="/" className="text-xl font-bold tracking-widest uppercase text-foreground">
                HORIZON
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                {["Features", "Design", "Specs", "Pre-order"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <ModeToggle />
                <Link
                    href="#pre-order"
                    className="text-sm font-bold text-foreground border border-white/20 px-6 py-2 rounded-full hover:bg-foreground hover:text-background transition-all uppercase"
                >
                    Reserve
                </Link>
            </div>
        </motion.header>
    );
}
