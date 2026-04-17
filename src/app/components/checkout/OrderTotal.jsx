"use client";
import { useCart } from "@/app/contexts/CartContext";

const SHIPPING_COST = 15.0;

export default function OrderTotal() {
  const { cart, subtotal } = useCart();

  const total = subtotal + SHIPPING_COST;

  return (
    <div className="mb-10">
      <div className="flex justify-between font-bold border-b-2 border-black pb-2 mb-4">
        <span>Product</span>
        <span>Subtotal</span>
      </div>

      {/* REFACTOR: reads from CartContext instead of hardcoded products */}
      <div className="space-y-3 text-gray-700">
        {cart.length === 0 ? (
          <p className="text-gray-400 text-sm">No items in cart</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name}
                {item.quantity > 1 && (
                  <span className="text-gray-400 ml-1">x{item.quantity}</span>
                )}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))
        )}
      </div>

      <div className="border-t border-gray-200 mt-6 pt-4 space-y-2">
        <div className="flex justify-between font-bold">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${SHIPPING_COST.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between items-center border-t-2 border-black mt-6 pt-4 text-xl font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
