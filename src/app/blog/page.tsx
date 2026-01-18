"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Search, Tag, TrendingUp, Sparkles, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

const BlogPage = () => {
    const posts = [
        {
            title: "Top 10 Hidden Gems in Kashmir You Must Visit",
            excerpt: "Beyond Dal Lake and Gulmarg, Kashmir hides many secrets that only true travelers know. From the mystical valleys of Gurez to the crystal clear waters of Nilnag...",
            date: "Dec 20, 2025",
            category: "Guides",
            image: "/images/kashmir.png",
            author: "Sarah Jenkins",
            readTime: "8 min read"
        },
        {
            title: "Plan a Sustainable Trip to Vietnam",
            excerpt: "Sustainable travel is more than a trend. Learn how to visit Vietnam with care for the environment while supporting local communities in Sapa and beyond...",
            date: "Dec 15, 2025",
            category: "Eco-Travel",
            image: "/images/vietnam.png",
            author: "Marc Rossi",
            readTime: "6 min read"
        },
        {
            title: "The Ultimate Kerala Backwaters Guide",
            excerpt: "Finding the right houseboat can make or break your Kerala trip. Here's everything you need to know about navigating the serene backwaters of Alleppey...",
            date: "Dec 10, 2025",
            category: "Experiences",
            image: "/images/kerala.png",
            author: "Anita Nair",
            readTime: "10 min read"
        },
        {
            title: "Why Winter is the best for Manali",
            excerpt: "Snow activities, cozy stays, and the magical atmosphere of Manali in December. A complete guide to the winter wonderland of Himachal Pradesh...",
            date: "Dec 05, 2025",
            category: "Seasonal",
            image: "/images/manali.png",
            author: "Vikram Singh",
            readTime: "5 min read"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-brand-dark">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -mr-96 -mt-96" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-primary font-bold text-sm tracking-widest uppercase mb-8"
                        >
                            <TrendingUp size={16} />
                            Traveler's Journal
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9]"
                        >
                            Travel <br />
                            <span className="text-primary italic">Inspiration</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg md:text-xl max-w-2xl font-medium leading-relaxed"
                        >
                            Expert tips, immersive destination guides, and untold stories from the world's most beautiful corners.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Featured Post Header */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Main Feed */}
                        <div className="lg:col-span-8 space-y-20">
                            {posts.map((post, i) => (
                                <motion.article
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                                >
                                    <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute top-6 left-6 px-6 py-2 glass-effect rounded-full text-xs font-black text-white uppercase tracking-widest">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-6 text-sm text-secondary font-bold">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} className="text-primary" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} className="text-primary" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black text-brand-dark group-hover:text-primary transition-colors tracking-tight leading-tight">
                                            {post.title}
                                        </h2>
                                        <p className="text-secondary text-base leading-relaxed line-clamp-3 font-medium">
                                            {post.excerpt}
                                        </p>
                                        <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-soft-bg flex items-center justify-center text-primary">
                                                    <User size={18} />
                                                </div>
                                                <span className="font-bold text-brand-dark">{post.author}</span>
                                            </div>
                                            <Link href={`/blog/${i}`} className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-brand-dark group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                                <ChevronRight size={24} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-12">
                            {/* Search */}
                            <div className="p-10 rounded-[3rem] bg-soft-bg/50 border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-6">Search Articles</h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Find inspiration..."
                                        className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/20 outline-none font-bold text-brand-dark"
                                    />
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="p-10 rounded-[3rem] glass-effect border-gray-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-6">Popular Tags</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Adventure", "Luxury", "Culture", "Tips", "Seasonal", "Eco-Travel", "Guides"].map(tag => (
                                        <button key={tag} className="px-5 py-2 rounded-full bg-white border border-gray-100 text-secondary font-bold text-sm hover:border-primary hover:text-primary transition-all">
                                            #{tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="p-10 rounded-[3rem] bg-brand-dark text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                                <div className="relative z-10 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                                        <Sparkles size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">Get Travel Secrets</h3>
                                    <p className="text-white/60 font-medium">Subscribe to our newsletter for exclusive itineraries and deals.</p>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-6 py-4 bg-white/10 rounded-2xl border border-white/10 text-white placeholder:text-white/30 font-bold outline-none focus:border-primary/50"
                                    />
                                    <button className="btn-primary w-full py-4 rounded-2xl font-black uppercase tracking-widest shadow-none">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPage;
