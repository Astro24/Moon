import Link from "next/link";
import { TbTruckDelivery } from "react-icons/tb";

const SHIPPING_COST = 15.0;

export default function OrderSummary({ order }) {
  const items = order.items || [];
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subtotal + SHIPPING_COST;

  return (
    <>
      <hr className="my-4 h-[1.5px] bg-gray-300 border-0" />

      {/* Payment + Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-sm mt-6 mb-6">
        <div className="space-y-2">
          <h3 className="font-bold mb-3">Payment</h3>
          <p className="text-gray-500 flex items-center gap-2 capitalize">
            {order.paymentMethod === "card"
              ? `Credit Card ****${order.cardNumber?.slice(-4) || "0000"}`
              : "STC Bank"}
          </p>
          <p className="text-xs text-gray-400">{order.email}</p>
        </div>
        <div>
          <h3 className="font-bold mb-3">Delivery Address</h3>
          <p className="text-gray-500 leading-relaxed">
            {order.firstName} {order.lastName}
            <br />
            {order.address}
            <br />
            {order.city}, {order.state} {order.ZIPcode}
            <br />
            {order.country}
            <br />
            {order.phone}
          </p>
        </div>
      </div>

      <hr className="my-4 h-[1.5px] bg-gray-300 border-0" />

      {/* Help + Totals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mt-6">
        <div className="space-y-3 order-2 md:order-1">
          <h4 className="font-bold mb-2">Need Help?</h4>
          <Link
            href="/OrderIssues"
            className="text-gray-500 hover:text-black transition-colors flex items-center gap-2"
          >
            ⓘ Order Issues ↗
          </Link>
          <Link
            href="/DeliveryInfo"
            className="text-gray-500 hover:text-black transition-colors flex items-center gap-2"
          >
            <TbTruckDelivery className="text-lg" /> Delivery Info ↗
          </Link>
          <Link
            href="/Shop"
            className="text-gray-500 hover:text-black transition-colors flex items-center gap-2"
          >
            ↩ Returns ↗
          </Link>
        </div>

        <div className="space-y-3 text-sm sm:text-base order-1 md:order-2">
          <h4 className="font-bold mb-3">Order Summary</h4>
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shipping</span>
            <span className="font-medium">${SHIPPING_COST.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-extrabold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
}
