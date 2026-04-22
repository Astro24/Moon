import Link from "next/link";
import Image from "next/image";
import { posts as allPosts  } from "../../../../lib/data";

export default function BlogPosts({ variant = "grid", posts = allPosts }) {
  if (variant === "compact") {
    return (
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h4 className="font-semibold mb-3 tracking-wide">POPULAR POSTS</h4>

        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.id}
            href="/BlogDetails"
            className="flex gap-3 mb-3 items-center hover:opacity-70 transition"
          >
            <div className="relative w-12 h-12">
              <Image
                src={`/images/blog${post.id}.svg`}
                alt={post.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <p className="text-xs leading-tight">{post.title}</p>
              <span className="text-[10px] text-gray-400">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <Link
          key={post.id}
          href="/BlogDetails"
          className="block hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition cursor-pointer">
            <div className="relative h-40">
              <Image
                src={`/images/blog${post.id}.svg`}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <div className="text-[11px] text-gray-400 mb-2 tracking-wide">
                By MO • {post.date}
              </div>

              <h3 className="font-semibold text-base mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {post.desc}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
