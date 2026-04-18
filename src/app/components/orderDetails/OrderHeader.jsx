"use client";
import { useState } from "react";
import { TbFileInvoice } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import InvoicePopup from "./InvoicePopup";
import TrackPopup from "./TrackPopup";

export default function OrderHeader({ order }) {
  const [showInvoice, setShowInvoice] = useState(false);
  const [showTrack, setShowTrack] = useState(false);

  // Fake estimated delivery
  const orderDate = new Date(order.orderDate);
  const estimatedDelivery = new Date(orderDate);
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  const formattedDelivery = estimatedDelivery.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <h1 className="text-2xl sm:text-3xl text-black font-extrabold break-all">
          Order ID: {order.orderId}
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={() => setShowInvoice(true)}
            className="flex justify-center items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 w-full sm:w-auto cursor-pointer"
          >
            <TbFileInvoice /> Invoice
          </button>
          <button
            onClick={() => setShowTrack(true)}
            className="flex justify-center items-center gap-2 px-4 py-2 bg-[#33333b] text-white rounded-md text-sm font-medium hover:bg-black w-full sm:w-auto cursor-pointer"
          >
            Track order <CiLocationOn />
          </button>
        </div>
      </div>

      <p className="mb-4 text-lg">
        Thank you for your order, <strong>{order.firstName}</strong>!
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm">
        <p className="text-gray-400">
          Order date:{" "}
          <span className="font-bold text-black">{order.orderDate}</span>
        </p>
        <span className="hidden sm:inline">|</span>
        <p className="text-[#10b981] flex items-center gap-2 font-semibold">
          <FaTruck className="shrink-0" /> Estimated delivery:{" "}
          {formattedDelivery}
        </p>
      </div>

      <hr className="my-4 h-[1.5px] bg-gray-300 border-0" />

      {/* Popups */}
      {showInvoice && (
        <InvoicePopup order={order} onClose={() => setShowInvoice(false)} />
      )}
      {showTrack && (
        <TrackPopup order={order} onClose={() => setShowTrack(false)} />
      )}
    </>
  );
}
