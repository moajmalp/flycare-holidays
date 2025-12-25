"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <MessageCircle size={18} />, href: "https://wa.me/yourwhatsapp", label: "WhatsApp" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/98 shadow-sm py-4" : "bg-white/90 backdrop-blur-md py-6"
        } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black tracking-tighter text-brand-dark">
              Flycare<span className="text-primary">Holidays</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-black uppercase tracking-widest text-[#475467] hover:text-primary transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Social Icons & Search */}
            <div className="flex items-center space-x-6 border-l border-gray-100 pl-8">
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <button className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Search size={20} />
              </button>
            </div>

            {/* Book Now Button */}
            <Link href="/contact" className="btn-primary py-2.5 px-8 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20">
              Book now
            </Link>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="flex lg:hidden items-center gap-4">
            <button className="p-2 text-gray-500">
              <Search size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className="text-[#1D2939] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl lg:hidden overflow-hidden border-t border-gray-100"
          >
            <div className="px-6 pt-4 pb-12 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-lg font-black text-brand-dark hover:bg-soft-bg hover:text-primary transition-all"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-8 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-8 mb-8">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} className="text-gray-400 hover:text-primary transition-colors">
                      {social.icon}
                    </a>
                  ))}
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full py-4 rounded-2xl text-sm font-black uppercase tracking-[0.2em] text-center"
                >
                  Book now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
