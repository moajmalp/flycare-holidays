"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogPage = () => {
    const posts = [
        {
            title: "Top 10 Hidden Gems in Kashmir You Must Visit",
            excerpt: "Beyond Dal Lake and Gulmarg, Kashmir hides many secrets that only true travelers know...",
            date: "Dec 20, 2025",
            category: "Guides",
            image: "/images/kashmir.png",
            author: "Travel Expert"
        },
        {
            title: "How to Plan a Sustainable Trip to Vietnam",
            excerpt: "Sustainable travel is more than a trend. Learn how to visit Vietnam with care for the environment...",
            date: "Dec 15, 2025",
            category: "Eco-Travel",
            image: "/images/vietnam.png",
            author: "Local Guide"
        },
        {
            title: "The Ultimate Kerala Backwaters Experience Guide",
            excerpt: "Finding the right houseboat can make or break your Kerala trip. Here's everything you need to know...",
            date: "Dec 10, 2025",
            category: "Experiences",
            image: "/images/kerala.png",
            author: "Flycare Team"
        },
        {
            title: "Why Winter is the Best Time to Visit Manali",
            excerpt: "Snow activities, cozy stays, and the magical atmosphere of Manali in December...",
            date: "Dec 05, 2025",
            category: "Seasonal",
            image: "/images/manali.png",
            author: "Adventure Guide"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="pt-40 pb-20 bg-soft-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-7xl font-black text-brand-dark tracking-tighter mb-6"
                    >
                        Travel <span className="text-primary italic">Inspiration</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-secondary text-lg md:text-xl max-w-2xl font-medium"
                    >
                        Expert tips, destination guides, and stories from the road.
                    </motion.p>
                </div>
            </section>

            {/* Blog List */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {posts.map((post, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[16/9] rounded-[48px] overflow-hidden mb-8 shadow-2xl">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-8 left-8 px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-black text-primary uppercase tracking-widest">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="space-y-4 px-4">
                                    <div className="flex items-center gap-6 text-sm text-secondary font-bold">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-primary" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User size={16} className="text-primary" />
                                            {post.author}
                                        </div>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black text-brand-dark group-hover:text-primary transition-colors tracking-tight leading-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-secondary text-lg leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm pt-4 group-hover:gap-4 transition-all">
                                        Read More <ArrowRight size={18} />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPage;
