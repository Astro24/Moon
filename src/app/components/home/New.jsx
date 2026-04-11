"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "../../../../lib/data";

// filter data to show new items true only
const newItems = products.filter((p) => p.new);

// TODO: need to change the div to Link tag with dynamic route to each item page
// - make ADD TO CART button works and add items to cart page
export default function New() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        {/* Title */}
        <h1 className="font-garamond font-extrabold text-2xl sm:text-3xl md:text-5xl">
          Discover new arrivals
        </h1>
      </motion.div>

        {/* Item cards */}
      <div className="mt-15 mb-5 flex justify-center items-center gap-6 md:gap-20 flex-wrap px-6 md:px-30">
        {newItems.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: i * 0.1,
            }}
            className="flex justify-center items-start flex-col h-auto md:h-160 w-[calc(50%-12px)] md:w-auto"
          >
            <div className="overflow-hidden w-full">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={p.image}
                  width={120}
                  height={120}
                  alt={p.name}
                  className="w-full h-50 sm:h-60 md:h-100"
                />
              </motion.div>
            </div>
            <h1 className="mt-3 md:mt-5 text-sm md:text-lg font-bold uppercase">
              {p.name}
            </h1>
            <p className="text-sm md:text-lg font-bold">${p.price}.00</p>
            <p className="w-full md:w-70 text-[#807F86] text-xs md:text-sm mt-2 md:mt-3 line-clamp-2">
              {p.desc}
            </p>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.01,
                backgroundColor: "#000000",
                color: "#ffffff",
              }}
              whileTap={{ scale: 1 }}
              className="w-full border py-2 md:py-3 mt-10 md:mt-auto font-bold text-[10px] tracking-[0.2em] uppercase cursor-pointer"
            >
              Add to cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
