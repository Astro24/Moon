"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const SHIPPING_COST = 15.0;

export default function InvoicePopup({ order, onClose }) {
  const items = order.items || [];
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subtotal + SHIPPING_COST;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
      >
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg shadow-xl z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold">Invoice</h2>
            <button
              onClick={onClose}
              aria-label="Close invoice"
              className="cursor-pointer hover:opacity-70"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Invoice content */}
          <div className="p-6 space-y-6">
            <div className="flex justify-between text-sm">
              <div>
                <p className="font-bold text-lg">Moon Ceramics</p>
                <p className="text-gray-500">Handmade since 1650</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{order.orderId}</p>
                <p className="text-gray-500">{order.orderDate}</p>
              </div>
            </div>

            <div className="text-sm">
              <p className="font-bold mb-1">Bill to:</p>
              <p className="text-gray-600">
                {order.firstName} {order.lastName}
                <br />
                {order.address}
                <br />
                {order.city}, {order.state} {order.ZIPcode}
              </p>
            </div>

            {/* Items table */}
            <div>
              <div className="grid grid-cols-[1fr_60px_80px] gap-2 text-xs font-bold uppercase tracking-wider border-b pb-2">
                <span>Item</span>
                <span className="text-center">Qty</span>
                <span className="text-right">Price</span>
              </div>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[1fr_60px_80px] gap-2 text-sm py-3 border-b border-gray-100"
                >
                  <span>{item.name}</span>
                  <span className="text-center">{item.quantity}</span>
                  <span className="text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span>${SHIPPING_COST.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Print button */}
          <div className="p-6 border-t">
            <button
              onClick={handlePrint}
              className="w-full bg-[#33333b] text-white py-3 font-bold text-sm tracking-widest uppercase hover:bg-black transition-colors cursor-pointer"
            >
              Print Invoice
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
