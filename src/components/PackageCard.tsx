"use client";

import React from "react";
import { Calendar, MapPin, Tag, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PackageCardProps {
    image: string;
    title: string;
    date: string;
    location: string;
    price?: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
    image,
    title,
    date,
    location,
    price,
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="group flex flex-col md:flex-row gap-8 p-6 bg-background/50 dark:bg-white/5 backdrop-blur-xl rounded-[3rem] border border-gray-100 dark:border-white/10 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl dark:shadow-none hover:shadow-primary/5 shadow-sm"
        >
            {/* Thumbnail Wrapper */}
            <div className="relative w-full md:w-56 h-56 flex-shrink-0 overflow-hidden rounded-[2rem] shadow-lg">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 224px"
                    loading="lazy"
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />

                {/* Floating Badge on Image */}
                <div className="absolute top-4 left-4">
                    <div className="glass-effect px-3 py-1.5 rounded-full flex items-center gap-2 border-white/20">
                        <Sparkles size={12} className="text-primary" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Trending</span>
                    </div>
                </div>
            </div>

            {/* Content Details */}
            <div className="flex flex-col justify-center flex-grow space-y-4 sm:space-y-6">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <span className="px-3 sm:px-4 py-1.5 bg-primary/10 text-primary text-[9px] sm:text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
                        Exclusive Deal
                    </span>
                    {price && (
                        <div className="flex items-center gap-2 group-hover:scale-105 transition-transform">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-soft-bg flex items-center justify-center text-primary">
                                <Tag size={12} className="sm:w-3.5 sm:h-3.5" fill="currentColor" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[7px] sm:text-[8px] font-black text-secondary dark:text-gray-300 uppercase tracking-[0.2em] -mb-1">From</span>
                                <span className="text-base sm:text-lg font-black text-brand-dark dark:text-white italic">₹{price}</span>
                            </div>
                        </div>
                    )}
                </div>

                <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-dark dark:text-white leading-tight group-hover:text-primary transition-colors tracking-tight">
                    {title}
                </h4>

                <div className="flex flex-wrap gap-4 sm:gap-8">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-soft-bg flex items-center justify-center text-primary">
                            <Calendar size={16} className="sm:w-4.5 sm:h-4.5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[7px] sm:text-[8px] font-black text-secondary dark:text-gray-300 uppercase tracking-[0.2em] -mb-0.5">Duration</span>
                            <span className="font-bold text-brand-dark dark:text-white text-xs sm:text-sm">{date}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-soft-bg flex items-center justify-center text-primary">
                            <MapPin size={16} className="sm:w-4.5 sm:h-4.5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[7px] sm:text-[8px] font-black text-secondary dark:text-gray-300 uppercase tracking-[0.2em] -mb-0.5">Location</span>
                            <span className="font-bold text-brand-dark dark:text-white text-xs sm:text-sm">{location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Icon */}
            <div className="flex md:flex flex-col justify-center items-center md:px-4 mt-4 md:mt-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-soft-bg flex items-center justify-center text-brand-dark dark:text-white group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                    <ArrowUpRight size={20} className="sm:w-6 sm:h-6" />
                </div>
            </div>
        </motion.div>
    );
};

export default PackageCard;
