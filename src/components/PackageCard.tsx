import React from "react";
// import Image from "next/image";
import { Calendar, MapPin, Tag } from "lucide-react";

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
        <div className="flex flex-col sm:flex-row gap-6 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            {/* Thumbnail */}
            <div className="relative w-full sm:w-48 h-48 flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center flex-grow py-2">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase tracking-wider">
                        Limited Time
                    </span>
                    {price && (
                        <div className="flex items-center gap-1 text-primary">
                            <Tag size={12} fill="currentColor" />
                            <span className="text-xs font-bold">from ₱{price}</span>
                        </div>
                    )}
                </div>

                <h4 className="text-xl font-bold text-brand-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                    {title}
                </h4>

                <div className="flex flex-wrap gap-6 text-sm text-secondary">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        <span className="font-medium">{date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        <span className="font-medium">{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
