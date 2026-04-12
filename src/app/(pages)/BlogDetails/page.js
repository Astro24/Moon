import Image from "next/image";

export default function BlogDetails() {
  return (
    <div className="bg-white text-[#1a1a1a] font-sans px-10 py-24 min-h-screen">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-24">
        
        <aside className="lg:w-[280px] shrink-0">
          <div className="sticky top-12">
            <div className="flex items-center gap-5 mb-12">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" 
                  alt="Saarah Mcbride" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h4 className="font-extrabold text-[18px] tracking-tight text-black">Saarah Mcbride</h4>
                <p className="text-[#b0b0b0] text-[12px] uppercase tracking-[0.2em] font-bold mt-1">Author</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-10">
              <h5 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cccccc] mb-5">About Author</h5>
              <p className="text-[#757575] text-[15px] leading-[1.8] font-normal">
                Explore the journey of a personal author, their creative process, and the challenges they face in crafting unique stories. This article delves into how authors draw from their experiences.
              </p>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex justify-between items-end mb-6">
            <h1 className="text-[52px] font-bold leading-[1.05] text-[#1a1a1a] max-w-[800px] tracking-tight">
              The Art of Ceramic Craftsmanship: Bringing Beauty to Everyday Living
            </h1>
            <span className="text-[#1a1a1a] font-bold text-[20px] pb-2 shrink-0 border-b-2 border-black">Nov 29</span>
          </div>

          <p className="text-[#b0b0b0] text-[13px] mb-16 font-bold uppercase tracking-[0.3em]">3 Mins Read</p>

          <div className="space-y-12 text-[#444] text-[20px] leading-[2] font-light text-justify">
            <div className="w-full rounded-sm overflow-hidden mb-16 shadow-sm bg-gray-50">
              <img 
                src="/green.svg" 
                alt="Ceramic Vases" 
                className="w-full h-auto object-cover" 
              />
            </div>

            <section>
              <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4 uppercase">The History Behind Ceramic Craftsmanship</h2>
              <p>
                Ceramic making is one of the oldest forms of art known to humanity, dating back thousands of years. Early civilizations used clay to create tools, storage containers, and decorative objects. Over time, ceramic techniques evolved into refined art forms that reflected cultural traditions and regional styles. Today, many ceramic products still carry the influence of these historical practices, preserving a sense of heritage in modern designs.
              </p>
            </section>

            <section>
              <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4 uppercase">Why Ceramics Are Perfect for Tableware</h2>
              <p>
                Ceramic tableware remains one of the most popular choices for dining because of its durability and elegance. Plates, bowls, and cups made from high-quality ceramic materials are resistant to heat and suitable for daily use. Beyond practicality, ceramic tableware enhances the dining experience by adding visual appeal to the table. Whether used for casual meals or formal gatherings, ceramic pieces create a sense of refinement and hospitality.
              </p>
            </section>

            <section>
              <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4 uppercase">The Beauty of Handmade Ceramics</h2>
              <p>
                Handmade ceramics offer a unique charm that mass-produced items often lack. Each handcrafted piece carries subtle variations in texture, color, and form, making it one of a kind. Artisans carefully shape, glaze, and fire each item, investing time and skill into the process. This attention to detail results in products that feel personal, authentic, and artistic.
              </p>
            </section>

            <section>
              <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4 uppercase">Ceramics as Decorative Elements</h2>
              <p>
                Ceramic décor plays a major role in interior design. Vases, planters, figurines, and wall accents can transform a space and reflect personal style. Neutral-toned ceramics add elegance and calmness, while colorful pieces bring energy and vibrancy. Because ceramics come in many shapes and finishes, they easily complement both modern and traditional home designs.
              </p>
            </section>

            <section>
              <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4 uppercase">Sustainability and Longevity of Ceramic Products</h2>
              <p>
                Ceramic products are valued not only for their beauty but also for their sustainability. Made from natural materials such as clay and minerals, ceramics are environmentally friendly when produced responsibly. Their durability also means they last for many years, reducing the need for frequent replacements. Investing in high-quality ceramics supports both sustainability and long-term value.
              </p>
            </section>

            <section>
              <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4 uppercase">Choosing the Right Ceramic Pieces for Your Home</h2>
              <p>
                Selecting ceramic products involves balancing style, function, and quality. When choosing tableware, it is important to consider durability and ease of cleaning. For decorative items, color and design should match the overall theme of the space. Mixing different ceramic textures and shapes can also create a more dynamic and personalized look within a room.
              </p>
            </section>

            <section>
              <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4 uppercase">Conclusion</h2>
              <p>
                Ceramics continue to hold a special place in modern homes because they combine artistry, tradition, and functionality. Whether used for dining, decoration, or gifting, ceramic products add lasting beauty and value to everyday life. By choosing well-crafted ceramic pieces, individuals not only enhance their living spaces but also support the craftsmanship and creativity behind each design. As ceramic artistry continues to evolve, its timeless appeal remains stronger than ever.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
