"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { products } from "../../../../lib/data";
import { useCart } from "@/app/contexts/CartContext";
import { useFavorites } from "@/app/contexts/FavoritesContext";

const columnStyles = {
  3: "grid-cols-2 md:grid-cols-3 lg:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
};

export default function Products({
  filter = "all",
  limit,
  title,
  items,
  columns = 4,
}) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  let visibleProducts = items ?? products;

  if (!items) {
    if (filter === "bestSeller") {
      visibleProducts = products.filter((p) => p.bestSeller);
    } else if (filter === "new") {
      visibleProducts = products.filter((p) => p.new);
    } else if (filter === "favorites") {
      visibleProducts = products;
    }
  }

  if (limit) {
    visibleProducts = visibleProducts.slice(0, limit);
  }

  if (visibleProducts.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        No products to show.
      </div>
    );
  }

  const gridClass = columnStyles[columns] || columnStyles[4];

  return (
    <section>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-garamond font-extrabold text-2xl sm:text-3xl md:text-5xl uppercase">
            {title}
          </h2>
        </motion.div>
      )}

      <div className={`mt-10 grid ${gridClass} gap-6 md:gap-8 px-6 md:px-10`}>
        {visibleProducts.map((p, i) => {
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
              className="flex items-start flex-col w-full relative h-full"
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
                  <FaHeart size={30} className="text-red-500" />
                ) : (
                  <FaRegHeart
                    size={30}
                    className="text-gray-600 hover:text-red-500 transition-colors"
                  />
                )}
              </button>

              {/* Image */}
              <Link
                href={`/Shop/${p.id}`}
                className="overflow-hidden w-full block bg-[#f7f4ef]"
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
                    className="w-full aspect-4/5 object-contain"
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

              <p className="w-full text-[#807F86] text-xs md:text-sm mt-2 md:mt-3 line-clamp-2 flex-1">
                {p.desc}
              </p>

              {/* Add to cart */}
              <motion.button
                onClick={() => addToCart(p)}
                whileHover={{
                  scale: 1.01,
                  backgroundColor: "#000000",
                  color: "#ffffff",
                }}
                whileTap={{ scale: 1 }}
                className="w-full border py-3 mt-4 md:mt-6 font-bold text-[10px] tracking-[0.2em] uppercase cursor-pointer"
              >
                Add to cart
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
