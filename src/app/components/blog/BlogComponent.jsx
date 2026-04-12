"use client";
import { useState } from "react";
import Image from "next/image";
import BlogPosts from "./BlogPosts";
import Pagination from "../shared/Pagination";
import { posts } from "../../../../lib/data";

const POSTS_PER_PAGE = 6;

export default function BlogComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

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
            WHAT&apos;S IN A GARDEN SET?
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
          <BlogPosts variant="grid" posts={visiblePosts} />

          <div className="col-span-2">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
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