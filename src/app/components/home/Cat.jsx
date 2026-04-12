"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    src: "/home/different-ceramic-empty-plates-bowls 1.svg",
    label: "TableWare",
  },
  { src: "/home/home_dec.svg", label: "Home Decor" },
  { src: "/home/hooliday.svg", label: "Holiday" },
  { src: "/home/collection.svg", label: "Collection" },
];

export default function Cat() {
  return (
    <section className="flex flex-wrap justify-center items-center mt-25 mb-7 gap-10 md:gap-25 px-4">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.label}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: i * 0.15,
          }}
          className="flex justify-center items-center flex-col"
        >
          <motion.div
            whileHover={{ scale: 1.08, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="cursor-pointer"
          >
            <Image
              src={cat.src}
              width={20}
              height={20}
              alt={cat.label}
              className="w-40 md:w-70 h-40 md:h-70"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
            className="text-lg md:text-2xl mt-5"
          >
            {cat.label}
          </motion.h1>
        </motion.div>
      ))}
    </section>
  );
}
