"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";

const ContactPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="pt-40 pb-20 bg-brand-dark text-white rounded-b-[64px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
                    >
                        Get in <span className="text-primary italic">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        We're here to help you plan your dream vacation. Reach out to us via any of the channels below.
                    </motion.p>
                </div>
            </section>

            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-4xl font-black text-brand-dark tracking-tighter mb-12">Contact Details</h2>
                            <div className="space-y-12">
                                <div className="flex items-start gap-8 group">
                                    <div className="w-16 h-16 rounded-[24px] bg-soft-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-brand-dark mb-2">Our Office</h4>
                                        <p className="text-secondary text-lg leading-relaxed">123 Travel Street, Holiday City,<br />HC 12345, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-8 group">
                                    <div className="w-16 h-16 rounded-[24px] bg-soft-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-brand-dark mb-2">Call Us</h4>
                                        <p className="text-secondary text-lg leading-relaxed">+91 98765 43210</p>
                                        <p className="text-secondary text-lg leading-relaxed">+91 11223 34455</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-8 group">
                                    <div className="w-16 h-16 rounded-[24px] bg-soft-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-brand-dark mb-2">Email Us</h4>
                                        <p className="text-secondary text-lg leading-relaxed">hello@flycareholidays.com</p>
                                        <p className="text-secondary text-lg leading-relaxed">support@flycareholidays.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-8 group">
                                    <div className="w-16 h-16 rounded-[24px] bg-soft-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                        <Clock size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-brand-dark mb-2">Working Hours</h4>
                                        <p className="text-secondary text-lg leading-relaxed">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                                        <p className="text-secondary text-lg leading-relaxed">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 p-8 bg-primary/10 rounded-[32px] border border-primary/20 flex items-center gap-6">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <p className="text-brand-dark font-black tracking-tight">Need instant help?</p>
                                    <p className="text-primary font-bold">Chat with our experts on WhatsApp</p>
                                </div>
                            </div>
                        </div>

                        {/* Inquiry Form */}
                        <div className="bg-white p-12 md:p-16 rounded-[56px] shadow-2xl shadow-brand-dark/5 border border-gray-50">
                            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-8">Send an Inquiry</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-dark ml-2">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-soft-bg rounded-2xl border-none focus:ring-2 focus:ring-primary/20 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-dark ml-2">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-soft-bg rounded-2xl border-none focus:ring-2 focus:ring-primary/20 outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-dark ml-2">Destination of Interest</label>
                                    <select className="w-full px-6 py-4 bg-soft-bg rounded-2xl border-none focus:ring-2 focus:ring-primary/20 outline-none appearance-none">
                                        <option>Select a destination</option>
                                        <option>Amazing Kashmir</option>
                                        <option>Mesmerizing Manali</option>
                                        <option>Kerala Delight</option>
                                        <option>Vietnam Adventure</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-dark ml-2">Special Requirements</label>
                                    <textarea placeholder="Tell us about your dream trip..." rows={5} className="w-full px-6 py-4 bg-soft-bg rounded-2xl border-none focus:ring-2 focus:ring-primary/20 outline-none resize-none"></textarea>
                                </div>
                                <button className="btn-primary w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20">
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
