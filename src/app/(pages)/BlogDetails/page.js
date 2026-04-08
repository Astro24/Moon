import Image from "next/image";

export default function BlogDetails() {
  return (
    <div className="bg-white text-[#1a1a1a] font-sans px-10 py-20 min-h-screen">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-20">
        <aside className="lg:w-[250px] shrink-0">
          <div className="sticky top-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-100">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Saarah" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-[16px]">Saarah Mcbride</h4>
                <p className="text-[#b0b0b0] text-[11px] uppercase tracking-widest font-bold mt-1">Author</p>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-8">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#cccccc] mb-4">About Author</h5>
              <p className="text-[#757575] text-[14px] leading-[1.8]">
                Explore the journey of a personal author, their creative process, and the challenges they face in crafting unique stories. This article delves into how authors draw from their experiences.
              </p>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-[48px] font-bold leading-[1.1] text-[#1a1a1a] max-w-[700px]">
              The Art of Ceramic Craftsmanship: Bringing Beauty to Everyday Living
            </h1>
            <span className="text-[#1a1a1a] font-bold text-base mt-4 shrink-0">Nov 29</span>
          </div>
          <p className="text-[#b0b0b0] text-[12px] mb-12 font-bold uppercase tracking-widest">3 Mins Read</p>
          <div className="space-y-10 text-[#444] text-[18px] leading-[1.9] font-light">
            <p>
              Ceramic products have been part of human life for centuries, blending artistry with functionality in ways few materials can match. From elegant dinnerware to decorative vases, ceramics bring warmth, texture, and character into homes around the world.
            </p>
            <div className="w-full rounded-sm overflow-hidden my-12 shadow-sm">
              <img src="/green.svg" alt="Ceramic Vases" className="w-full h-auto object-cover" />
            </div>
            <h2 className="text-[24px] font-bold text-[#1a1a1a]">The History Behind Ceramic Craftsmanship</h2>
            <p>
              Ceramic making is one of the oldest forms of art known to humanity, dating back thousands of years. Early civilizations used clay to create tools, storage containers, and decorative objects.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}