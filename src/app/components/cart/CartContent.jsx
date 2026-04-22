"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/app/contexts/CartContext";
import CartItems from "../shared/CartItems";

export default function CartContent() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, subtotal, totalItems } =
    useCart();

  // Empty cart state
  if (cart.length === 0) {
    return (
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-260 mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#222] mb-4">
            Your cart is empty
          </h1>
          <p className="text-[#8b8b8b] mb-8">
            Looks like you haven&apos;t added anything yet.
          </p>
          <Link
            href="/Shop"
            className="inline-block bg-[#363347] text-white px-8 py-3 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#4a465f] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="max-w-260 mx-auto px-4 sm:px-5 md:px-3">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] md:text-sm text-[#8b8b8b] mb-5 md:mb-6">
          <span
            onClick={() => router.push("/")}
            className="cursor-pointer transition-colors duration-200 hover:text-blue-500"
          >
            Home
          </span>
          <span>/</span>
          <span>Shopping Cart</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-[#222] mb-6 md:mb-8">
          Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
        </h1>

        <CartItems />
        
        {/* Coupon + total */}
        <div className="flex flex-col items-stretch md:items-end mt-8">
          <div className="flex flex-col sm:flex-row gap-2 mb-5 w-full md:w-auto">
            <input
              type="text"
              placeholder="Coupon code"
              className="w-full sm:w-41.25 h-10.5 border border-black px-3 text-xs outline-none"
            />
            {/* TODO: wire up coupon logic — currently UI only */}
            <button
              type="button"
              className="h-10.5 px-5 bg-[#363347] text-white text-[11px] font-bold hover:bg-[#4a465f] cursor-pointer"
            >
              APPLY COUPON
            </button>
          </div>

          <div className="bg-[#363347] text-white p-5 md:p-6 w-full md:w-82.5">
            <h2 className="text-2xl md:text-[28px] font-semibold mb-5">
              Cart total
            </h2>

            <div className="flex justify-between mb-3 text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-3 text-sm">
              <span>Cart total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <Link href="/Checkout" className="block w-full">
              <button
                type="button"
                className="w-full h-11 mt-4 border border-[#8f8c9e] text-[10px] font-bold hover:bg-white hover:text-[#363347] hover:border-white transition-colors duration-200 cursor-pointer"
              >
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
