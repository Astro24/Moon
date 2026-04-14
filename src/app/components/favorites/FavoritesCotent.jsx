"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "@/app/contexts/FavoritesContext";
import { useCart } from "@/app/contexts/CartContext";

export default function FavoritesContent() {
  const router = useRouter();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();

  return (
    <div className="max-w-350 mx-auto py-8 pl-4 md:pl-10 pr-6 font-sans">
      {/* Breadcrumb — matches shop page style */}
      <nav className="flex items-center gap-2 text-[13px] mb-6 text-gray-400">
        <span
          className="cursor-pointer hover:text-black"
          onClick={() => router.push("/")}
        >
          Home
        </span>
        <span>/</span>
        <span
          className="cursor-pointer hover:text-black"
          onClick={() => router.push("/Shop")}
        >
          Shop
        </span>
        <span>/</span>
        <span className="text-black font-medium">Favorites</span>
      </nav>

      {favorites.length === 0 ? (
        // Empty state
        <div className="text-center py-20">
          <p className="uppercase tracking-widest text-gray-400 text-sm font-light mb-6">
            Your favorites list is empty
          </p>
          <Link
            href="/Shop"
            className="inline-block bg-[#363347] text-white px-8 py-3 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#4a465f] transition-colors"
          >
            Browse Shop
          </Link>
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 px-6 md:px-10">
          {favorites.map((p, i) => {
            const favorited = isFavorite(p.id);

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: i * 0.05,
                }}
                className="flex justify-center items-start flex-col h-auto md:h-160 w-full relative"
              >
                {/* Favorite heart */}
                <button
                  onClick={() => toggleFavorite(p)}
                  aria-label={
                    favorited ? "Remove from favorites" : "Add to favorites"
                  }
                  className="absolute top-3 right-3 z-10 p-2 cursor-pointer"
                >
                  {favorited ? (
                    <FaHeart className="w-8 h-8 text-red-500" />
                  ) : (
                    <FaRegHeart className="w-8 h-8 text-gray-600 hover:text-red-500 transition-colors" />
                  )}
                </button>

                {/* Image wrapper */}
                <Link
                  href={`/Shop/${p.id}`}
                  className="overflow-hidden w-full block"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image
                      src={p.image}
                      width={400}
                      height={400}
                      alt={p.name}
                      className="w-full h-50 sm:h-60 md:h-100 object-cover"
                    />
                  </motion.div>
                </Link>

                {/* Name and price */}
                <Link href={`/Shop/${p.id}`} className="w-full">
                  <h3 className="mt-3 md:mt-5 text-sm md:text-lg font-bold uppercase hover:underline">
                    {p.name}
                  </h3>
                </Link>
                <p className="text-sm md:text-lg font-bold">${p.price}.00</p>

                <p className="w-full md:w-70 text-[#807F86] text-xs md:text-sm mt-2 md:mt-3 line-clamp-2">
                  {p.desc}
                </p>

                {/* Add to cart button */}
                <motion.button
                  onClick={() => addToCart(p)}
                  whileHover={{
                    scale: 1.01,
                    backgroundColor: "#000000",
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 1 }}
                  className="w-full border py-2 md:py-3 mt-10 md:mt-auto font-bold text-[10px] tracking-[0.2em] uppercase cursor-pointer"
                >
                  Add to cart
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
