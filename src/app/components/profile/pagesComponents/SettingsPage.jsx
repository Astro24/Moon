"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function SettingsPage() {
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
          Settings
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
          <div className="bg-white w-full rounded-2xl shadow-md p-5">
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
              <div>
                <h1 className="font-bold">Language</h1>
                <select
                  defaultValue="Engilsh"
                  className="select bg-zinc-50 mt-2  w-full md:w-[95%]"
                >
                  <option>Engilsh</option>
                  <option>Arabic</option>
                </select>
              </div>
              <div className="sm: mt-7 md:mt-0">
                <h1 className="font-bold">Currency</h1>
                <select
                  defaultValue="USD"
                  className="select bg-zinc-50 mt-2 w-full md:w-[95%]"
                >
                  <option>USD</option>
                  <option>SAR</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
