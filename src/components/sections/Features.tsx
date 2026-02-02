"use client";

import { motion } from "framer-motion";
import { Glasses, Mic, Battery, ArrowRight } from "lucide-react";

const features = [
    {
        icon: Glasses,
        title: "Private In-Lens Display",
        description: "Discreet information layered naturally into your field of view. Only you can see it.",
    },
    {
        icon: Mic,
        title: "AI Voice Assistant",
        description: "Instant, hands-free interaction powered by next-gen language models. Just ask.",
    },
    {
        icon: Battery,
        title: "All-Day Performance",
        description: "Optimized power architecture delivering 18 hours of continuous use in a featherweight frame.",
    },
];

/**
 * Features Component
 *
 * Displays key product pillars in a grid layout.
 *
 * Features:
 * - Grid of features with icons, titles, and descriptions.
 * - Staggered entrance animations for each card.
 * - Hover effects including scaling and shadow changes.
 */
export function Features() {
    return (
        <section className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300"
                        >
                            <div className="mb-6 inline-block p-4 rounded-full bg-white/5 text-accent group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(27,77,255,0.1)] group-hover:shadow-[0_0_25px_rgba(27,77,255,0.3)]">
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                {feature.description}
                            </p>

                            <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-white/60 group-hover:text-accent transition-colors">
                                Learn more <ArrowRight size={14} className="ml-2" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
