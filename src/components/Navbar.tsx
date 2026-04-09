"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, LogIn, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

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
    { name: "Destinations", href: "/destinations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? "py-3" : "py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 rounded-full px-5 py-2.5 shadow-2xl dark:shadow-none border ${scrolled
          ? "bg-white/80 dark:bg-black/60 backdrop-blur-2xl border-white/40 dark:border-white/10"
          : "bg-white/40 dark:bg-white/5 backdrop-blur-xl border-white/60 dark:border-white/10"
          }`}>
          
          {/* Left: Logo with Magnetic Effect */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group relative px-2">
              <motion.div 
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/logo.png"
                  alt="Flycare Holidays"
                  width={200}
                  height={60}
                  className="h-10 w-auto md:h-12 object-contain"
                  priority
                />
              </motion.div>
            </Link>
          </div>

          {/* Center: Sliding Navigation */}
          <nav 
            className="hidden lg:flex items-center relative"
            onMouseLeave={() => setHoveredPath(null)}
          >
            <ul className="flex items-center gap-1 relative z-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.name} className="relative">
                    <Link
                      href={link.href}
                      onMouseEnter={() => setHoveredPath(link.href)}
                      className={`relative px-5 py-2 text-sm font-bold transition-colors duration-300 rounded-full flex items-center gap-1 ${
                        isActive 
                          ? "text-white" 
                          : "text-primary-deep/80 hover:text-primary dark:text-white/80 dark:hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Active Indicator (Slides) */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-primary rounded-full z-0 shadow-lg shadow-primary/20"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}

                      {/* Hover Indicator (Faded) */}
                      {!isActive && hoveredPath === link.href && (
                        <motion.div
                          layoutId="hoverTab"
                          className="absolute inset-0 bg-primary/10 dark:bg-white/10 rounded-full z-0"
                          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Modern Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="btn-primary px-7! py-2.5! text-sm! rounded-full! shadow-xl hover:shadow-primary/30 flex items-center gap-2 bg-linear-to-r from-primary to-primary-deep"
              >
                <Globe size={16} />
                <span className="font-bold tracking-wide">Book Now</span>
              </Link>
            </motion.div>

            {/* Mobile Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 text-primary-deep/80 dark:text-white/80 hover:bg-primary/10 rounded-full transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu: Staggered reveal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-x-4 top-[88px] z-50 lg:hidden"
          >
            <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl rounded-[2.5rem] p-4 shadow-2xl border border-white/20 dark:border-white/5">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between px-6 py-4 rounded-3xl transition-all ${
                        pathname === link.href
                          ? "bg-primary text-white shadow-lg shadow-primary/20"
                          : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-primary"
                      }`}
                    >
                      <span className="text-lg font-bold">{link.name}</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Globe size={18} />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between px-4 pb-2">
                <span className="text-sm font-medium text-zinc-400">Appearance</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

