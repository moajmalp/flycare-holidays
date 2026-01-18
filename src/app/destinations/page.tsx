"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles, MapPin, Search, Filter, Globe, Compass, ArrowRight, ArrowUpRight } from "lucide-react";

const DestinationsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

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

    const filteredDestinations = destinations.filter(dest =>
        dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-white min-h-screen">
            {/* Header / Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -mr-96 -mt-96" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -ml-48 -mb-48" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-primary font-bold text-sm tracking-widest uppercase mb-8"
                    >
                        <Compass size={16} />
                        Curated Global Collections
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter mb-8 leading-[0.9]"
                    >
                        Where to <br />
                        <span className="text-primary italic">Adventure Next?</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-12"
                    >
                        From the silent peaks of Himalayas to the vibrant soul of Southeast Asia, find your next story here.
                    </motion.p>

                    {/* Rich Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl mx-auto relative group"
                    >
                        <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                        <div className="relative glass-effect p-2 rounded-[2rem] flex items-center border-white/40 shadow-xl">
                            <div className="pl-6 text-secondary">
                                <Search size={24} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by city, region or country..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border-none focus:ring-0 text-brand-dark font-bold text-lg px-4 placeholder:text-secondary/50 placeholder:font-medium"
                            />
                            <button className="btn-primary py-4 px-8 rounded-[1.5rem] flex items-center gap-2">
                                <Filter size={18} />
                                <span className="hidden sm:inline">Filters</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="popLayout">
                        {filteredDestinations.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                            >
                                {filteredDestinations.map((dest, i) => (
                                    <motion.div
                                        key={dest.title}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <DestinationCard {...dest} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-24 h-24 bg-soft-bg rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                                    <Globe size={48} />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-dark mb-2">No matching destinations found</h3>
                                <p className="text-secondary">Try searching for something else or browse all locations.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Premium Package Highlight */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-effect rounded-[4rem] p-12 md:p-24 border-white/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Signature Collection</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter leading-tight">
                                        Limited Edition <br /><span className="text-primary italic">Global Retreats</span>
                                    </h2>
                                </div>
                                <p className="text-secondary text-xl leading-relaxed font-medium">
                                    Discover our hand-picked experiences designed for the ultra-premium traveler. Minimal groups, maximum soul.
                                </p>
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-secondary font-bold text-sm">
                                        <Sparkles size={16} className="text-primary" />
                                        Private Guided
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-secondary font-bold text-sm">
                                        <MapPin size={16} className="text-primary" />
                                        Luxury Stay
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <PackageCard
                                    title="Royal Rajasthan Experience"
                                    price="85,000"
                                    date="8 Days / 7 Nights"
                                    location="Rajasthan, India"
                                    image="/images/agra.png"
                                />
                                <div className="text-right">
                                    <Link href="/contact" className="group inline-flex items-center gap-3 text-lg font-bold text-brand-dark hover:text-primary transition-colors">
                                        Request Custom Itinerary
                                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DestinationsPage;

