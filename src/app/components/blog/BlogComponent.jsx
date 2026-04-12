"use client";
import Image from "next/image";
import BlogPosts from "./BlogPosts";

export default function BlogComponent() {
  return (
    <div className="bg-gray-100 text-gray-800 font-serif">
      {/* Hero */}
      <section className="grid md:grid-cols-2 bg-white">
        <div className="relative h-87.5">
          <Image
            src="/images/hero.svg"
            alt="hero"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col justify-center p-10">
          <h2 className="text-3xl font-semibold mb-4 tracking-wide">
            WHAT’S IN A GARDEN SET?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Maecenas ornare mi non risus viverra, vulputate aliquam nisi. Nunc
            vitae elit non est consectetur adipiscing elit.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-8 p-10">
        {/* Posts */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
          <BlogPosts variant="grid" />

          {/* Pagination */}
          <div className="col-span-2 flex justify-center mt-8">
            <div className="flex items-center gap-2 text-sm">
              <button className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-200">
                ←
              </button>

              <button className="w-8 h-8 flex items-center justify-center rounded-md bg-black text-white">
                1
              </button>

              <button className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-200">
                2
              </button>

              <button className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-200">
                3
              </button>

              <span className="px-2 text-gray-400">...</span>

              <button className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-200">
                9
              </button>

              <button className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-200">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <input
              className="w-full border p-2 text-sm rounded"
              placeholder="Search for product..."
            />
          </div>

          <BlogPosts variant="compact" />

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
              {["Ceramic", "Decor", "Kitchen", "Modern", "Style"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs border px-2 py-1 rounded hover:bg-black hover:text-white transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
