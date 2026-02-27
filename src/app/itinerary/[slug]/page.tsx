"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, MapPin, Clock, Star, Sparkles, ArrowRight, MessageCircle, Info, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { itineraryData, defaultItinerary } from "@/data/itinerary-data";
import Footer from "@/components/Footer";

const ItineraryPage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = React.use(params);
    const data = itineraryData[slug] || defaultItinerary;

    return (
        <div className="bg-background text-foreground dark:border dark:border-white/10 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] w-full overflow-hidden">
                <Image
                    src={data.headerImage}
                    alt={data.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-10 md:p-24">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-primary font-bold text-sm tracking-widest uppercase mb-8"
                        >
                            <Sparkles size={16} />
                            Signature Itinerary
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                            <div className="space-y-6">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-6xl font-black text-brand-dark dark:text-white tracking-tighter leading-[0.9]"
                                >
                                    {data.title.split(' ').map((word, i) => (
                                        <span key={i} className={i === 1 ? "text-primary italic block" : ""}>{word} </span>
                                    ))}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg md:text-xl font-medium max-w-xl leading-relaxed"
                                >
                                    {data.description}
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="glass-effect p-8 rounded-[3rem] border-white/40 dark:border-brand-dark/40 flex flex-wrap gap-10 items-center justify-between shadow-2xl dark:shadow-none"
                            >
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-primary">
                                        <Clock size={16} />
                                        <span className="text-xs font-black uppercase tracking-widest">Duration</span>
                                    </div>
                                    <p className="text-brand-dark dark:text-white font-black text-lg">{data.days.length} Days / {data.days.length - 1} Nights</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-primary">
                                        <Star size={16} fill="currentColor" />
                                        <span className="text-xs font-black uppercase tracking-widest">Experience</span>
                                    </div>
                                    <p className="text-brand-dark dark:text-white font-black text-lg">Ultra Luxury</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-primary">
                                        <MapPin size={16} />
                                        <span className="text-xs font-black uppercase tracking-widest">Start City</span>
                                    </div>
                                    <p className="text-brand-dark dark:text-white font-black text-lg">Srinagar</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center text-sm text-secondary dark:text-gray-300 mb-20 overflow-x-auto whitespace-nowrap bg-soft-bg/50 w-fit px-6 py-3 rounded-full">
                        <Link href="/" className="hover:text-primary transition-colors font-bold">Home</Link>
                        <ChevronRight size={14} className="mx-3 opacity-40 shrink-0" />
                        <Link href="/destinations" className="hover:text-primary transition-colors font-bold">Destinations</Link>
                        <ChevronRight size={14} className="mx-3 opacity-40 shrink-0" />
                        <span className="text-brand-dark dark:text-white font-black">{data.title}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* Itinerary Timeline */}
                        <div className="lg:col-span-8 space-y-24">
                            <div className="space-y-4">
                                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">The Journey</span>
                                <h2 className="text-3xl md:text-4xl font-black text-brand-dark dark:text-white tracking-tighter italic">Day by Day</h2>
                            </div>

                            <div className="relative">
                                {/* Vertical Line with Gradient */}
                                <div className="absolute left-[23px] top-6 bottom-6 w-1 bg-gradient-to-b from-primary via-primary/20 to-transparent rounded-full" />

                                <div className="space-y-24">
                                    {data.days.map((dayObj, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="relative pl-24 group"
                                        >
                                            {/* Day Bubble */}
                                            <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-background text-foreground dark:border dark:border-white/10 border-2 border-primary shadow-[0_0_20px_rgba(255,153,51,0.2)] flex items-center justify-center font-black text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10">
                                                {dayObj.day}
                                            </div>

                                            <div className="space-y-8">
                                                <div className="space-y-2">
                                                    <span className="text-primary font-black text-sm uppercase tracking-widest">Day {dayObj.day}</span>
                                                    <h3 className="text-3xl font-black text-brand-dark dark:text-white tracking-tight leading-tight group-hover:text-primary transition-colors">
                                                        {dayObj.header}
                                                    </h3>
                                                </div>

                                                <ul className="space-y-6">
                                                    {dayObj.points.map((point: string, pIdx: number) => (
                                                        <li key={pIdx} className="flex items-start gap-5 text-secondary dark:text-gray-300 leading-relaxed text-lg font-medium">
                                                            <div className="mt-3 flex-shrink-0 w-3 h-3 rounded-full bg-primary/20 border-2 border-primary/40 group-hover:bg-primary/40 transition-colors" />
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Visual Accent */}
                                                <div className="pt-4 flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                                    {[1, 2].map(i => (
                                                        <div key={i} className="min-w-[200px] h-32 relative rounded-3xl bg-soft-bg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-gray-100 dark:border-white/10">
                                                            <Image src={data.headerImage} alt="Feature" fill className="object-cover" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Booking Sidebar */}
                        <aside className="lg:col-span-4 space-y-12">
                            <div className="sticky top-32 space-y-12">
                                {/* Price Card */}
                                <div className="p-10 rounded-[4rem] bg-brand-dark text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-700" />

                                    <div className="relative z-10 space-y-8 text-center">
                                        <div className="space-y-2">
                                            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs">starting from</span>
                                            <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">₹12,499</div>
                                            <span className="text-white/40 font-bold block">per person / twin sharing</span>
                                        </div>

                                        <div className="space-y-4 pt-4 border-t border-white/10">
                                            {[
                                                "Luxury Accommodations",
                                                "Private Guided Tours",
                                                "All Transfers Included",
                                                "Premium Meal Plans"
                                            ].map((inc, i) => (
                                                <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/70">
                                                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                                                    {inc}
                                                </div>
                                            ))}
                                        </div>

                                        <button className="btn-primary w-full py-6 rounded-3xl text-xl shadow-none">
                                            Secure Your Spot
                                        </button>
                                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Instant availability check</p>
                                    </div>
                                </div>

                                {/* Support Card */}
                                <div className="p-10 rounded-[3rem] glass-effect border-gray-100 dark:border-white/10 text-center space-y-8 shadow-2xl dark:shadow-none shadow-primary/5">
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                                        <MessageCircle size={40} fill="currentColor" className="opacity-20" />
                                        <MessageCircle size={40} className="absolute" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-black text-brand-dark dark:text-white tracking-tight">Need Customization?</h3>
                                        <p className="text-secondary dark:text-gray-300 font-medium px-4">Our travel designers can tweak this itinerary to match your specific taste.</p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <a href="https://wa.me/919876543210" className="flex items-center justify-center gap-2 font-black text-brand-dark dark:text-white hover:text-primary transition-colors text-lg">
                                            Chat with an Expert <ArrowRight size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto rounded-[4rem] bg-soft-bg p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                    <div className="relative z-10 space-y-12">
                        <h2 className="text-3xl md:text-5xl font-black text-brand-dark dark:text-white tracking-tighter leading-tight max-w-3xl mx-auto">
                            Don&apos;t just witness the beauty, <span className="text-primary italic">Live It.</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button className="btn-primary py-6 px-12 text-xl shadow-2xl dark:shadow-none">Download Brouchure</button>
                            <Link href="/contact" className="text-brand-dark dark:text-white font-black text-xl hover:text-primary underline underline-offset-8 decoration-primary transition-all decoration-4">
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ItineraryPage;
