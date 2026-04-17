"use client";
import { motion } from "framer-motion";

export default function OverView() {
  return (
    <section className="my-16 md:my-24 px-4">
      {/* intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center items-center flex-col text-center"
      >
        <h1 className="font-garamond uppercase text-3xl sm:text-4xl md:text-5xl">
          Delivery Overview
        </h1>
        <p className="text-[#595667] max-w-xl mt-5">
          We carefully package all ceramic products to ensure they arrive safely
          and in perfect condition. Our delivery partners are selected for
          reliability & speed, allowing us to deliver orders efficiently.
        </p>
      </motion.div>

      {/* Info blocks */}
      <div className="flex flex-col items-center mt-12 md:mt-16 gap-8 md:gap-10">
        {/* Delivery Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-center"
        >
          <h2 className="text-[#595667] font-bold">Delivery Locations</h2>
          <p className="text-[#C69B7B] font-bold mt-1">All GCC Countries</p>
        </motion.div>

        {/* Delivery Timeframes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-[#595667] font-bold">Delivery Timeframes</h2>
          <div className="text-[#C69B7B] font-bold mt-1 space-y-1">
            <p>Processing Time: 1–2 business days</p>
            <p>Delivery Time: 2–5 business days</p>
            <p>Total Estimated Time: 3–7 business days</p>
          </div>
        </motion.div>

        {/* Delivery Fees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-[#595667] font-bold">Delivery Fees</h2>
          <p className="text-[#C69B7B] font-bold mt-1">
            Shipping fees are calculated based on:
          </p>
          <ul className="list-disc text-[#C69B7B] font-bold text-start inline-block mt-2 pl-6">
            <li>Delivery location</li>
            <li>Order size and weight</li>
            <li>Selected shipping method</li>
          </ul>
        </motion.div>

        {/* Order Processing Time */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-[#595667] font-bold">Order Processing Time</h2>
          <div className="text-[#C69B7B] font-bold mt-1 space-y-1">
            <p>Before 2:00 PM → Processed same day</p>
            <p>After 2:00 PM → Processed next business day</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
