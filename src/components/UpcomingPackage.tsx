"use client";

import React from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface UpcomingPackageProps {
    image: string;
    title: string;
    date: string;
    location?: string;
}

const UpcomingPackage: React.FC<UpcomingPackageProps> = ({
    image,
    title,
    date,
    location,
}) => {
    return (
        <motion.div
            whileHover={{ x: 5 }}
            className="flex items-start gap-6 p-6 bg-white/50 backdrop-blur-xl rounded-[2rem] border border-gray-100 hover:border-primary/20 hover:bg-white transition-all duration-500 group shadow-sm hover:shadow-xl hover:shadow-primary/5"
        >
            {/* Thumbnail */}
            <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden rounded-2xl shadow-md">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center gap-3">
                <h4 className="text-xl font-black text-brand-dark leading-tight group-hover:text-primary transition-colors tracking-tight">
                    {title}
                </h4>
                <div className="flex flex-wrap gap-6 text-sm text-secondary font-bold">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        <span>{date}</span>
                    </div>
                    {location && (
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-primary" />
                            <span>{location}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Arrow */}
            <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ArrowRight size={20} />
                </div>
            </div>
        </motion.div>
    );
};

export default UpcomingPackage;
