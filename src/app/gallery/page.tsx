"use client";

import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const GalleryPage = () => {
    const images = [
        { src: "/images/kashmir.png", alt: "Kashmir Valley", size: "large" },
        { src: "/images/manali.png", alt: "Manali Snow", size: "small" },
        { src: "/images/kerala.png", alt: "Kerala Houseboat", size: "tall" },
        { src: "/images/vietnam.png", alt: "Vietnam Streets", size: "small" },
        { src: "/images/agra.png", alt: "Taj Mahal", size: "large" },
        { src: "/images/manali.png", alt: "Himachal Mountains", size: "tall" },
    ];

    return (
        <div className="bg-white min-h-screen">
            <section className="pt-40 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-brand-dark tracking-tighter mb-6"
                    >
                        Our Travel <span className="text-primary italic">Gallery</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-secondary text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Visual stories of beauty, adventure, and tranquility captured by our travelers across the globe.
                    </motion.p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative rounded-[40px] overflow-hidden group cursor-pointer shadow-xl"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <p className="text-white font-bold text-lg">{img.alt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GalleryPage;
