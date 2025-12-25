"use client";

import Link from "next/link";
// Image import removed to avoid type conflict, using standard <img> tags

import DestinationCard from "@/components/DestinationCard";
import FeatureCard from "@/components/FeatureCard";
import PackageCard from "@/components/PackageCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import {
  Users,
  MapPin,
  ShieldCheck,
  Calendar,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  ArrowRight,
  Send,
  Plane,
  Star
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

  const upcomingPackages = [
    {
      image: "/images/lakshadweep.png",
      title: "Escape to Lakshadweep: A Serene Island Retreat",
      date: "Starts Jan 7, 2026",
      location: "Lakshadweep Islands",
      price: "24,500",
    },
    {
      image: "/images/agra.png",
      title: "Delhi-Agra 2 Nights, 3 Days Deluxe Package",
      date: "Starts Jan 5, 2026",
      location: "Delhi & Agra",
      price: "7,800",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Solo Traveler",
      rating: 5,
      content: "Flycare Holidays made my Kashmir trip effortless. The houseboat stay they arranged was the highlight of my year!",
      avatar: "/images/manali.png", // placeholders
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

  const features = [
    {
      icon: MapPin,
      title: "Curated Destinations",
      description: "Handpicked locations and experiences that offer the perfect blend of local culture and luxury comfort."
    },
    {
      icon: ShieldCheck,
      title: "Safe & Reliable",
      description: "Your safety is our priority. We partner with verified local guides and premium transport providers."
    },
    {
      icon: Headphones,
      title: "Round-the-clock Support",
      description: "Our dedicated travel experts are available 24/7 to assist you at every step of your global journey."
    }
  ];

  return (
    <div className="flex flex-col pb-0 pt-0">
      {/* Hero Section */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative h-[650px] w-full rounded-[48px] overflow-hidden group">
          <img
            src="/images/kashmir.png"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-center p-12 mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]"
            >
              People Don't Take, <br />
              <span className="text-primary">Trips Take People.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/80 max-w-xl mb-10 text-lg md:text-xl font-medium"
            >
              Experience the world differently with Flycare Holidays.
              Tailored itineraries, premium service, and unforgettable memories.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="/contact" className="btn-primary px-12 py-4 text-base text-center">
                Plan My Dream Trip
              </Link>
              <Link href="/destinations" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base text-center">
                Explore Destinations
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destination Cards Section */}
      <section id="destinations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter">
              Where will you <span className="text-primary italic">fly</span> next?
            </h2>
            <p className="text-secondary text-lg leading-relaxed">
              Explore our most popular handpicked destinations, each offering a unique story waiting to be told.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/destinations" className="btn-outline px-8 py-3 rounded-2xl shadow-sm inline-block">View All Destinations</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <DestinationCard {...dest} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section id="why-us" className="bg-soft-bg py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-black text-brand-dark mb-8 tracking-tighter leading-tight">
                Why Thousands of Travelers <br />
                Trust <span className="text-primary">Flycare Holidays</span>
              </h2>
              <div className="flex flex-col gap-4 mb-12">
                {features.map((feature, i) => (
                  <FeatureCard key={i} {...feature} />
                ))}
              </div>
              <div className="flex gap-12 pt-12 border-t border-gray-200">
                <div>
                  <div className="text-4xl font-black text-brand-dark mb-2">10k+</div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest">Global Travelers</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-dark mb-2">500+</div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest">Tours Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-dark mb-2">99%</div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest">Customer Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[60px] blur-3xl -z-10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="pt-12">
                  <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-4 shadow-2xl transition-transform duration-500 hover:scale-105">
                    <img src="/images/kashmir.png" alt="Traveler" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-4 shadow-2xl transition-transform duration-500 hover:scale-105">
                    <img src="/images/vietnam.png" alt="Traveler" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="bg-primary p-8 rounded-[40px] text-white shadow-xl shadow-primary/20">
                    <Star size={32} fill="white" className="mb-4" />
                    <p className="font-bold text-xl leading-snug tracking-tight">Voted #1 Travel Agency in the Region</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Packages Section */}
      <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="flex justify-between items-end mb-16 px-4">
          <div>
            <h2 className="text-4xl font-black text-brand-dark mb-4 tracking-tighter">Featured Tour Packages</h2>
            <p className="text-secondary">Limited time offers for your next great escape.</p>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="p-4 border border-gray-200 rounded-full hover:bg-primary hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="p-4 border border-gray-200 rounded-full hover:bg-primary hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <PackageCard {...pkg} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand-dark py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-20 tracking-tighter">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative">
            {[
              {
                step: '01',
                icon: MapPin,
                title: 'Choose a Destination',
                desc: 'Browse through our curated list of world-class locations and find your perfect spot.'
              },
              {
                step: '02',
                icon: Calendar,
                title: 'Pick Category & Date',
                desc: 'Select preferred travel dates and package categories tailored to your budget.'
              },
              {
                step: '03',
                icon: Plane,
                title: 'Fly with Care',
                desc: 'Finalize your booking and get ready to fly. We handle all the details for you.'
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <item.icon size={36} className="text-primary" />
                </div>
                <div className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Step {item.step}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm max-w-[260px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Connecting dashed lines for desktop */}
            <div className="hidden md:block absolute top-12 left-[30%] right-[30%] h-px border-t border-dashed border-white/10 -z-0" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter">Happy Stories</h2>
            <p className="text-secondary max-w-lg mx-auto">Read what our travelers have to say about their experiences with Flycare Holidays.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TestimonialCard {...test} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Trip Inquiry Form */}
      <section id="contact" className="py-24 bg-soft-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-2xl shadow-gray-200 border border-gray-100 grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-black text-brand-dark mb-6 tracking-tighter leading-none">
                Plan Your <br />
                <span className="text-primary italic">Custom Trip</span>
              </h2>
              <p className="text-secondary mb-10 leading-relaxed">
                Can't find what you're looking for? Let us design a personalized itinerary just for you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-brand-dark font-bold">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock size={20} />
                  </div>
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-4 text-brand-dark font-bold">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Compass size={20} />
                  </div>
                  <span>Expert local consultants</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-secondary px-2">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-soft-bg rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-brand-dark" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-secondary px-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-soft-bg rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-brand-dark" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-secondary px-2">Destination of Interest</label>
                  <input type="text" placeholder="e.g. Switzerland, Maldives" className="w-full px-6 py-4 bg-soft-bg rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-brand-dark" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-secondary px-2">Special Requirements</label>
                  <textarea rows={4} placeholder="Tell us more about your ideal vacation..." className="w-full px-6 py-4 bg-soft-bg rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-brand-dark resize-none lg:h-32"></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="btn-primary w-full py-5 text-lg group">
                    Send Inquiry <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto w-full relative h-[450px] rounded-[56px] overflow-hidden group">
          <img src="/images/kerala.png" alt="CTA BG" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-8 max-w-3xl leading-[1.1]"
            >
              Life is short and the world is wide. <br />
              <span className="text-primary italic">Start your journey today.</span>
            </motion.h2>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link href="/contact" className="btn-primary px-12 py-5 text-xl text-center">Book a Consultant</Link>
              <a href="tel:+919876543210" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black hover:bg-white/20 transition-all text-xl text-center">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Blog Section Placeholder */}
      <section id="blog" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter">
                Travel <span className="text-primary italic">Inspiration</span>
              </h2>
              <p className="text-secondary text-lg leading-relaxed">
                Expert tips, destination guides, and stories from the road to help you plan your next great escape.
              </p>
            </div>
            <Link href="/blog" className="btn-outline px-8 py-3 rounded-2xl inline-block">Visit Our Blog</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Top 10 Hidden Gems in Kashmir You Must Visit", date: "Dec 20, 2025", category: "Guides" },
              { title: "How to Plan a Sustainable Trip to Vietnam", date: "Dec 15, 2025", category: "Eco-Travel" },
              { title: "The Ultimate Kerala Backwaters Experience Guide", date: "Dec 10, 2025", category: "Experiences" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-6 bg-soft-bg shadow-lg">
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-500" />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-primary uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="px-2">
                  <div className="text-xs font-bold text-secondary mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
