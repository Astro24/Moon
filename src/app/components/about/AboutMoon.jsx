"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "1910",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
    img: "/about/jar.svg",
  },
  {
    year: "1990",
    text: "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit",
    img: "/about/jar2.svg",
  },
  {
    year: "2010",
    text: "Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus. sit aliquam sit nullam neque ultrices.",
    img: "/about/j-plate1.svg",
  },
];

export default function AboutMoon() {
  return (
    <section>
      <div className="text-center mt-20">
        <h1 className="font-garamond font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase">
          About Moon
        </h1>
        <p className="text-[#595667] mt-4">
          Moon&apos;s handmade ceramic products have been around since 1650,
          let&apos;s explore our journey
        </p>
      </div>

      {/* REFACTOR: map over timeline array instead of hardcoded JSX.
        isReversed alternates layout direction on even/odd rows. */}
      <div className="mx-4 md:mx-10 lg:mx-45 my-20 md:my-35 flex flex-col">
        {timeline.map((item, i) => {
          const isReversed = i % 2 === 1;

          return (
            <div
              key={item.year}
              className="grid grid-cols-1 md:grid-cols-2 overflow-hidden"
            >
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`bg-[#F7F6F5] flex flex-col justify-center items-center text-center px-8 md:px-16 lg:px-24 py-16 md:py-20 ${
                  isReversed ? "md:order-2" : "md:order-1"
                }`}
              >
                <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight uppercase">
                  {item.year}
                </h2>

                <p className="text-gray-500 text-sm md:text-base mt-5 max-w-sm">
                  {item.text}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className={`relative bg-[#A8C4D1] min-h-75 md:min-h-100 ${
                  isReversed ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  src={item.img}
                  fill
                  alt={`Moon ceramics in ${item.year}`}
                  className="object-cover"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
