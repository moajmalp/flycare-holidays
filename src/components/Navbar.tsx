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
  const [destinationsOpen, setDestinationsOpen] = useState(false);
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

  const destinationOptions = [
    { name: "Amazing Kashmir", href: "/itinerary/amazing-kashmir" },
    { name: "Mesmerizing Manali", href: "/itinerary/mesmerizing-manali" },
    { name: "Kerala Delight", href: "/itinerary/kerala-delight" },
    { name: "Vietnam Adventure", href: "/itinerary/vietnam-adventure" },
    { name: "Golden Triangle", href: "/itinerary/golden-triangle" },
    { name: "View All", href: "/destinations" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 rounded-full px-6 py-2 shadow-2xl border ${scrolled
            ? "glass-premium border-white/30"
            : "bg-white/80 backdrop-blur-xl border-white/40 shadow-xl"
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
                  className="h-9 w-auto md:h-11 object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Navigation Pill */}
          <nav className="hidden lg:flex items-center bg-primary-light/30 rounded-full px-2 py-1 border border-primary/10">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isDestinations = link.name === "Destinations";

                return (
                  <li
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => isDestinations && setDestinationsOpen(true)}
                    onMouseLeave={() => isDestinations && setDestinationsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center gap-1 ${isActive
                        ? "text-white bg-primary shadow-sm"
                        : "text-primary-deep/80 hover:text-primary hover:bg-white/50"
                        }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown
                          size={14}
                          className={`opacity-50 transition-transform duration-300 ${destinationsOpen ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>

                    {/* Destinations Dropdown */}
                    {isDestinations && (
                      <AnimatePresence>
                        {destinationsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                            onMouseEnter={() => setDestinationsOpen(true)}
                            onMouseLeave={() => setDestinationsOpen(false)}
                          >
                            <div className="max-h-80 overflow-y-auto custom-scrollbar">
                              {destinationOptions.map((option, index) => (
                                <Link
                                  key={option.name}
                                  href={option.href}
                                  className={`block px-6 py-4 text-sm font-bold text-primary-deep hover:bg-primary/10 transition-colors ${index === destinationOptions.length - 1 ? "border-t border-gray-100 bg-soft-bg/50" : ""
                                    }`}
                                >
                                  {option.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2.5 text-primary-deep/60 hover:text-primary transition-colors rounded-full bg-primary-light/30 border border-primary/10">
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
              className="lg:hidden p-2.5 text-primary-deep/70 hover:bg-primary/10 rounded-full transition-all"
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
                {navLinks.map((link) => {
                  const isDestinations = link.name === "Destinations";
                  return (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => {
                          if (!isDestinations) setIsOpen(false);
                        }}
                        className={`px-6 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-between ${pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-brand-dark hover:bg-brand-dark/5"
                          }`}
                      >
                        {link.name}
                        {link.hasDropdown ? (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setDestinationsOpen(!destinationsOpen);
                            }}
                            className="text-primary"
                          >
                            <ChevronDown
                              size={20}
                              className={`transition-transform duration-300 ${destinationsOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                        ) : (
                          <Globe size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </Link>
                      {isDestinations && (
                        <AnimatePresence>
                          {destinationsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-6 pr-2 py-2 space-y-1">
                                {destinationOptions.map((option) => (
                                  <Link
                                    key={option.name}
                                    href={option.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-xl text-sm font-bold text-brand-dark hover:bg-primary/10 transition-colors"
                                  >
                                    {option.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

