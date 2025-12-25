"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    const socialLinks = [
        { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
        { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
        { icon: <MessageCircle size={20} />, href: "https://wa.me/yourwhatsapp", name: "WhatsApp" },
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Tour Packages", href: "/destinations" },
        { name: "Travel Gallery", href: "/gallery" },
        { name: "Travel Blog", href: "/blog" },
    ];

    const supportLinks = [
        { name: "Contact Us", href: "/contact" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "FAQ", href: "#" },
    ];

    return (
        <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-48 translate-x-48 blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link href="/" className="text-3xl font-black tracking-tighter inline-block">
                            Flycare<span className="text-primary">Holidays</span>
                        </Link>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
                            Crafting unforgettable travel experiences with a touch of luxury and care. Your journey, our passion.
                        </p>
                        <div className="flex space-x-5">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-white/5"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-black mb-8 tracking-tight">Explore</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-lg">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-xl font-black mb-8 tracking-tight">Support</h4>
                        <ul className="space-y-4">
                            {supportLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-lg">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-black mb-8 tracking-tight">Contact Info</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-gray-400 group">
                                <MapPin size={24} className="text-primary mt-1 group-hover:scale-110 transition-transform" />
                                <span className="text-lg">123 Travel Street, Holiday City, HC 12345</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400 group">
                                <Phone size={24} className="text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-lg">+1 (234) 567-890</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400 group">
                                <Mail size={24} className="text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-lg">hello@flycareholidays.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm font-medium">
                        © {new Date().getFullYear()} Flycare Holidays. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm font-medium">
                        Designed for Premium Experiences
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
