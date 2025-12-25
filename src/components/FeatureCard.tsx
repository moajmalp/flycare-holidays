"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex items-start gap-4 p-6 bg-soft-bg rounded-2xl transition-all duration-300 hover:bg-gray-100 group">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="text-primary w-6 h-6" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">{title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
