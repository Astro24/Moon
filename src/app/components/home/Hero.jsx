"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Hero() {
  const router = useRouter();
  const [launching, setLaunching] = useState(false);

  const handleClick = () => {
    setLaunching(true);
    setTimeout(() => router.push("/Shop"), 900);
  };

  return (
    <section className="flex flex-col md:block md:relative md:h-[80vh] lg:h-screen md:bg-[url('/home/hero.svg')] md:bg-cover md:bg-center md:bg-no-repeat">
      {/* Mobile-only background image (above the content panel) */}
      <div className="md:hidden h-[40vh] sm:h-[50vh] bg-[url('/home/hero.svg')] bg-cover bg-center bg-no-repeat" />

      {/* Content panel — full width on mobile, fixed width overlay on desktop */}
      <div className="bg-[#826F66] md:absolute md:top-0 md:left-[5%] lg:left-[8%] xl:left-[10%] md:h-full md:w-[45%] lg:w-[35%] xl:w-[30%] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center px-6 py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.4, 1],
              scale: [0.9, 1],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.4, 0.7, 1],
              repeatDelay: 2,
            }}
          >
            <Image
              src="/home/Icon.svg"
              width={50}
              height={50}
              alt="Moon icon"
              className="w-20 md:w-28 lg:w-40 h-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="text-white text-base md:text-lg lg:text-2xl mt-4 md:mt-5"
          >
            Handcrafted in Viet Nam since 1650
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scaleX: 1.3 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 1.2 }}
            className="font-garamond font-extrabold text-white leading-tight mt-4 md:mt-5 origin-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            BAT TRANG
            <br />
            DINNER SET
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 1.7,
            }}
          >
            <motion.button
              onClick={() => router.push("/Shop")}
              whileHover={{ scale: 1.05}}
              whileTap={{ scale: 0.99 }}
              className="bg-white px-10 md:px-12 py-3 md:py-4 mt-10 md:mt-16 text-[#826F66] font-extrabold text-base md:text-lg cursor-pointer"
            >
              SHOP NOW
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
