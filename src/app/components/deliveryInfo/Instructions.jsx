"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaCamera, FaBox, FaFileAlt, FaGlobe, FaHourglassHalf } from "react-icons/fa";

export default function Instructions() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const steps = [
    { icon: FaCamera, label: "Take photos immediately" },
    { icon: FaBox, label: "Do not discard packaging" },
    { icon: FaFileAlt, label: "Report the issue within 48 hours" },
    { icon: FaGlobe, label: "Visit our Order Issues page to submit a claim" },
    { icon: FaHourglassHalf, label: "Wait for Review" },
  ];

  // duration for the progress line
  const lineDuration = 2.5;
  // steps for icon drop
  const stepDelays = steps.map((_, i) => (i / (steps.length - 1) * lineDuration));

  return (
    <section className="my-16 md:my-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="font-garamond text-3xl sm:text-4xl md:text-5xl uppercase">
          Damaged Delivery Instructions
        </h1>
      </motion.div>

      {/* Desktop*/}
      <div
        ref={containerRef}
        className="hidden md:block relative max-w-5xl mx-auto mt-20"
      >
        {/* Background line */}
        <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-gray-300" />

        {/* Progress line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: lineDuration, ease: "easeInOut" }}
          style={{ transformOrigin: "left center" }}
          className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-[#C69B7B]"
        />

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className="flex flex-col items-center"
                style={{ width: "20%" }}
              >
                {/* Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: stepDelays[i],
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="relative w-12 h-12 rounded-full bg-white border-2 border-[#C69B7B] flex items-center justify-center z-10"
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ y: -200, opacity: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { y: 0, opacity: 1, rotate: 0 }
                        : {}
                    }
                    transition={{
                      delay: stepDelays[i] + 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 12,
                      duration: 0.8,
                    }}
                    className="text-[#C69B7B] text-lg"
                  >
                    <Icon />
                  </motion.div>
                </motion.div>

                {/* Label */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: stepDelays[i] + 0.4,
                  }}
                  className="text-center text-sm text-[#595667] mt-4 px-2"
                >
                  {step.label}
                </motion.p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden max-w-md mx-auto mt-12 relative">
        {/* Vertical background line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-300" />

        {/* Vertical progress line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: lineDuration, ease: "easeInOut" }}
          style={{ transformOrigin: "top center" }}
          className="absolute left-6 top-6 bottom-6 w-0.5 bg-[#C69B7B]"
        />

        <div className="space-y-6 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: stepDelays[i] * 0.4,
                }}
                className="flex items-center gap-4"
              >
                <div className="relative w-12 h-12 rounded-full bg-white border-2 border-[#C69B7B] flex items-center justify-center shrink-0 z-10">
                  <motion.div
                    initial={{ y: -100, opacity: 0, rotate: -180 }}
                    whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      delay: stepDelays[i] * 0.4 + 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 12,
                    }}
                    className="text-[#C69B7B] text-lg"
                  >
                    <Icon />
                  </motion.div>
                </div>
                <p className="text-sm text-[#595667]">{step.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}