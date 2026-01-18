"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, LogIn, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations", hasDropdown: true },
    { name: "Tour Packages", href: "/packages" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 rounded-full px-6 py-2.5 shadow-2xl ${scrolled ? "glass-nav border-white/40" : "bg-white/10 backdrop-blur-md border border-white/20"
          }`}>
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative overflow-hidden transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Flycare Holidays"
                  width={160}
                  height={50}
                  className="h-10 w-auto md:h-12 object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Navigation Pill */}
          <nav className="hidden lg:flex items-center bg-brand-dark/5 rounded-full px-2 py-1 border border-brand-dark/10">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center gap-1 ${isActive
                        ? "text-white bg-brand-dark shadow-sm"
                        : "text-brand-dark/70 hover:text-primary"
                        }`}
                    >
                      {link.name}
                      {link.hasDropdown && <ChevronDown size={14} className="opacity-50" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2.5 text-brand-dark/60 hover:text-primary transition-colors rounded-full bg-brand-dark/5 border border-brand-dark/10">
              <Sun size={20} />
            </button>
            <Link
              href="/contact"
              className="btn-primary !px-6 !py-2.5 !text-sm !rounded-full shadow-lg"
            >
              <LogIn size={18} className="mr-2" />
              <span>Book Now</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 text-brand-dark/70 hover:bg-brand-dark/5 rounded-full transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute inset-x-4 top-24 z-50 lg:hidden"
          >
            <div className="glass-effect rounded-[2.5rem] p-6 shadow-2xl border-white/60">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-6 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-between ${pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-brand-dark hover:bg-brand-dark/5"
                      }`}
                  >
                    {link.name}
                    <Globe size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

