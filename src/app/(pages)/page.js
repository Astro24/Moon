export default function BlogDetails() {
  return (
    <div className="bg-white text-[#1a1a1a] font-sans px-10 py-20 min-h-screen">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* العمود الأيسر: بيانات الكاتبة */}
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
                Explore the journey of a personal author, their creative process, and the challenges they face in crafting unique stories. This article delves into how authors draw from their experiences and connect with readers through the power of storytelling.
              </p>
            </div>

            <div className="mt-10">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#cccccc] mb-4">Share To</h5>
              <div className="flex gap-2">
                <div className="w-9 h-9 border border-gray-100 flex items-center justify-center text-gray-400">📸</div>
                <div className="w-9 h-9 border border-gray-100 flex items-center justify-center text-gray-400">f</div>
                <div className="w-9 h-9 border border-gray-100 flex items-center justify-center text-gray-400 text-xs font-bold">𝕏</div>
                <div className="w-9 h-9 border border-gray-100 flex items-center justify-center text-gray-400">🔗</div>
              </div>
            </div>
          </div>
        </aside>

        {/* العمود الأيمن: المقال كامل بالترتيب */}
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
              Ceramic products have been part of human life for centuries, blending artistry with functionality in ways few materials can match. From elegant dinnerware to decorative vases, ceramics bring warmth, texture, and character into homes around the world. Today, modern ceramic craftsmanship combines traditional techniques with contemporary design, creating pieces that are both practical and visually striking. In this article, we explore the beauty, craftsmanship, and value that ceramics bring to everyday living.
            </p>

            {/* صورة البومة (تم تعديل الاسم لـ green.svg كما طلبتِ) */}
            <div className="w-full rounded-sm overflow-hidden my-12 shadow-sm">
              <img 
                src="green.svg" 
                alt="Ceramic Vases" 
                className="w-full h-auto object-cover" 
              />
            </div>

            {/* كل الأقسام التالية من الصورة الطويلة */}
            <div>
              <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-5">The History Behind Ceramic Craftsmanship</h2>
              <p>
                Ceramic making is one of the oldest forms of art known to humanity, dating back thousands of years. Early civilizations used clay to create tools, storage containers, and decorative objects. Over time, ceramic techniques evolved into refined art forms that reflected cultural traditions and regional styles. Today, many ceramic products still carry the influence of these historical practices, preserving a sense of heritage in modern designs.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-5">Why Ceramics Are Perfect for Tableware</h2>
              <p>
                Ceramic tableware remains one of the most popular choices for dining because of its durability and elegance. Plates, bowls, and cups made from high-quality ceramic materials are resistant to heat and suitable for daily use. Beyond practicality, ceramic tableware enhances the dining experience by adding visual appeal to the table. Whether used for casual meals or formal gatherings, ceramic pieces create a sense of refinement and hospitality.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-5">The Beauty of Handmade Ceramics</h2>
              <p>
                Handmade ceramics offer a unique charm that mass-produced items often lack. Each handcrafted piece carries subtle variations in texture, color, and form, making it one of a kind. Artisans carefully shape, glaze, and fire each item, investing time and skill into the process. This attention to detail results in products that feel personal, authentic, and artistic.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-5">Ceramics as Decorative Elements</h2>
              <p>
                Ceramic décor plays a major role in interior design. Vases, planters, figurines, and wall accents can transform a space and reflect personal style. Neutral-toned ceramics add elegance and calmness, while colorful pieces bring energy and vibrancy. Because ceramics come in many shapes and finishes, they easily complement both modern and traditional home designs.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-5">Sustainability and Longevity of Ceramic Products</h2>
              <p>
                Ceramic products are valued not only for their beauty but also for their sustainability. Made from natural materials such as clay and minerals, ceramics are environmentally friendly when produced responsibly. Their durability also means they last for many years, reducing the need for frequent replacements. Investing in high-quality ceramics supports both sustainability and long-term value.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-5">Choosing the Right Ceramic Pieces for Your Home</h2>
              <p>
                Selecting ceramic products involves balancing style, function, and quality. When choosing tableware, it is important to consider durability and ease of cleaning. For decorative items, color and design should match the overall theme of the space. Mixing different ceramic textures and shapes can also create a more dynamic and personalized look within a room.
              </p>
            </div>

            <div className="pb-20">
               <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-5">Conclusion</h2>
               <p>
                 Ceramics continue to hold a special place in modern homes because they combine artistry, tradition, and functionality. Whether used for dining, decoration, or gifting, ceramic products add lasting beauty and value to everyday life. By choosing well-crafted ceramic pieces, individuals not only enhance their living spaces but also support the craftsmanship and creativity behind each design. As ceramic artistry continues to evolve, its timeless appeal remains stronger than ever.
               </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}