"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const socialLinks = [
        { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
        { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
        { icon: <MessageCircle size={20} />, href: "https://wa.me/yourwhatsapp", name: "WhatsApp" },
    ];

    const footerLinks = [
        {
            title: "Explore",
            links: [
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Destinations", href: "/destinations" },
                { name: "Packages", href: "/packages" },
                { name: "Gallery", href: "/gallery" },
            ]
        },
        {
            title: "Customer Support",
            links: [
                { name: "Contact Us", href: "/contact" },
                { name: "FAQ", href: "#" },
                { name: "Terms & Conditions", href: "#" },
                { name: "Privacy Policy", href: "#" },
            ]
        }
    ];

    return (
        <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/4 w-[200px] sm:w-[600px] h-[200px] sm:h-[600px] bg-primary/5 rounded-full -translate-y-1/2 blur-[80px] sm:blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-primary/10 rounded-full translate-y-1/2 blur-[60px] sm:blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-1 space-y-8">
                        <Link href="/" className="inline-block group">
                            <div className="bg-background/95 dark:bg-brand-dark/95 p-4 rounded-3xl transition-transform group-hover:scale-105 shadow-xl dark:shadow-none inline-block">
                                <Image
                                    src="/logo.png"
                                    alt="Flycare Holidays"
                                    width={220}
                                    height={70}
                                    className="h-14 w-auto"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
                            Redefining luxury travel experiences. We don&apos;t just plan trips; we craft lifelong memories with care and precision.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-500 group"
                                    aria-label={social.name}
                                >
                                    <span className="transition-transform group-hover:scale-110">
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-white/90">{section.title}</h4>
                            <ul className="space-y-3 sm:space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-primary transition-all flex items-center gap-2 group text-sm sm:text-base"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-background/10 dark:bg-white/10 group-hover:bg-primary transition-colors" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter/Contact Section */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-white/90">Contact Us</h4>
                            <ul className="space-y-4 sm:space-y-5">
                                <li className="flex items-start gap-4 text-gray-400 group cursor-pointer">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <MapPin size={18} className="sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-sm sm:text-[15px] pt-1">123 Travel Suite, <br />Holiday Hub, NY 10001</span>
                                </li>
                                <li className="flex items-center gap-4 text-gray-400 group cursor-pointer">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Phone size={18} className="sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-sm sm:text-[15px]">+1 (555) 000-1111</span>
                                </li>
                                <li className="flex items-center gap-4 text-gray-400 group cursor-pointer">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Mail size={18} className="sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-sm sm:text-[15px]">hello@flycare.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 sm:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-500 text-xs sm:text-sm font-medium text-center md:text-left">
                        © {mounted ? new Date().getFullYear() : "2026"} <span className="text-white/60">Flycare Holidays</span>. All rights reserved.
                    </div>
                    <div className="flex gap-6 sm:gap-8 text-gray-500 text-xs sm:text-sm font-medium">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

