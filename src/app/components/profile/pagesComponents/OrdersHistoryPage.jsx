"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


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
          className="text-3xl font-semibold text-[#3A3845] ml-9 mt-15"
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
            <div className="overflow-x-auto">
              <table className="table p-4">
                {/* head */}
                <thead>
                  <tr className="bg-base-200 text-white font-bold">
                    <th>Photo</th>
                    <td>Product</td>
                    <td>Price</td>
                    <td>QuanTity</td>
                    <td>Subtotal</td>
                  </tr>
                </thead>
                <tbody className="[&_td]:border-b [&_td]:border-gray-300 [&_th]:border-b [&_th]:border-gray-300">
                  {/* row 1 */}
                  <tr>
                    <th>
                      <Image
                        src={"/profile/plate.svg"}
                        width={120}
                        height={180}
                        alt="proudect item"
                      />
                    </th>
                    <td>Porcelain Dinner Plate (27cm)</td>
                    <td>$59</td>
                    <td>2</td>
                    <td className="text-[#C69B7B]">$118</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>
                      <Image
                        src={"/profile/valo-matte-white-vase.svg"}
                        width={120}
                        height={180}
                        alt="proudect item"
                      />
                    </th>
                    <td>Ophelia Matte Natural Vase</td>
                    <td>$168</td>
                    <td>1</td>
                    <td className="text-[#C69B7B]">$168</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>
                      <Image
                        src={"/profile/julo-blue-salad-plate.svg"}
                        width={120}
                        height={180}
                        alt="proudect item"
                      />
                    </th>
                    <td>Porcelain Dinner Plate</td>
                    <td>$70</td>
                    <td>1</td>
                    <td className="text-[#C69B7B]">$70</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-center items-center gap-2 mt-6 p-4">
                <button className="w-9 h-9 flex items-center justify-center rounded-md text-gray-600 hover:bg-gray-100">
                  {/* alternative ways to do this in jsx is putting &lt; same with right arrow &gt; */}
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
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
