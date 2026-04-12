"use client";
import FeatureRow from "@/app/components/shared/FeatureRow";
import { timeline } from "../../../../lib/data";

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

      <div className="mx-4 md:mx-10 lg:mx-45 my-20 md:my-35 flex flex-col">
        {timeline.map((item, i) => (
          <FeatureRow
            key={item.year}
            title={item.year}
            text={item.text}
            image={item.img}
            reversed={i % 2 === 1}
            useH2
          />
        ))}
      </div>
    </section>
  );
}
