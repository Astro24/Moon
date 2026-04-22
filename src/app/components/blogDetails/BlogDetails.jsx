import Image from "next/image";
import Link from "next/link";
import { articles } from "../../../../lib/data";

// TODO: Convert to dynamic route /Blog/[slug]/page.jsx once multiple
// articles exist. For now we hardcode articles[0] since there's only one.
export default function BlogDetails() {
  const article = articles[0];

  return (
    <div className="bg-white text-[#1a1a1a] font-sans px-4 md:px-10 py-16 md:py-24 min-h-screen">
      <div className="max-w-300 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Sidebar — author info */}
        <aside className="lg:w-70 shrink-0">
          <div className="lg:sticky lg:top-12">
            {/* FIX: back-to-blog link added so readers aren't stuck on
                the article with no way out. */}
            <Link
              href="/Blog"
              className="text-sm text-gray-500 hover:text-black mb-8 inline-block"
            >
               {"<"} Back to Blog
            </Link>

            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                {/* REFACTOR: author avatar uses next/image.
                    Remote domain must be allowed in next.config.js
                    (images.unsplash.com) for this to work. */}
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-extrabold text-lg tracking-tight text-black">
                  {article.author.name}
                </h4>
                <p className="text-[#b0b0b0] text-xs uppercase tracking-[0.2em] font-bold mt-1">
                  {article.author.role}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-10">
              <h5 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cccccc] mb-5">
                About Author
              </h5>
              <p className="text-[#757575] text-sm md:text-[15px] leading-[1.8] font-normal">
                {article.author.bio}
              </p>
            </div>
          </div>
        </aside>

        {/* Main article */}
        <main className="flex-1">
          <div className="flex justify-between items-end mb-6 gap-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1a1a1a] max-w-200 tracking-tight">
              {article.title}
            </h1>
            <span className="text-[#1a1a1a] font-bold text-base md:text-xl pb-2 shrink-0 border-b-2 border-black whitespace-nowrap">
              {article.date}
            </span>
          </div>

          <p className="text-[#b0b0b0] text-[11px] md:text-[13px] mb-12 md:mb-16 font-bold uppercase tracking-[0.3em]">
            {article.readTime}
          </p>

          <div className="space-y-10 md:space-y-12 text-[#444] text-base md:text-xl leading-loose font-light text-justify">
            {/* Hero image */}
            <div className="w-full rounded-sm overflow-hidden mb-12 md:mb-16 shadow-sm bg-gray-50 relative aspect-video">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* REFACTOR: sections were 7 hardcoded blocks with identical
                structure. Now mapped from article.sections in lib/data.js
                so adding/removing sections is a one-line data change. */}
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a1a1a] mb-4 uppercase">
                  {section.heading}
                </h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
