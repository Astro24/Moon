"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/app/contexts/CartContext";
import BillingForm from "@/app/components/checkout/BillingForm";
import OrderTotal from "@/app/components/checkout/OrderTotal";
import Payment from "@/app/components/checkout/Payment";

export default function Checkout() {
  const router = useRouter();
  const { cart, clearCart, subtotal } = useCart();

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const orderData = Object.fromEntries(formData.entries());

    orderData.items = [...cart]; 
    orderData.subtotal = subtotal;
    orderData.orderId = `ORD-${Date.now()}`;
    orderData.orderDate = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    localStorage.setItem("recentOrder", JSON.stringify(orderData));

    const existingHistory = JSON.parse(localStorage.getItem("HistoryOrders") || "[]");
    const updatedHistory = [orderData, ...existingHistory]; // Newest first
    localStorage.setItem("HistoryOrders", JSON.stringify(updatedHistory));

    clearCart();
    router.push("/OrderDetails");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <Link href="/Cart" className="hover:underline">
          Cart
        </Link>{" "}
        /{" "}
        <Link href="/Checkout" className="hover:underline">
          Shipping
        </Link>{" "}
        / <span className="text-black font-semibold underline">Payment</span>
      </div>

      <form
        onSubmit={handlePlaceOrder}
        className="grid grid-cols-1 lg:grid-cols-12 gap-16"
      >
        {/* Left: billing form */}
        <div className="lg:col-span-7">
          <BillingForm />
        </div>

        {/* Right: order summary + payment */}
        <div className="lg:col-span-5">
          <OrderTotal />
          <Payment />
        </div>
      </form>
    </div>
  );
}
