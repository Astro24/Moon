"use client";
import { motion, AnimatePresence } from "framer-motion";
import CartItems from "../../shared/CartItems";
import Pagination from "../../shared/Pagination";

export default function ProjectPage() {
  return (
    <section className="overflow-hidden">
      <AnimatePresence>
        <motion.h1
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 25 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="text-2xl sm:text-3xl font-semibold text-[#3A3845] ml-5 sm:ml-9 mt-10 sm:mt-15"
        >
          Cart
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          eyit={{ opacity: 0, y: -40 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="flex flex-col items-center w-full p-10 text-start"
        >
          <div className="bg-white h-130 w-full rounded-2xl shadow-md p-5">
            <CartItems />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
