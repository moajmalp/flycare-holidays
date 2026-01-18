"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col gap-6 p-10 bg-white/50 backdrop-blur-xl rounded-[2.5rem] border border-gray-100 hover:border-primary/20 hover:bg-white transition-all duration-500 group shadow-sm hover:shadow-2xl hover:shadow-primary/5"
        >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/10">
                <Icon size={32} />
            </div>
            <div className="space-y-3">
                <h3 className="text-2xl font-black text-brand-dark tracking-tight">{title}</h3>
                <p className="text-secondary text-lg leading-relaxed font-medium">{description}</p>
            </div>
        </motion.div>
    );
};

export default FeatureCard;
