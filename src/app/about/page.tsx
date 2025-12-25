"use client";

import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Shield, Target, Users, Award } from "lucide-react";

const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                <img
                    src="/images/kerala.png"
                    alt="About Flycare Holidays"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/60" />
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-6"
                    >
                        Our <span className="text-primary italic">Story</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Crafting premium travel experiences since 2015. We don't just plan trips; we create memories that last a lifetime.
                    </motion.p>
                </div>
            </section>

            {/* Brand Story */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-8 tracking-tighter leading-tight">
                                Passionate About <br /><span className="text-primary">Your Journey</span>
                            </h2>
                            <div className="space-y-6 text-secondary text-lg leading-relaxed">
                                <p>
                                    At Flycare Holidays, we believe that travel is more than just visiting new places. It's about personal growth, cultural exchange, and finding peace in the beauty of our world.
                                </p>
                                <p>
                                    Founded with a vision to provide hassle-free, premium travel services, we have grown into one of India's most trusted travel partners. Our team of experts meticulously crafts every itinerary to ensure it meets the highest standards of luxury and comfort.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-[56px] overflow-hidden shadow-2xl">
                            <img
                                src="/images/manali.png"
                                alt="Flycare Team"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-32 bg-soft-bg border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black text-brand-dark tracking-tighter mb-4">Core Values</h2>
                        <p className="text-secondary text-lg">The principles that guide everything we do.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Shield className="text-primary" size={32} />, title: "Trust & Safety", desc: "Your safety is our top priority, always." },
                            { icon: <Target className="text-primary" size={32} />, title: "Precision", desc: "Meticulously planned itineraries down to the last detail." },
                            { icon: <Users className="text-primary" size={32} />, title: "Customer Centric", desc: "We build our services around your dreams." },
                            { icon: <Award className="text-primary" size={32} />, title: "Excellence", desc: "A commitment to premium quality in every service." }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50">
                                <div className="mb-6">{value.icon}</div>
                                <h3 className="text-xl font-bold text-brand-dark mb-4">{value.title}</h3>
                                <p className="text-secondary leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
