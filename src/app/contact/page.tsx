"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";
import DatePicker from "@/components/DatePicker";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, Compass, Headphones } from "lucide-react";

const ContactPage = () => {
    const [selectedDestination, setSelectedDestination] = useState("");
    const [travelDate, setTravelDate] = useState<Date | null>(null);
    const [returnDate, setReturnDate] = useState<Date | null>(null);

    const destinationOptions = [
        { value: "", label: "Select a destination" },
        { value: "kashmir", label: "Amazing Kashmir" },
        { value: "manali", label: "Mesmerizing Manali" },
        { value: "kerala", label: "Kerala Delight" },
        { value: "vietnam", label: "Vietnam Adventure" },
        { value: "other", label: "Other" },
    ];

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1); // Tomorrow as minimum date

    const handleTravelDateChange = (date: Date | null) => {
        setTravelDate(date);
        // Reset return date if it's before the new travel date
        if (returnDate && date && returnDate < date) {
            setReturnDate(null);
        }
    };

    return (
        <div className="bg-background text-foreground dark:border dark:border-white/10 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-brand-dark">
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-primary font-bold text-sm tracking-widest uppercase mb-8"
                    >
                        <Headphones size={16} />
                        24/7 Global Support
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9]"
                    >
                        Let&apos;s Talk <br />
                        <span className="text-primary italic">Adventure</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Ready to start your journey? Our travel specialists are standing by to help you craft the perfect escape.
                    </motion.p>
                </div>
            </section>

            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* Contact Info - Glass Cards */}
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Reach Out</span>
                                <h2 className="text-3xl md:text-4xl font-black text-brand-dark dark:text-white tracking-tighter">Contact Details</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: MapPin, title: "Our Office", content: "123 Travel Street, Holiday City, HC 12345, India", color: "text-primary", bg: "bg-primary/10" },
                                    { icon: Phone, title: "Call Us", content: "+91 98765 43210 / +91 11223 34455", color: "text-blue-500", bg: "bg-blue-500/10" },
                                    { icon: Mail, title: "Email Us", content: "hello@flycareholidays.com / support@flycareholidays.com", color: "text-primary", bg: "bg-primary/10" },
                                    { icon: Clock, title: "Working Hours", content: "Mon - Sat: 9:00 AM - 7:00 PM (Sun: Closed)", color: "text-blue-500", bg: "bg-blue-500/10" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-8 rounded-[2.5rem] bg-soft-bg/50 border border-gray-100 dark:border-white/10 hover:border-primary/30 hover:bg-background text-foreground dark:border dark:border-white/10 hover:shadow-xl dark:shadow-none transition-all duration-500 group"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                                            <item.icon size={28} />
                                        </div>
                                        <h4 className="text-xl font-bold text-brand-dark dark:text-white mb-2">{item.title}</h4>
                                        <p className="text-secondary dark:text-gray-300 leading-relaxed font-medium">{item.content}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="p-10 rounded-[3rem] glass-effect border-primary/20 flex flex-col sm:flex-row items-center gap-8 shadow-2xl dark:shadow-none shadow-primary/10"
                            >
                                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shrink-0 animate-bounce">
                                    <MessageCircle size={36} fill="currentColor" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-brand-dark dark:text-white text-xl font-black tracking-tight mb-1">Need instant assistance?</p>
                                    <p className="text-primary text-lg font-bold">Chat with our experts on WhatsApp</p>
                                    <a href="https://wa.me/919876543210" className="inline-block mt-4 text-brand-dark dark:text-white font-black hover:text-primary transition-colors">Start Chat Now →</a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Inquiry Form - Rich Design */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] blur-3xl -z-10" />
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-background text-foreground dark:border dark:border-white/10 p-12 md:p-16 rounded-[4rem] shadow-2xl dark:shadow-none shadow-brand-dark/5 border border-gray-50 dark:border-white/5"
                            >
                                <h2 className="text-3xl font-black text-brand-dark dark:text-white tracking-tighter mb-8 italic">Send an Inquiry</h2>
                                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-secondary dark:text-gray-300 ml-2">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full px-8 py-5 bg-soft-bg/50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-bold text-brand-dark dark:text-white outline-none"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-secondary dark:text-gray-300 ml-2">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full px-8 py-5 bg-soft-bg/50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-bold text-brand-dark dark:text-white outline-none"
                                            />
                                        </div>
                                    </div>
                                    <Dropdown
                                        label="Destination of Interest"
                                        options={destinationOptions}
                                        value={selectedDestination}
                                        onChange={setSelectedDestination}
                                        placeholder="Select a destination"
                                        icon={<Compass size={20} />}
                                    />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <DatePicker
                                            label="Travel Date"
                                            value={travelDate || undefined}
                                            onChange={handleTravelDateChange}
                                            placeholder="Select travel date"
                                            minDate={minDate}
                                        />
                                        <DatePicker
                                            label="Return Date"
                                            value={returnDate || undefined}
                                            onChange={setReturnDate}
                                            placeholder="Select return date"
                                            minDate={travelDate || minDate}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-secondary dark:text-gray-300 ml-2">Special Requirements</label>
                                        <textarea
                                            placeholder="Tell us about your dream trip..."
                                            rows={5}
                                            className="w-full px-8 py-5 bg-soft-bg/50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-bold text-brand-dark dark:text-white outline-none resize-none"
                                        ></textarea>
                                    </div>
                                    <button className="btn-primary w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] shadow-2xl dark:shadow-none shadow-primary/30 group">
                                        Send Inquiry
                                        <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
