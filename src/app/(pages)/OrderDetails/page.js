"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import OrderHeader from "@/app/components/orderDetails/OrderHeader";
import OrderItems from "@/app/components/orderDetails/OrderItems";
import OrderSummary from "@/app/components/orderDetails/OrderSummary";

export default function OrderDetails() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Retrieve the order we just saved in the Checkout process
    const savedOrder = localStorage.getItem("recentOrder");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">No order found</h1>
          <p className="text-gray-500 mb-6">
            Place an order first to see your order details.
          </p>
          <Link
            href="/Shop"
            className="inline-block bg-[#363347] text-white px-8 py-3 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#4a465f] transition-colors"
          >
            Browse Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 font-sans">
      {/* Breadcrumb */}
      <div className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 flex flex-wrap gap-1">
        <Link href="/Cart" className="hover:underline">
          Cart
        </Link>{" "}
        /
        <Link href="/Shop" className="hover:underline">
          Shop
        </Link>{" "}
        /
        <Link href="/Checkout" className="hover:underline">
          Checkout
        </Link>{" "}
        /
        <span className="text-black font-semibold underline">
          Order Details
        </span>
      </div>

      <div className="max-w-4xl mx-auto p-0 sm:p-6">
        {/* These components will now receive the data saved from the form + the cart */}
        <OrderHeader order={order} />
        <OrderItems items={order.items} />
        <OrderSummary order={order} />
      </div>
    </div>
  );
}
