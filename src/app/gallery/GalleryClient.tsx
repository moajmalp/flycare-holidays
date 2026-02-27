"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import { Maximize2, X, Sparkles, MapPin, Camera, Play } from "lucide-react";

interface MediaItem {
    src: string;
    alt: string;
    type: "image" | "video";
}

export default function GalleryClient({
    images,
    videos
}: {
    images: { src: string, alt: string }[];
    videos: { src: string, alt: string }[];
}) {
    const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
    const [filter, setFilter] = useState<"All" | "Photos" | "Videos">("All");

    const allImages: MediaItem[] = images.map(img => ({ ...img, type: "image" as const }));
    const allVideos: MediaItem[] = videos.map(vid => ({ ...vid, type: "video" as const }));

    const media = filter === "All"
        ? [...allImages, ...allVideos]
        : filter === "Photos" ? allImages : allVideos;

    const categories = ["All", "Photos", "Videos"];

    return (
        <div className="bg-background text-foreground dark:border dark:border-white/10 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-brand-dark">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -mr-96 -mt-96" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-primary font-bold text-sm tracking-widest uppercase mb-8"
                    >
                        <Camera size={16} />
                        Visual Chronicles
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9]"
                    >
                        Captured <br />
                        <span className="text-primary italic">Moments</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Explore the world through the lens of our travelers. Every photo tells a story of discovery and wonder.
                    </motion.p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="sticky top-20 z-40 py-8 glass-nav backdrop-blur-xl border-b border-gray-100 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat as "All" | "Photos" | "Videos")}
                                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${filter === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                                    : "bg-soft-bg text-secondary dark:text-gray-300 hover:bg-soft-bg"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Masonry Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        layout
                        className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                    >
                        <AnimatePresence>
                            {media.map((item, i) => (
                                <motion.div
                                    key={item.src + i}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl dark:shadow-none border border-gray-100 dark:border-white/10"
                                    onClick={() => setSelectedMedia(item)}
                                >
                                    <div className="relative aspect-video bg-soft-bg">
                                        {item.type === "image" ? (
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        ) : (
                                            <video
                                                src={item.src}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                muted
                                                playsInline
                                            />
                                        )}
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10 pointer-events-none">
                                        <div className="w-full space-y-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-2 text-primary">
                                                {item.type === "video" ? <Play size={16} className="fill-current" /> : <MapPin size={16} />}
                                                <span className="text-sm font-black uppercase tracking-widest">
                                                    {item.type === "video" ? "Video" : "Photo"}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-white text-lg font-bold tracking-tight line-clamp-1">{item.alt}</h3>
                                                <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-white shrink-0 ml-4">
                                                    <Maximize2 size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {item.type === 'video' && (
                                        <div className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 backdrop-blur-md">
                                            <Play size={20} className="fill-current" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-xl"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <button className="absolute top-10 right-10 w-16 h-16 rounded-full glass-effect flex items-center justify-center text-white hover:bg-primary transition-colors z-[101]">
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="relative max-w-6xl w-full aspect-video rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(255,153,51,0.2)] bg-black/50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedMedia.type === "image" ? (
                                <Image
                                    src={selectedMedia.src}
                                    alt={selectedMedia.alt}
                                    fill
                                    className="object-contain"
                                />
                            ) : (
                                <video
                                    src={selectedMedia.src}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain"
                                />
                            )}
                            <div className="absolute bottom-10 left-10 right-10 glass-effect p-8 rounded-3xl border-white/20 pointer-events-none">
                                <h3 className="text-white text-2xl font-black mb-2 line-clamp-1">{selectedMedia.alt}</h3>
                                <div className="flex items-center gap-2 text-primary font-bold">
                                    {selectedMedia.type === "video" ? <Play size={18} className="fill-current" /> : <Sparkles size={18} />}
                                    <span>Captured by Flycare Travelers</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
