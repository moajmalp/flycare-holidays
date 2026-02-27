"use client";

import Link from "next/link";
import Image from "next/image";
import { lazy, Suspense } from "react";
import DestinationCard from "@/components/DestinationCard";
import TestimonialCard from "@/components/TestimonialCard";

// Lazy load below-the-fold components for better initial load performance
const Footer = lazy(() => import("@/components/Footer"));

// Loading fallback component
const FooterLoader = () => (
  <footer className="bg-brand-dark text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-8 bg-background/10 dark:bg-white/10 rounded w-1/4 mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-4 bg-background/10 dark:bg-white/10 rounded w-3/4"></div>
              <div className="h-4 bg-background/10 dark:bg-white/10 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
import {
  Users,
  MapPin,
  ShieldCheck,
  Headphones,
  Compass,
  ArrowRight,
  Star,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const destinations = [
    {
      title: "Amazing Kashmir",
      subtitle: "4 Night–5 Days",
      price: "12,999",
      rating: "4.9",
      reviews: "2.4k",
      location: "Jammu & Kashmir",
      image: "/images/kashmir.png",
      slug: "amazing-kashmir",
    },
    {
      title: "Manali",
      subtitle: "Winter Special Adventure",
      price: "8,500",
      rating: "4.7",
      reviews: "1.8k",
      location: "Himachal Pradesh",
      image: "/images/manali.png",
      slug: "mesmerizing-manali",
    },
    {
      title: "Alleppey & Kochi",
      subtitle: "Backwater Serenity",
      price: "11,200",
      rating: "4.8",
      reviews: "3.1k",
      location: "Kerala, South India",
      image: "/images/kerala.png",
      slug: "kerala-delight",
    },
    {
      title: "Vietnam",
      subtitle: "Cultural Journey",
      price: "45,000",
      rating: "4.9",
      reviews: "4.2k",
      location: "Southeast Asia",
      image: "/images/vietnam.png",
      slug: "vietnam-adventure",
    },
    {
      title: "Delhi Agra",
      subtitle: "Golden Triangle Highlights",
      price: "9,999",
      rating: "4.6",
      reviews: "2.7k",
      location: "Delhi/Uttar Pradesh",
      image: "/images/agra.png",
      slug: "golden-triangle",
    },
  ];


  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Solo Traveler",
      rating: 5,
      content: "Flycare Holidays made my Kashmir trip effortless. The houseboat stay they arranged was the highlight of my year!",
      avatar: "/images/manali.png",
      videoThumb: "/images/kashmir.png"
    },
    {
      name: "Anjali Menon",
      role: "Family Vacation",
      rating: 5,
      content: "Excellent service from start to finish. Our Kerala backwater tour was perfectly timed and very professional.",
      avatar: "/images/kerala.png",
    },
    {
      name: "Vikram Duggal",
      role: "Business Trip",
      rating: 4,
      content: "Reliable and efficient. I use them for all my domestic travel bookings now. Highly recommended for premium service.",
      avatar: "/images/vietnam.png",
    }
  ];

  return (
    <div className="flex flex-col bg-background text-foreground dark:border dark:border-white/10">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-12 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
          <div className="space-y-10 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-primary font-bold text-sm tracking-widest uppercase"
            >
              <Sparkles size={16} />
              Reinventing Luxury Travel
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark dark:text-white leading-[1] sm:leading-[0.9] tracking-tighter"
            >
              Your Journey, <br />
              <span className="text-primary italic">Our Passion.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-secondary dark:text-gray-300 max-w-xl leading-relaxed font-medium"
            >
              Escape the ordinary with bespoke itineraries designed by local experts. Every detail handled with premium care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link href="/contact" className="btn-primary py-5 px-10 text-lg shadow-2xl dark:shadow-none">
                Explore Packages
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-outline py-5 px-10 text-lg glass-effect hover:bg-white/40">
                Our Story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 pt-6"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-soft-bg overflow-hidden shadow-lg">
                    <Image
                      src="/images/manali.png"
                      alt="User"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  2k+
                </div>
              </div>
              <div className="text-sm font-bold text-secondary dark:text-gray-300">
                <span className="text-brand-dark dark:text-white block text-lg">Trusted by 2000+</span>
                Happy travelers worldwide
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative lg:col-span-7 justify-self-end w-full max-w-2xl"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <div className="relative z-10 aspect-[4/5] md:max-h-[580px] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] group lg:translate-x-12">
              <Image
                src="/images/kashmir.png"
                alt="Main"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />

              {/* Floating Glass UI on Image */}
              <div className="absolute bottom-8 left-8 right-8 glass-effect p-6 rounded-3xl animate-float">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-bold text-lg tracking-tight">Dal Lake, Kashmir</span>
                  <div className="flex items-center gap-1 bg-primary/20 backdrop-blur-md px-2 py-1 rounded-lg">
                    <Star size={14} className="text-primary fill-primary" />
                    <span className="text-white text-xs font-bold">4.9</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin size={14} />
                  <span>North India&apos;s Paradise</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section >

      {/* Featured Destinations */}
      < section className="py-32 relative overflow-hidden" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs">Curated Selection</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark dark:text-white tracking-tighter leading-tight">
                Most Popular <br />
                <span className="text-primary italic">Global Escapes</span>
              </h2>
            </div>
            <Link href="/destinations" className="group flex items-center gap-3 text-lg font-bold text-brand-dark dark:text-white hover:text-primary transition-colors">
              Explore All Destinations
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <DestinationCard {...dest} />
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Experience Stats & Trust */}
      < section className="py-24 bg-brand-dark relative overflow-hidden" >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--glass-bg)_1px,_transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">
                Crafting <span className="text-primary italic">Memories</span> <br />
                That Last a Lifetime
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {[
                  { label: "Satisfied Clients", value: "10K+", icon: Users },
                  { label: "Global Locations", value: "100+", icon: MapPin },
                  { label: "Successful Tours", value: "5K+", icon: Compass },
                  { label: "Expert Guides", value: "50+", icon: Sparkles },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-6 sm:p-8 rounded-[2rem] dark-glass border-white/5 space-y-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                      <stat.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-white/50 text-[10px] sm:text-sm font-bold uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] hidden sm:block" />
              <div className="relative glass-effect p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3.5rem] border-white/10 overflow-hidden shadow-2xl dark:shadow-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16" />
                <div className="space-y-6 sm:space-y-8">
                  <div className="inline-block p-3 sm:p-4 bg-primary/10 rounded-2xl text-primary mb-2">
                    <Star size={24} className="sm:w-8 sm:h-8" fill="currentColor" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">Voted #1 Premium Travel Agency in the Region</h3>
                  <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                    Our commitment to excellence and personalized service has earned us the trust of thousands of luxury travelers.
                  </p>
                  <div className="pt-2 sm:pt-4">
                    <Link href="/contact" className="btn-primary w-full py-4 sm:py-5 rounded-[1.5rem] shadow-none">
                      Request a Consult
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Testimonials - Rich Carousel Design */}
      < section className="py-32 bg-soft-bg/30" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark dark:text-white tracking-tighter italic">Trusted Stories</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <TestimonialCard {...test} />
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Premium CTA Block */}
      < section className="py-32 px-4 sm:px-6 lg:px-8" >
        <div className="max-w-7xl mx-auto relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center rounded-[2rem] sm:rounded-[4rem] overflow-hidden group">
          <Image
            src="/images/kerala.png"
            alt="CTA"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000"
            quality={85}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-transparent to-transparent opacity-60" />

          <div className="relative z-10 text-center p-6 sm:p-8 space-y-8 sm:space-y-12 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]"
            >
              Don&apos;t Just Dream, <br />
              <span className="text-primary italic">Start Your Journey.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            >
              <button className="btn-primary !px-8 sm:!px-12 !py-4 sm:!py-6 !text-lg sm:!text-xl shadow-none">
                Create Custom Package
                <ArrowUpRight className="ml-2" />
              </button>
              <a href="tel:+123456789" className="glass-effect !bg-background/10 dark:bg-white/10 !border-white/20 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-[1.5rem] font-bold text-lg sm:text-xl hover:bg-background/20 dark:bg-white/20 transition-all">
                Talk to an Expert
              </a>
            </motion.div>
          </div>
        </div>
      </section >

      <Suspense fallback={<FooterLoader />}>
        <Footer />
      </Suspense>
    </div >
  );
}

