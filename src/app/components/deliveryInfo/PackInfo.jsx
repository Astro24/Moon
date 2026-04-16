"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PackInfo() {
  const info = [
    {
      icon: "/deliveryInfo/grid.svg",
      title: "Protective Bubble Wrapping",
      desc: "Each ceramic item is carefully wrapped in protective bubble layers to prevent cracks and surface damage during transit.",
    },
    {
      icon: "/deliveryInfo/fi-rr-cube.svg",
      title: "Reinforced Boxes",
      desc: "We use strong, reinforced boxes designed to withstand pressure and protect fragile items throughout the delivery journey.",
    },
    {
      icon: "/deliveryInfo/fi-rr-cloud.svg",
      title: "Cushioning Materials",
      desc: "Extra cushioning materials are added to fill empty spaces and keep products securely in place during transport.",
    },
    {
      icon: "/deliveryInfo/fi-rr-hand-holding-heart.svg",
      title: "Fragile Labeling",
      desc: "All packages are clearly labeled as fragile to ensure careful handling by shipping personnel.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 sm:px-8 md:px-16 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="font-garamond text-3xl sm:text-4xl md:text-5xl uppercase">
          Packaging Information
        </h1>
        <p className="text-[#595667] mt-3 max-w-xl mx-auto">
          We use specialized packaging techniques to protect fragile ceramic
          items during transit.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {info.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: i * 0.15,
            }}
            whileHover={{ y: -8 }}
            className="p-6 md:p-8 flex flex-col items-center text-center bg-[#3A3845] text-white rounded-3xl shadow-md shadow-zinc-700 cursor-default"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-[#595667] rounded-full p-6 md:p-7"
            >
              <Image
                src={card.icon}
                width={30}
                height={30}
                alt={card.title}
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </motion.div>

            <h2 className="text-xl md:text-2xl font-bold mt-5">{card.title}</h2>
            <p className="mt-3 text-sm md:text-base text-gray-200">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
