"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../../shared/Pagination";

export default function OrdersHistoryPage() {
  const [order, setOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;
  const totalPages = order ? Math.ceil(order.length / itemsPerPage) : 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = order
    ? order.slice(startIndex, startIndex + itemsPerPage)
    : [];

  useEffect(() => {
    const savedHistory = localStorage.getItem("HistoryOrders");
    if (savedHistory) {
      const allOrders = JSON.parse(savedHistory);

      // REFACTOR: flatten all orders into individual items with unique IDs.
      // Each historyId combines orderId + itemId + index + random string
      // to guarantee uniqueness even if the same product appears in
      // multiple orders. Could use UUID package later but this works.
      const itemsWithUniqueIds = allOrders.flatMap((order) =>
        order.items.map((item, idx) => ({
          ...item,
          historyId: `${order.orderId}-${item.id}-${idx}-${Math.random().toString(36).substr(2, 9)}`,
          orderDate: order.orderDate,
        })),
      );

      setOrder(itemsWithUniqueIds);
    }
  }, []);

  if (!order || order.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">No orders yet</h1>
          <p className="text-gray-500 mb-6">
            Place an order first to see your order history.
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
    <section className="overflow-hidden">
      <AnimatePresence>
        <motion.h1
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 25 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="text-2xl sm:text-3xl font-semibold text-[#3A3845] ml-5 sm:ml-9 mt-10 sm:mt-15"
        >
          Orders History
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="flex flex-col items-center w-full p-4 sm:p-10 text-start"
        >
          <div className="bg-white w-full rounded-2xl shadow-md">
            {/* Desktop: table layout */}
            <div className="hidden md:block overflow-x-auto">
              <table className="table p-4">
                <thead>
                  <tr className="bg-[#363347] text-white font-bold">
                    <th>Photo</th>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                  </tr>
                </thead>
                <tbody className="[&_td]:border-b [&_td]:border-gray-300 [&_th]:border-b [&_th]:border-gray-300">
                  {currentItems.map((item) => (
                    <tr key={item.historyId}>
                      <td>
                        <Image
                          src={item.image}
                          width={120}
                          height={180}
                          alt={item.name}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price}.00</td>
                      <td>{item.quantity}</td>
                      <td className="text-[#C69B7B] font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile: card layout */}
            <div className="md:hidden p-4 space-y-4">
              {currentItems.map((item) => (
                <div
                  key={item.historyId}
                  className="flex gap-4 border-b border-gray-300 pb-4 last:border-0"
                >
                  <div className="shrink-0">
                    <Image
                      src={item.image}
                      width={80}
                      height={120}
                      alt={item.name}
                      className="w-20 h-auto"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <div className="flex justify-between text-xs text-gray-600 mt-2">
                      <span>
                        <span className="font-semibold">Price:</span> $
                        {item.price}.00
                      </span>
                      <span>
                        <span className="font-semibold">Qty:</span>{" "}
                        {item.quantity}
                      </span>
                    </div>
                    <div className="text-[#C69B7B] font-bold mt-2 text-right">
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Shared pagination component */}
            <div className="my-6">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
