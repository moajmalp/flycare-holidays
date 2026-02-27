"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  icon?: React.ReactNode;
  className?: string;
  label?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = "Select an option",
  onChange,
  icon,
  className = "",
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const selectedOption = options.find(opt => opt.value === selectedValue);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onChange?.(optionValue);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className="text-xs font-black uppercase tracking-[0.2em] text-secondary dark:text-gray-300 ml-2 mb-3 block">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-5 bg-soft-bg/50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all font-bold text-brand-dark dark:text-white outline-none cursor-pointer flex items-center justify-between hover:bg-soft-bg/70"
      >
        <span className={selectedValue ? "text-brand-dark dark:text-white" : "text-secondary/50"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className="flex items-center gap-3">
          {icon && <span className="text-primary">{icon}</span>}
          <ChevronDown
            size={20}
            className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 w-full mt-2 bg-background text-foreground dark:border dark:border-white/10 rounded-2xl shadow-2xl dark:shadow-none border border-gray-100 dark:border-white/10 overflow-hidden"
            >
              <div className="max-h-64 overflow-y-auto custom-scrollbar">
                {options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={`w-full px-6 py-4 text-left font-bold text-brand-dark dark:text-white hover:bg-primary/10 transition-colors flex items-center justify-between ${
                      selectedValue === option.value ? "bg-primary/5" : ""
                    }`}
                  >
                    <span>{option.label}</span>
                    {selectedValue === option.value && (
                      <Check size={18} className="text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
