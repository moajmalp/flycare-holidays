"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Shield, Target, Users, Award, GlassWater, Compass, Sparkles, MapPin, Globe } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="bg-background text-foreground dark:border dark:border-white/10 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/kerala.png"
                    alt="About Flycare Holidays"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-brand-dark/50 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-brand-dark/60" />

                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-primary font-bold text-sm tracking-widest uppercase mb-8"
                    >
                        <Sparkles size={16} />
                        Our Journey Since 2015
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]"
                    >
                        Pioneering <br />
                        <span className="text-primary italic">Premium Travel</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        We don&apos;t just plan trips; we craft immersive experiences that bridge cultures and create lifelong memories.
                    </motion.p>
                </div>

                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -ml-48 -mb-48" />
            </section>

            {/* Brand Story & Mission */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-10"
                            >
                                <div className="space-y-4">
                                    <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Our Heritage</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark dark:text-white tracking-tighter leading-tight">
                                        Crafting the Art of <br /><span className="text-primary italic">Exploration</span>
                                    </h2>
                                </div>

                                <div className="space-y-8 text-secondary dark:text-gray-300 text-lg leading-relaxed">
                                    <p className="font-medium">
                                        Founded on the principle that luxury is in the details, Flycare Holidays has redefined what it means to travel with intention.
                                    </p>
                                    <p className="text-secondary/70">
                                        From the majestic peaks of Kashmir to the serene backwaters of Kerala, our mission is to provide an unparalleled level of service and cultural depth in every journey we curate. We believe every traveler deserves a story worth telling.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-8 pt-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                            <Globe size={32} />
                                        </div>
                                        <div>
                                            <div className="text-3xl font-black text-brand-dark dark:text-white">50+</div>
                                            <div className="text-sm font-bold text-secondary dark:text-gray-300 uppercase tracking-wider">Destinations</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                            <Users size={32} />
                                        </div>
                                        <div>
                                            <div className="text-3xl font-black text-brand-dark dark:text-white">10K+</div>
                                            <div className="text-sm font-bold text-secondary dark:text-gray-300 uppercase tracking-wider">Travellers</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative group">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl dark:shadow-none"
                            >
                                <Image
                                    src="/images/manali.png"
                                    alt="Flycare Team"
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />

                                <div className="absolute bottom-10 left-10 right-10 glass-effect p-8 rounded-3xl border-white/20 animate-float">
                                    <h3 className="text-white text-2xl font-bold mb-2">Our Vision</h3>
                                    <p className="text-white/70">To become the world&apos;s most desired curator of authentic and sustainable travel experiences.</p>
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values - Rich Glass Design */}
            <section className="py-32 bg-brand-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--glass-bg)_1px,_transparent_1px)] bg-[length:40px_40px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24 space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Our Foundation</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter italic">Values that Move Us</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Shield size={32} />, title: "Trust & Safety", desc: "Your safety is our uncompromised priority in every destination." },
                            { icon: <Target size={32} />, title: "Precision", desc: "Every minute of your journey is meticulously planned and verified." },
                            { icon: <Users size={32} />, title: "Guest First", desc: "We design experiences around your dreams, not just itineraries." },
                            { icon: <Award size={32} />, title: "Excellence", desc: "Delivering a premium standard of hospitality across the globe." }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="dark-glass p-10 rounded-[3rem] border-white/5 group hover:border-primary/30 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{value.title}</h3>
                                <p className="text-white/50 leading-relaxed text-base">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final Block */}
            <section className="py-32 px-4">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-black text-brand-dark dark:text-white tracking-tighter leading-[0.9]">
                        Ready to Begin Your <br />
                        <span className="text-primary italic">Next Chapter?</span>
                    </h2>
                    <p className="text-secondary dark:text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Join thousands of travelers who have found their passion for exploration with Flycare Holidays.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                        <Link href="/contact" className="btn-primary py-6 px-12 text-xl shadow-2xl dark:shadow-none">
                            Start Planning
                        </Link>
                        <Link href="/destinations" className="btn-outline py-6 px-12 text-xl glass-effect">
                            View Destinations
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;

