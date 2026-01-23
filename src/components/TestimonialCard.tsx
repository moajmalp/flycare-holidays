"use client";

import React from "react";
import { Star, Play, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
    videoThumb?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    role,
    content,
    rating,
    avatar,
    videoThumb,
}) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative bg-white/50 backdrop-blur-xl p-10 rounded-[3rem] border border-gray-100 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full overflow-hidden"
        >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-8 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Quote size={48} className="text-primary fill-primary" />
                </div>

                {/* Video Placeholder if available */}
                {videoThumb && (
                    <div className="relative aspect-video mb-8 rounded-[2rem] overflow-hidden bg-gray-100 group/video">
                        <Image
                            src={videoThumb}
                            alt="Review thumbnail"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover/video:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            loading="lazy"
                            quality={85}
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover/video:bg-black/40 transition-colors">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover/video:scale-110 transition-transform shadow-2xl">
                                <Play size={24} className="text-white fill-white translate-x-0.5" />
                            </div>
                        </div>
                    </div>
                )}

                <p className="text-secondary text-xl leading-relaxed mb-10 pb-10 border-b border-gray-100 italic font-medium flex-grow">
                    &ldquo;{content}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden bg-soft-bg relative border-2 border-primary/10">
                            <Image 
                                src={avatar} 
                                alt={name} 
                                fill
                                className="object-cover"
                                sizes="56px"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <h5 className="text-lg font-black text-brand-dark leading-none pb-1 tracking-tight">{name}</h5>
                            <p className="text-sm font-bold text-secondary">{role}</p>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={14}
                                className={i < rating ? "text-primary fill-primary" : "text-gray-200"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
