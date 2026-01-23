"use client";

import React from "react";
import { Star, MapPin, ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface DestinationCardProps {
    image: string;
    title: string;
    subtitle?: string;
    price: string;
    rating: string;
    reviews: string;
    location: string;
    slug: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
    image,
    title,
    subtitle,
    price,
    rating,
    location,
    slug,
}) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col h-full"
        >
            {/* Image Wrapper */}
            <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    quality={85}
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-60" />

                {/* Top Badge */}
                <div className="absolute top-6 left-6 flex gap-2">
                    <div className="glass-effect px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border-white/20">
                        <Star size={12} className="text-primary fill-primary" />
                        <span className="text-[10px] font-black text-white">{rating}</span>
                    </div>
                </div>

                {/* Bottom Content on Image */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div className="glass-effect p-4 sm:p-5 rounded-xl sm:rounded-2xl border-white/20 backdrop-blur-md translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex justify-between items-end gap-2">
                            <div className="space-y-1 min-w-0">
                                <div className="flex items-center gap-1.5 text-white/70">
                                    <MapPin size={10} className="text-primary sm:w-3 sm:h-3" />
                                    <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest truncate">{location}</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight truncate">{title}</h3>
                            </div>
                            <div className="text-right flex-shrink-0">
                                <span className="block text-[7px] sm:text-[8px] font-black text-white/50 uppercase tracking-widest mb-0.5">Starting at</span>
                                <span className="text-base sm:text-lg font-black text-primary italic">₹{price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Reveal Section */}
            <div className="p-8 flex flex-col flex-grow bg-white">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-secondary">
                        <Clock size={14} className="text-primary" />
                        <span className="text-xs font-bold">{subtitle}</span>
                    </div>
                    <div className="text-[10px] font-black text-primary/40 uppercase tracking-widest">Premium Luxury</div>
                </div>

                <p className="text-secondary text-sm leading-relaxed line-clamp-2 font-medium mb-6">
                    Experience the mystical beauty of {title} with our handpicked luxury stays and private guides.
                </p>

                <div className="mt-auto">
                    <Link
                        href={`/itinerary/${slug}`}
                        className="w-full h-14 rounded-2xl bg-soft-bg border border-gray-100 flex items-center justify-center gap-2 group/btn hover:bg-primary transition-all duration-300"
                    >
                        <span className="text-sm font-black text-brand-dark uppercase tracking-widest group-hover/btn:text-white transition-colors">View Itinerary</span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-dark group-hover/btn:scale-110 transition-transform">
                            <ArrowUpRight size={16} />
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default DestinationCard;
