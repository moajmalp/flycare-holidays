"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

const StickyContact = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-2xl shadow-xl hover:scale-110 transition-transform duration-300 group"
                onClick={() => window.open("https://wa.me/yournumber", "_blank")}
                aria-label="Contact Us"
            >
                <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />

                {/* Tooltip */}
                <span className="absolute right-16 bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shadow-lg">
                    Chat with us
                </span>
            </button>
        </div>
    );
};

export default StickyContact;
