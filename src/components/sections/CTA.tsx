"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/**
 * CTA (Call to Action) Component
 *
 * The final section of the page, encouraging users to join a waitlist.
 *
 * Features:
 * - Large, centered typography.
 * - Input field for email capture.
 * - Background glow effect for visual interest.
 */
export function CTA() {
    return (
        <section className="py-32 bg-background border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto space-y-10"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                        Stay Ahead.
                    </h2>
                    <p className="text-xl text-gray-300 font-light">
                        Join the waitlist for early access to the first production run and exclusive firmware updates.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <Input placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12" />
                        <Button size="lg" className="px-8 whitespace-nowrap">
                            Join Waitlist
                        </Button>
                    </div>

                    <p className="text-xs text-muted-foreground/50 uppercase tracking-widest">
                        Limited First Release &bull; Summer 2026
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
