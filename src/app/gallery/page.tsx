"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import { Maximize2, X, Compass, Sparkles, MapPin, Camera } from "lucide-react";

const GalleryPage = () => {
    const [selectedImg, setSelectedImg] = useState<null | { src: string, alt: string }>(null);
    const [filter, setFilter] = useState("All");

    const images = [
        { src: "/images/kashmir.png", alt: "Dal Lake Serenity", category: "Nature" },
        { src: "/images/manali.png", alt: "Solang Valley Snow", category: "Adventure" },
        { src: "/images/kerala.png", alt: "Alleppey Houseboat", category: "Serenity" },
        { src: "/images/vietnam.png", alt: "Hanoi Street Life", category: "Culture" },
        { src: "/images/agra.png", alt: "Taj Mahal Sunrise", category: "History" },
        { src: "/images/manali.png", alt: "Rohtang Pass View", category: "Adventure" },
        { src: "/images/kerala.png", alt: "Munnar Tea Gardens", category: "Nature" },
        { src: "/images/vietnam.png", alt: "Ha Long Bay Sails", category: "Nature" },
    ];

    const categories = ["All", "Nature", "Adventure", "Serenity", "Culture", "History"];

    const filteredImages = filter === "All"
        ? images
        : images.filter(img => img.category === filter);

    return (
        <div className="bg-white min-h-screen">
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
                        className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]"
                    >
                        Captured <br />
                        <span className="text-primary italic">Moments</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Explore the world through the lens of our travelers. Every photo tells a story of discovery and wonder.
                    </motion.p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="sticky top-20 z-40 py-8 glass-nav backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${filter === cat
                                        ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                                        : "bg-soft-bg text-secondary hover:bg-gray-200"
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
                            {filteredImages.map((img, i) => (
                                <motion.div
                                    key={i}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl border border-gray-100"
                                    onClick={() => setSelectedImg(img)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                                        <div className="w-full space-y-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-2 text-primary">
                                                <MapPin size={16} />
                                                <span className="text-sm font-black uppercase tracking-widest">{img.category}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-white text-2xl font-bold tracking-tight">{img.alt}</h3>
                                                <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-white">
                                                    <Maximize2 size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-xl"
                        onClick={() => setSelectedImg(null)}
                    >
                        <button className="absolute top-10 right-10 w-16 h-16 rounded-full glass-effect flex items-center justify-center text-white hover:bg-primary transition-colors">
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="relative max-w-6xl w-full aspect-video rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(255,153,51,0.2)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImg.src}
                                alt={selectedImg.alt}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-10 left-10 right-10 glass-effect p-8 rounded-3xl border-white/20">
                                <h3 className="text-white text-3xl font-black mb-2">{selectedImg.alt}</h3>
                                <div className="flex items-center gap-2 text-primary font-bold">
                                    <Sparkles size={18} />
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
};

export default GalleryPage;
