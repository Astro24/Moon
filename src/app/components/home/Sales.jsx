"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Sales() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-10 lg:mx-45 my-35 overflow-hidden">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-[#F7F6F5] flex flex-col justify-center items-center text-center px-8 md:px-16 lg:px-24 py-16 md:py-20"
      >
        <h1 className="font-garamond font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight uppercase">
          Up to 40% off our
          <br />
          Christmas collection
        </h1>

        <p className="text-gray-500 text-sm md:text-base mt-5 max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>

        <Link
          href="/Shop"
          className="mt-8 text-sm md:text-base font-bold uppercase underline underline-offset-4 decoration-2 text-black hover:text-[#826F66] transition-colors"
        >
          Shop Now
        </Link>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="relative bg-[#A8C4D1] min-h-75 md:min-h-100"
      >
        <Image
          src="/home/sales.svg"
          fill
          alt="Christmas collection plates"
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
