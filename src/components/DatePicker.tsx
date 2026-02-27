"use client";

import React, { useState, useRef, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  minDate?: Date;
  maxDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder = "Select a date",
  className = "",
  label,
  minDate,
  maxDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(value ? new Date(value.getFullYear(), value.getMonth(), 1) : new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (value) {
      setSelectedDate(value);
      setCurrentMonth(new Date(value.getFullYear(), value.getMonth(), 1));
    }
  }, [value]);

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateDisabled = (date: Date): boolean => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const isDateSelected = (date: Date): boolean => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (!isDateDisabled(newDate)) {
      setSelectedDate(newDate);
      setIsOpen(false);
      onChange?.(newDate);
    }
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className={`relative ${className}`} ref={datePickerRef}>
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
        <span className={selectedDate ? "text-brand-dark dark:text-white" : "text-secondary/50"}>
          {selectedDate ? formatDate(selectedDate) : placeholder}
        </span>
        <Calendar size={20} className="text-primary" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 w-full sm:w-auto mt-2 bg-background text-foreground dark:border dark:border-white/10 rounded-2xl shadow-2xl dark:shadow-none border border-gray-100 dark:border-white/10 overflow-hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    type="button"
                    onClick={() => navigateMonth("prev")}
                    className="p-2 rounded-xl hover:bg-soft-bg transition-colors"
                  >
                    <ChevronLeft size={20} className="text-brand-dark dark:text-white" />
                  </button>
                  <h3 className="text-lg font-black text-brand-dark dark:text-white">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  <button
                    type="button"
                    onClick={() => navigateMonth("next")}
                    className="p-2 rounded-xl hover:bg-soft-bg transition-colors"
                  >
                    <ChevronRight size={20} className="text-brand-dark dark:text-white" />
                  </button>
                </div>

                {/* Day names */}
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-bold text-secondary dark:text-gray-300 py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-2">
                  {/* Empty cells for days before month starts */}
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square" />
                  ))}

                  {/* Days of the month */}
                  {days.map((day) => {
                    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                    const disabled = isDateDisabled(date);
                    const selected = isDateSelected(date);
                    const today = isToday(date);

                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleDateSelect(day)}
                        disabled={disabled}
                        className={`
                          aspect-square rounded-xl font-bold text-sm transition-all
                          ${disabled
                            ? "text-gray-300 cursor-not-allowed"
                            : selected
                            ? "bg-primary text-white shadow-lg scale-110"
                            : today
                            ? "bg-primary/10 text-primary border-2 border-primary"
                            : "text-brand-dark dark:text-white hover:bg-soft-bg"
                          }
                        `}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
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

export default DatePicker;
