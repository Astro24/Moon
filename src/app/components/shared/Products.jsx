"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { products } from "../../../../lib/data";
import { useCart } from "@/app/contexts/CartContext";
import { useFavorites } from "@/app/contexts/FavoritesContext";

export default function Products({
  filter = "all",
  limit,
  title,
  items,
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

      <div className="mt-15 flex justify-center items-center gap-6 md:gap-20 flex-wrap px-6 md:px-30">
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
              className="flex justify-center items-start flex-col h-auto md:h-160 w-[calc(50%-12px)] md:w-auto md:max-w-65 relative"
            >
              {/* Favorite heart */}
              <button
                onClick={() => toggleFavorite(p)}
                className="absolute top-3 right-3 z-10 p-2 cursor-pointer"
              >
                {favorited ? (
                  <FaHeart className="text-red-500 text-3xl md:text-lx" />
                ) : (
                  <FaRegHeart className="text-gray-600 hover:text-red-500 text-3xl md:text-lx transition-colors" />
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
    </section>
  );
}