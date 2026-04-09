"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const items = [
  {
    name: "Porcelain Dinner Plate (27cm)",
    img: "/profile/plate.svg",
    price: "$59",
    qty: 2,
    subtotal: "$118",
  },
  {
    name: "Ophelia Matte Natural Vase",
    img: "/profile/valo-matte-white-vase.svg",
    price: "$168",
    qty: 1,
    subtotal: "$168",
  },
  {
    name: "Porcelain Dinner Plate",
    img: "/profile/julo-blue-salad-plate.svg",
    price: "$70",
    qty: 1,
    subtotal: "$70",
  },
];

// TODO: Add functionality to this page
export default function OrdersHistoryPage() {
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
          eyit={{ opacity: 0, y: -40 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="flex flex-col items-center w-full p-10 text-start"
        >
          <div className="bg-white w-full rounded-2xl shadow-md">
            {/* Desktop: table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="table p-4">
                <thead>
                  <tr className="bg-base-200 text-white font-bold">
                    <th>Photo</th>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                  </tr>
                </thead>
                <tbody className="[&_td]:border-b [&_td]:border-gray-300 [&_th]:border-b [&_th]:border-gray-300">
                  {items.map((item) => (
                    <tr key={item.name}>
                      <th>
                        <Image
                          src={item.img}
                          width={120}
                          height={180}
                          alt={item.name}
                        />
                      </th>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.qty}</td>
                      <td className="text-[#C69B7B]">{item.subtotal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile: cards */}
            <div className="md:hidden p-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="flex gap-4 border-b border-gray-300 pb-4 last:border-0"
                >
                  <div className="shrink-0">
                    <Image
                      src={item.img}
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
                        <span className="font-semibold">Price:</span>{" "}
                        {item.price}
                      </span>
                      <span>
                        <span className="font-semibold">Qty:</span> {item.qty}
                      </span>
                    </div>
                    <div className="text-[#C69B7B] font-bold mt-2 text-right">
                      {item.subtotal}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination — shared */}
            <div className="flex flex-wrap justify-center items-center gap-2 p-4">
              <button className="w-9 h-9 flex items-center justify-center rounded-md text-gray-600 hover:bg-gray-100">
                {"<"}
              </button>

              <button className="w-9 h-9 flex items-center justify-center bg-[#3A3845] text-white font-bold">
                1
              </button>

              <button className="w-9 h-9 flex items-center justify-center border border-[#3A3845] text-[#3A3845] font-bold hover:bg-gray-100">
                2
              </button>

              <button className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                3
              </button>

              <button className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                4
              </button>

              <button className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                {">"}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
