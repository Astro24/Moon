 "use client";
import Image from "next/image";
import Link from "next/link";

const posts = [
  { id: 1, title: "How Can I Use Ceramic When I Decorate??", desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.", date: "Jan 12, 2026" },
  { id: 2, title: "The secrets to a Living Room set?", desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.", date: "Jan 10, 2026" },
  { id: 3, title: "How to Style a Beautiful House", desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam .Vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus.", date: "Jan 8, 2026" },
  { id: 4, title: "The secrets to a Living Room set?", desc: "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.", date: "Jan 6, 2026" },
  { id: 5, title: "Chocolate Clementine Cake Recipe", desc: "Vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus.", date: "Jan 4, 2026" },
  { id: 6, title: "Holiday Food Traditions With MoonFamily", desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam.", date: "Jan 2, 2026" }
];

export default function Page() {
  return (
    <div className="bg-gray-100 text-gray-800 font-serif">

      {/* Hero */}
      <section className="grid md:grid-cols-2 bg-white">
        <div className="relative h-[350px]">
          <Image src="/images/hero.svg" alt="hero" fill className="object-cover hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex flex-col justify-center p-10">
          <h2 className="text-3xl font-semibold mb-4 tracking-wide">WHAT’S IN A GARDEN SET?</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Maecenas ornare mi non risus viverra, vulputate aliquam nisi. Nunc vitae elit non est consectetur adipiscing elit.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-8 p-10">

        {/* Posts */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
          {posts.map((post) => (

            <Link key={post.id} href="/BlogDetails" className="block hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition cursor-pointer">

                <div className="relative h-40">
                  <Image src={`/images/blog${post.id}.svg`} alt="blog" fill className="object-cover" />
                </div>

                <div className="p-4">
                  <div className="text-[11px] text-gray-400 mb-2 tracking-wide">
                    By MO • {post.date}
                  </div>

                  <h3 className="font-semibold text-base mb-2 leading-snug">{post.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{post.desc}</p>
                </div>

              </div>
            </Link>

          ))}

          {/* Pagination */}
          <div className="col-span-2 flex justify-center mt-8">
            <div className="flex items-center gap-2 text-sm">

              <button className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-200">←</button>

              <button className="w-8 h-8 flex items-center justify-center rounded-md bg-black text-white">1</button>

              <button className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-200">2</button>

              <button className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-200">3</button>

              <span className="px-2 text-gray-400">...</span>

              <button className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-200">9</button>

              <button className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-200">→</button>

            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <input className="w-full border p-2 text-sm rounded" placeholder="Search for product..." />
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-3 tracking-wide">POPULAR POSTS</h4>

            {posts.slice(0,3).map((post) => (
              <div key={post.id} className="flex gap-3 mb-3 items-center">
                <div className="relative w-12 h-12">
                  <Image src={`/images/blog${post.id}.svg`} alt="post" fill className="object-cover rounded" />
                </div>
                <div>
                  <p className="text-xs leading-tight">{post.title}</p>
                  <span className="text-[10px] text-gray-400">{post.date}</span>
                </div>
              </div>
            ))}

          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2 tracking-wide">CATEGORIES</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Creative (5)</li>
              <li>Decor (3)</li>
              <li>Furniture (7)</li>
              <li>Office (2)</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2 tracking-wide">TAGS</h4>
            <div className="flex flex-wrap gap-2">
              {["Ceramic","Decor","Kitchen","Modern","Style"].map(tag => (
                <span key={tag} className="text-xs border px-2 py-1 rounded hover:bg-black hover:text-white transition">{tag}</span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}