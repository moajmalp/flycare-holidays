"use client";

import React from "react";
import Image from "next/image";
import { Star, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";

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
    reviews,
    location,
    slug,
}) => {
    return (
        <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl group flex flex-col h-full">
            {/* Image Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-[10px] text-secondary font-bold mr-1">starts at</span>
                    <span className="text-sm font-black text-primary">₱{price}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-bold text-brand-dark mb-1">{title}</h3>
                    <div className="flex items-center gap-2">
                        <p className="text-xs font-medium text-secondary">{subtitle}</p>
                        <span className="text-gray-300">|</span>
                        <div className="flex items-center gap-1">
                            <Star size={12} className="text-primary fill-primary" />
                            <span className="text-xs font-bold text-brand-dark">{rating}</span>
                            <span className="text-[10px] text-gray-400">({reviews})</span>
                        </div>
                    </div>
                </div>

                {/* Location */}
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-secondary">
                        <MapPin size={14} className="text-primary" />
                        <span className="text-[11px] font-medium">{location}</span>
                    </div>
                    <Link
                        href={`/itinerary/${slug}`}
                        className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-md shadow-primary/20 group-hover:rotate-45"
                    >
                        <ChevronRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;
