"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
    {
        name: "Horizon Black",
        price: "$399",
        color: "bg-neutral-900",
        image: "/product-black.png"
    },
    {
        name: "Titanium Silver",
        price: "$449",
        color: "bg-neutral-400",
        image: "/product-silver.png"
    },
    {
        name: "Carbon Edge",
        price: "$499",
        color: "bg-neutral-800",
        image: "/product-carbon.png"
    },
];

/**
 * ProductShowcase Component
 *
 * Displays a grid of product variants (SKUs) available for pre-order.
 *
 * Features:
 * - Dynamic rendering of product cards from a configuration array.
 * - Hover interactions on cards (image zoom, button reveal).
 * - "Glassmorphism" card style.
 */
export function ProductShowcase() {
    return (
        <section id="pre-order" className="py-32 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">The Collection</h2>
                    <p className="text-xl text-white/80">Choose your aesthetic.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card className="h-full border-white/10 bg-white/[0.02] hover:bg-white/[0.04]">
                                <CardContent className="p-0 flex flex-col h-full">
                                    {/* Product Image */}
                                    <div className="h-80 w-full relative bg-neutral-900/50 flex items-center justify-center overflow-hidden group">
                                        <div className={`absolute inset-0 w-full h-full opacity-20 blur-3xl ${product.color}`} />

                                        <div className="relative z-10 w-full h-full p-8 transition-transform duration-500 group-hover:scale-105">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain drop-shadow-2xl"
                                            />
                                        </div>

                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow text-center">
                                        <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                                        <p className="text-accent font-medium text-lg mb-8">{product.price}</p>

                                        <Button className="w-full mt-auto mb-2" variant="outline">Select</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
