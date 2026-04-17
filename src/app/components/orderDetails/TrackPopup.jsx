"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCheck, FaTruck, FaBox, FaHome } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import Link from "next/link";

const trackingSteps = [
  {
    label: "Order Placed",
    icon: MdPayment,
    status: "completed",
    desc: "Your order has been confirmed",
  },
  {
    label: "Processing",
    icon: FaBox,
    status: "completed",
    desc: "We're preparing your items",
  },
  {
    label: "Shipped",
    icon: FaTruck,
    status: "current",
    desc: "Your package is on its way",
  },
  {
    label: "Delivered",
    icon: FaHome,
    status: "upcoming",
    desc: "Estimated arrival in 25-30 days",
  },
];

export default function TrackPopup({ order, onClose }) {
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
          className="bg-white w-full max-w-md max-h-[90vh] overflow-y-auto rounded-lg shadow-xl z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h2 className="text-xl font-bold">Track Order</h2>
              <p className="text-xs text-gray-400 mt-1">{order.orderId}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close tracking"
              className="cursor-pointer hover:opacity-70"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Timeline */}
          <div className="p-6">
            <div className="relative">
              {trackingSteps.map((step, i) => {
                const Icon = step.icon;
                const isCompleted = step.status === "completed";
                const isCurrent = step.status === "current";
                const isLast = i === trackingSteps.length - 1;

                return (
                  <div key={step.label} className="flex gap-4 mb-0">
                    {/* Icon + connecting line */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.15, duration: 0.3 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                          isCompleted
                            ? "bg-[#10b981] text-white"
                            : isCurrent
                              ? "bg-[#33333b] text-white"
                              : "bg-gray-200 text-gray-400"
                        }`}
                      >
                        {isCompleted ? (
                          <FaCheck size={14} />
                        ) : (
                          <Icon size={16} />
                        )}
                      </motion.div>

                      {/* Connecting line */}
                      {!isLast && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            delay: i * 0.15 + 0.2,
                            duration: 0.3,
                          }}
                          className={`w-0.5 h-12 origin-top ${
                            isCompleted ? "bg-[#10b981]" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div className="pt-2 pb-8">
                      <p
                        className={`font-bold text-sm ${
                          isCompleted || isCurrent
                            ? "text-black"
                            : "text-gray-400"
                        }`}
                      >
                        {step.label}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t space-y-3">
            <Link
              href="/DeliveryInfo"
              className="block w-full bg-[#33333b] text-white py-3 font-bold text-sm tracking-widest uppercase hover:bg-black transition-colors cursor-pointer text-center"
            >
              View Delivery Info
            </Link>
            <button
              onClick={onClose}
              className="w-full border border-gray-300 py-3 font-bold text-sm tracking-widest uppercase hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
