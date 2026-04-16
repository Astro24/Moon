"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaPlus,
  FaMinus,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { products } from "../../../../lib/data";
import { useCart } from "@/app/contexts/CartContext";
import { useFavorites } from "@/app/contexts/FavoritesContext";
import Products from "@/app/components/shared/Products";

const colorOptions = [
  { name: "blue", class: "bg-[#b8cbd6]" },
  { name: "white", class: "bg-white border border-gray-300" },
  { name: "orange", class: "bg-[#c6893d]" },
  { name: "navy", class: "bg-[#2c3e50]" },
  { name: "peach", class: "bg-[#e5c1b1]" },
  { name: "sage", class: "bg-[#a3b19c]" },
];

export default function SingleProduct() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const product = products.find((p) => p.id === Number(params.id));

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [mainImage, setMainImage] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  // Build image gallery: use product.images if it exists, else fall back to main image
  const gallery =
    product?.images?.length > 0
      ? product.images
      : product
        ? [product.image]
        : [];

  // Set main image after product loads
  useEffect(() => {
    if (gallery.length > 0) {
      setMainImage(gallery[0]);
    }
  }, [product?.id]);

  useEffect(() => {
    if (!product) return;
    const others = products.filter((p) => p.id !== product.id);
    const shuffled = [...others].sort(() => Math.random() - 0.5).slice(0, 4);
    setSimilarProducts(shuffled);
  }, [product?.id]);

  // Not found state
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <p className="text-gray-500 mb-6">
            We couldn&apos;t find the product you&apos;re looking for.
          </p>
          <Link
            href="/Shop"
            className="inline-block bg-[#363347] text-white px-8 py-3 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#4a465f] transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const favorited = isFavorite(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/Checkout");
  };

  return (
    <div className="max-w-350 mx-auto py-8 px-4 md:px-10 font-sans">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[13px] mb-10 text-gray-400">
        <span
          onClick={() => router.push("/")}
          className="cursor-pointer hover:text-black"
        >
          Home
        </span>
        <span>/</span>
        <span
          onClick={() => router.push("/Shop")}
          className="cursor-pointer hover:text-black"
        >
          Shop
        </span>
        <span>/</span>
        <span className="text-black font-medium truncate max-w-50 md:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main product section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
        {/* Image gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-[#f7f4ef] flex items-center justify-center overflow-hidden">
            {mainImage && (
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-cover"
              />
            )}
          </div>

          {/* Thumbnails — only show if product has multiple images */}
          {gallery.length > 1 && (
            <div className="grid grid-cols-6 gap-2">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`relative aspect-square bg-[#f7f4ef] border-2 transition-colors ${
                    mainImage === img
                      ? "border-black"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product details */}
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mt-2 space-x-2 flex-wrap gap-y-1">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4].map((s) => (
                  <FaStar key={s} size={16} />
                ))}
                <FaStar size={16} className="text-gray-300" />
              </div>
              <span className="text-sm text-gray-500">(1256 Reviews)</span>
              <span className="text-sm text-gray-500">
                Stock:{" "}
                <span className="text-green-600 font-medium">In stock</span>
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-3 mt-4">
              <span className="text-3xl font-light text-slate-900">
                ${product.price}.00
              </span>
              {product.oldPrice && (
                <span className="text-xl text-gray-400 line-through">
                  ${product.oldPrice}.00
                </span>
              )}
            </div>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              {product.desc}
            </p>
          </div>

          {/* Color selector — visual only */}
          {/* TODO: wire up real color variants once products have color data */}
          <div>
            <p className="text-sm font-medium mb-3">
              Color:{" "}
              <span className="capitalize text-gray-600">{selectedColor}</span>
            </p>
            <div className="flex space-x-3">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={`Select ${color.name} color`}
                  className={`w-8 h-8 ${color.class} ${
                    selectedColor === color.name
                      ? "ring-2 ring-black ring-offset-1"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="space-y-4 pt-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-gray-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  <FaMinus size={12} />
                </button>
                <span className="px-6 py-2 border-x border-gray-300 font-medium min-w-15 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  <FaPlus size={12} />
                </button>
              </div>

              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex-1 bg-[#363347] text-white py-3 px-8 font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#4a465f] transition-colors cursor-pointer"
              >
                Add to Cart
              </motion.button>
            </div>

            {/* Buy Now + Wishlist */}
            <div className="flex space-x-2">
              <motion.button
                onClick={handleBuyNow}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex-1 border-2 border-[#363347] text-[#363347] py-3 px-8 font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#363347] hover:text-white transition-colors cursor-pointer"
              >
                Buy Now
              </motion.button>

              <button
                onClick={() => toggleFavorite(product)}
                aria-label={
                  favorited ? "Remove from favorites" : "Add to favorites"
                }
                className="border-2 border-[#363347] p-3 hover:bg-gray-50 cursor-pointer"
              >
                {favorited ? (
                  <FaHeart size={20} className="text-red-500" />
                ) : (
                  <FaRegHeart size={20} className="text-slate-700" />
                )}
              </button>
            </div>
          </div>

          {/* Share */}
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
            <span className="text-sm font-medium text-gray-500">
              Share this:
            </span>
            <div className="flex space-x-5 text-[#c69c7c]">
              <a
                href="#"
                aria-label="Share on Facebook"
                className="hover:opacity-70 transition-opacity"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                aria-label="Share on Twitter"
                className="hover:opacity-70 transition-opacity"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Share on Instagram"
                className="hover:opacity-70 transition-opacity"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Share on LinkedIn"
                className="hover:opacity-70 transition-opacity"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Accordion — UI only */}
          {/* TODO: wire up accordion expand/collapse state */}
          <div className="border-t border-gray-200">
            {["Details", "Dimensions", "Reviews"].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
              >
                <span className="text-sm font-medium uppercase tracking-wide">
                  {item}
                </span>
                <FaPlus size={14} className="text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Similar items — uses shared Products component */}
      {similarProducts.length > 0 && (
        <div className="border-t border-gray-200 col- pt-16 mt-16">
          <h1 className="uppercase font-garamond font-bold text-3xl px-12">
            Similar Items
          </h1>
          <Products items={similarProducts} limit={3} />
        </div>
      )}
    </div>
  );
}
