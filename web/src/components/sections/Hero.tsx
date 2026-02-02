"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

/**
 * Hero Section Component
 *
 * Displays the main introduction to the Horizon AI Glasses.
 *
 * Key features:
 * - Canvas-based image sequence animation triggered by scroll.
 * - Stickily positioned container to allow for the scroll animation to play out.
 * - Framer Motion animations for text and buttons.
 *
 * The image sequence is loaded from `/public/hero-sequence/` and rendered onto a canvas
 * to ensure high performance smooth scrolling.
 */
export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const totalFrames = 80;

    // Scroll progress for the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map scroll progress (0 to 1) to frame index (0 to 79)
    // We stop the animation slightly before the end (0.9) to let the user scroll out smoothly
    const currentFrame = useTransform(smoothProgress, [0, 0.8], [0, totalFrames - 1]);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, "0");
            img.src = `/hero-sequence/Video_Flow_${frameNumber}.jpg`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setImagesLoaded(true);
                    setImages(loadedImages);
                }
            };
            // Use index to preserve order since onload allows async completion
            loadedImages[i] = img;
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        const render = () => {
            if (!imagesLoaded || images.length === 0) return;

            // Get current frame index from the motion value
            let frameIndex = Math.floor(currentFrame.get());
            // Clamp frame index
            frameIndex = Math.min(totalFrames - 1, Math.max(0, frameIndex));

            const img = images[frameIndex];
            if (!img) return;

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgWidth = img.width;
            const imgHeight = img.height;

            const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
            const x = (canvasWidth / 2) - (imgWidth / 2) * scale;
            const y = (canvasHeight / 2) - (imgHeight / 2) * scale;

            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
        };

        // Render loop synced to motion value updates
        const unsubscribe = currentFrame.on("change", render);

        // Initial render
        render();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render(); // Re-render on resize
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [imagesLoaded, images, currentFrame]);

    return (
        <div ref={containerRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
                {/* Background Canvas Sequence */}
                <div className="absolute inset-0 z-0">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-neutral-900/40" />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center space-y-8 h-full flex flex-col justify-center items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white uppercase text-balance"
                    >
                        Meet the Future
                        <br />
                        <span className="text-white/80">of Vision</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-light"
                    >
                        Precision-engineered smart eyewear powered by advanced AI.
                        Seamlessly integrated into your reality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex justify-center gap-4"
                    >
                        <Button size="lg" className="rounded-full">
                            Pre-order Now
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10">
                            Watch Film
                        </Button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="text-white/50 w-8 h-8" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
