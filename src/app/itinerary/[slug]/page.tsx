"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { itineraryData, defaultItinerary } from "@/data/itinerary-data";
import Footer from "@/components/Footer";

// Note: In Next.js App Router, generateMetadata must be in a Server Component.
// Since this page is 'use client', metadata should ideally be set in a parent layout or the page should be restructured.
// However, I will keep it functional and clean for now.

const ItineraryPage = ({ params }: { params: { slug: string } }) => {
    const data = itineraryData[params.slug] || defaultItinerary;

    return (
        <div className="bg-white min-h-screen">
            {/* Header Image Section */}
            <section className="relative h-[65vh] w-full overflow-hidden">
                <Image
                    src={data.headerImage}
                    alt={data.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-10 md:p-20 text-center md:text-left bg-gradient-to-t from-white via-white/50 to-transparent pt-32">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 bg-primary text-white text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em]"
                        >
                            Featured Itinerary
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-brand-dark text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6"
                        >
                            {data.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-secondary text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
                        >
                            {data.description}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm text-secondary mb-16 overflow-x-auto whitespace-nowrap">
                    <Link href="/" className="hover:text-primary transition-colors font-bold">Home</Link>
                    <ChevronRight size={14} className="mx-3 flex-shrink-0 opacity-40" />
                    <span className="text-brand-dark font-black">Itinerary</span>
                    <ChevronRight size={14} className="mx-3 flex-shrink-0 opacity-40" />
                    <span className="text-primary font-black">{data.title}</span>
                </nav>

                {/* Itinerary Details */}
                <div className="space-y-16">
                    {data.days.map((dayObj: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 border-l-2 border-gray-100/80 group"
                        >
                            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-primary shadow-lg shadow-primary/30 group-hover:scale-125 transition-transform duration-300" />

                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-4xl font-black text-primary/10 tracking-tighter">0{dayObj.day}</span>
                                    <span className="inline-block px-4 py-1 bg-soft-bg text-primary text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
                                        Day {dayObj.day}
                                    </span>
                                </div>
                                <h2 className="text-3xl font-black text-brand-dark tracking-tight leading-tight">{dayObj.header}</h2>
                            </div>

                            <ul className="space-y-6">
                                {dayObj.points.map((point: string, pIdx: number) => (
                                    <li key={pIdx} className="flex items-start gap-5 text-secondary leading-relaxed text-base md:text-lg">
                                        <div className="mt-2.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary/20" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-32 p-10 md:p-20 rounded-[56px] bg-brand-dark text-white text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -translate-y-48 translate-x-48 blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full translate-y-48 -translate-x-48 blur-[100px]" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mb-8 border border-primary/30">
                            <Image src="/images/kerala.png" alt="Flycare" width={40} height={40} className="rounded-lg object-cover" />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter max-w-lg leading-[1.1]">Ready to make this trip a reality?</h3>
                        <p className="mb-12 text-gray-400 max-w-md mx-auto text-lg">Contact our travel experts via WhatsApp or Inquiry to start planning your Flycare adventure.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="btn-primary px-12 py-5 text-lg shadow-primary/20">Enquire Now</button>
                            <button className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all text-lg">
                                WhatsApp Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ItineraryPage;
