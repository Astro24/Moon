"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const social = [
    { src: "/deliveryInfo/Facebook.svg", alt: "Facebook" },
    { src: "/deliveryInfo/Twitter.svg", alt: "Twitter" },
    { src: "/deliveryInfo/instagram.svg", alt: "instagram" },
    { src: "/deliveryInfo/LinkedIn.svg", alt: "LinkedIn" },
    { src: "/deliveryInfo/YouTube.svg", alt: "YouTube" },
  ];

  return (
    <section className="flex flex-col md:block overflow-hidden md:relative md:h-[70vh] lg:h-screen md:bg-[url('/deliveryInfo/d-bg.svg')] md:bg-cover md:bg-center md:bg-no-repeat">
      {/* Mobile-only background image (above the content panel) */}
      <div className="md:hidden h-[40vh] sm:h-[50vh] bg-[url('/deliveryInfo/d-bg.svg')] bg-cover bg-center bg-no-repeat" />

      {/* Content panel — full width on mobile, fixed width overlay on desktop */}
      <div className="bg-[#3A3845] md:absolute md:top-0 md:left-[5%] lg:left-[8%] xl:left-[10%] md:h-full md:w-[45%] lg:w-[35%] xl:w-[30%] flex items-center justify-center">
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
              src="/deliveryInfo/Icon.svg"
              width={50}
              height={50}
              alt="Moon icon"
              className="w-20 md:w-28 lg:w-40 h-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.7 }}
            className="fon font-extrabold text-white leading-tight mt-4 md:mt-5 origin-center text-3xl sm:text-4xl md:text-4xl lg:text-6xl"
          >
            DELIVERY INFO
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 1.1,
            }}
          >
            <div className="h-0.5 bg-[#CAC9CF] w-60 lg:w-90 my-12 md:w-50"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 1.4,
            }}
            className="text-2xl text-white font-bold"
          >
            Follow us on social media
          </motion.p>

          <div className="flex gap-6 mt-10">
            {social.map((b, i) => (
              <motion.div
                key={b.alt}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 1.7 + i * 0.15,
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.15, backgroundColor: "#c9b0a5" }}
                  whileTap={{ scale: 1.1 }}
                  className="bg-[#826F66] p-3 text-white cursor-pointer"
                >
                  <Image
                    src={b.src}
                    width={20}
                    height={20}
                    alt={b.alt}
                    className="h-5 w-5"
                  />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
