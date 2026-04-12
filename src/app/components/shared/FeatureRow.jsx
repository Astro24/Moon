"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeatureRow({
  kicker,
  title,
  text,
  image,
  link,
  reversed = false,
  useH2 = false,
}) {
  const Heading = useH2 ? "h2" : "h1";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`bg-[#F7F6F5] flex flex-col justify-center items-center text-center px-8 md:px-16 lg:px-24 py-16 md:py-20 ${
          reversed ? "md:order-2" : "md:order-1"
        }`}
      >
        {kicker && <p className="text-gray-500 text-2xl font-bold">{kicker}</p>}

        <Heading
          className={`font-garamond font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight uppercase whitespace-pre-line ${
            kicker ? "mt-3" : ""
          }`}
        >
          {title}
        </Heading>

        <p className="text-gray-500 text-sm md:text-base mt-5 max-w-sm">
          {text}
        </p>

        {link && (
          <Link
            href={link.href}
            className="mt-8 text-sm md:text-base font-bold uppercase underline underline-offset-4 decoration-2 text-black hover:text-[#826F66] transition-colors"
          >
            {link.label}
          </Link>
        )}
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className={`relative bg-[#A8C4D1] min-h-75 md:min-h-100 ${
          reversed ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image src={image} fill alt={title} className="object-cover" />
      </motion.div>
    </div>
  );
}
