"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * BrandStory Component
 *
 * Displays the "Origin" section of the page, highlighting the engineering and design philosophy.
 *
 * Features:
 * - Two-column layout (Text + Image).
 * - Scroll-triggered entrance animations using Framer Motion.
 * - Responsive stacking order (Image first on mobile, text first on desktop).
 */
export function BrandStory() {
    return (
        <section className="py-24 md:py-32 bg-muted relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 order-2 md:order-1"
                >
                    <div className="space-y-4">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase">
                            The Origin
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                            Engineering Precision Meets Artificial Intelligence
                        </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-lg font-light">
                        Born from a desire to merge digital capability with physical elegance, Horizon represents a new category of technology. We spent five years refining the frame geometry to ensure that the technology disappears, leaving only the experience.
                    </p>

                    <p className="text-muted-foreground leading-relaxed text-lg font-light">
                        Every curve is intentional. Every material is chosen for durability and weightlessness. This is not just a gadget; it is an extension of your senses.
                    </p>

                    <div className="pt-4">
                        <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background">
                            Discover Our Process
                        </Button>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-1 md:order-2 h-[500px] w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                >
                    <Image
                        src="/story-detail.png"
                        alt="Precision Engineering Detail"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>
            </div>
        </section>
    );
}
