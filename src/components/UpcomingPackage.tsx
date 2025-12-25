import React from "react";
// import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

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
        <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            {/* Thumbnail */}
            <div className="relative w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
                <h4 className="text-lg font-bold text-[#333333] mb-2 leading-tight">
                    {title}
                </h4>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-auto">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-[#76B947]" />
                        <span>{date}</span>
                    </div>
                    {location && (
                        <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-[#76B947]" />
                            <span>{location}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UpcomingPackage;
