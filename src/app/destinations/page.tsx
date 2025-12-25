"use client";

import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import Footer from "@/components/Footer";

const DestinationsPage = () => {
    const destinations = [
        {
            title: "Amazing Kashmir",
            subtitle: "5 Days / 4 Nights",
            image: "/images/kashmir.png",
            price: "12,999",
            rating: "4.8",
            reviews: "2.4k",
            location: "Jammu & Kashmir",
            slug: "amazing-kashmir"
        },
        {
            title: "Mesmerizing Manali",
            subtitle: "5 Days / 4 Nights",
            image: "/images/manali.png",
            price: "14,500",
            rating: "4.9",
            reviews: "1.8k",
            location: "Himachal Pradesh",
            slug: "mesmerizing-manali"
        },
        {
            title: "Kerala Delight",
            subtitle: "4 Days / 3 Nights",
            image: "/images/kerala.png",
            price: "11,200",
            rating: "4.7",
            reviews: "3.1k",
            location: "Kerala",
            slug: "kerala-delight"
        },
        {
            title: "Vietnam Adventure",
            subtitle: "7 Days / 6 Nights",
            image: "/images/vietnam.png",
            price: "45,000",
            rating: "4.9",
            reviews: "4.2k",
            location: "Vietnam",
            slug: "vietnam-adventure"
        },
        {
            title: "Golden Triangle",
            subtitle: "3 Days / 2 Nights",
            image: "/images/agra.png",
            price: "9,999",
            rating: "4.6",
            reviews: "2.7k",
            location: "Delhi/Agra",
            slug: "golden-triangle"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="pt-40 pb-20 bg-soft-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-brand-dark tracking-tighter mb-6"
                    >
                        Explore <span className="text-primary italic">Destinations</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-secondary text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        From snow-capped mountains to serene backwaters, find your perfect escape from our curated collection of destinations.
                    </motion.p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {destinations.map((dest, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <DestinationCard {...dest} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Packages */}
            <section className="py-24 bg-brand-dark text-white rounded-[64px] mx-4 md:mx-8 mb-24 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                                Featured <span className="text-primary italic">Tour Packages</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-xl">
                                Hand-picked experiences designed for the ultra-premium traveler.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <PackageCard
                            title="Royal Rajasthan Experience"
                            price="85,000"
                            date="8 Days"
                            location="Rajasthan, India"
                            image="/images/agra.png"
                        />
                        <PackageCard
                            title="Bali Island Escape"
                            price="95,000"
                            date="6 Days"
                            location="Bali, Indonesia"
                            image="/images/vietnam.png"
                        />
                        <PackageCard
                            title="Dubai Luxury Getaway"
                            price="1,20,000"
                            date="5 Days"
                            location="Dubai, UAE"
                            image="/images/kashmir.png"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DestinationsPage;
