"use client";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        <p className="text-sm md:text-base text-[#3A3845] mb-4">
          Sign up for emails
        </p>

        <h2 className="font-garamond font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide">
          For News, Collections & More
        </h2>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full mt-8 md:mt-10 flex flex-col items-center"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full max-w-md border-b border-black bg-transparent text-center py-3 text-sm md:text-base placeholder:text-[#807F86] focus:outline-none focus:border-b-2"
          />

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.02,
              backgroundColor: "#000000",
              color: "#ffffff",
            }}
            whileTap={{ scale: 1 }}
            className="mt-6 md:mt-8 border border-black px-10 py-3 font-bold text-[10px] tracking-[0.2em] uppercase cursor-pointer"
          >
            Sign Up
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
