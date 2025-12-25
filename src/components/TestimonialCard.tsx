import React from "react";
import { Star, Play } from "lucide-react";
// import Image from "next/image";

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
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
            {/* Rating */}
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={14}
                        className={i < rating ? "text-primary fill-primary" : "text-gray-200"}
                    />
                ))}
            </div>

            {/* Video Placeholder if available */}
            {videoThumb && (
                <div className="relative aspect-video mb-6 rounded-2xl overflow-hidden bg-gray-100 group">
                    <img src={videoThumb} alt="Review thumbnail" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play size={20} className="text-primary fill-primary translate-x-0.5" />
                        </div>
                    </div>
                </div>
            )}

            <p className="text-secondary leading-relaxed mb-8 flex-grow italic">
                "{content}"
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-soft-bg relative">
                    <img src={avatar} alt={name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div>
                    <h5 className="font-bold text-brand-dark leading-none pb-1">{name}</h5>
                    <p className="text-xs text-secondary">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
