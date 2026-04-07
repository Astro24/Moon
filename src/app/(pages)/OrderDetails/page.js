import Link from "next/link";
import Image from "next/image";
import { TbFileInvoice } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";


export default function OrderDetails() {
  const items = [
    { name: "MARIN DINNER PLATE", color: "Space Blue", cat: "Dinner Set", price: 79.0, qty: 1, img: "/orderDetails/Rectangle 1.svg" },
    { name: "PORCELAIN DINNER PLATE", color: "Space Pink", cat: "Tableware", price: 53.0, qty: 1, img: "/orderDetails/Rectangle 1-2.svg" },
    { name: "ROUNDED DUAL HANDLE VASE", color: "Breeze", cat: "Home Decor", price: 42.0, qty: 1, img: "/orderDetails/Rectangle 1-1.svg" },
  ];
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <div className="text-sm text-gray-500 mb-8">
        <Link href="/Cart" className='hover:underline'>Cart</Link>/{" "}
        <Link href="/" className='hover:underline'>Shopping</Link>/{" "}
        <Link href="/Checkout" className='hover:underline'>Checkout</Link>/{" "}
        <span className="text-black font-semibold underline">Order Details</span>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
          <h1 className="text-[30px] text-black-600 font-extrabold">Order ID: 3354654654526</h1>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"><TbFileInvoice />Invoice</button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#33333b] text-white rounded-md text-sm font-medium hover:bg-black">Track order <CiLocationOn /></button>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <p className="text-gray-400">
            Order date: <span className="font-bold text-black">Feb 16, 2026</span>
          </p>
          <>|</>
          <p className="text-[#10b981] flex items-center gap-1 font-semibold">
            <FaTruck /> Estimated delivery: May 16, 2026
          </p>
        </div>
        <hr className="my-4 h-[1.5px] bg-gray-300 border-0" />

        <div className="w-full py-8 overflow-x-auto">
          <ul className="steps steps-horizontal w-full min-w-max">
            <li className="step step-success" data-content="">
              <div className="flex flex-col items-center pt-2">
                <span className="font-bold text-success text-sm whitespace-nowrap">
                  Order Confirmed
                </span>
                <span className="text-slate-500 text-xs mt-1">
                  Wed, 11th Jan
                </span>
              </div>
            </li>
            <li className="step" data-content="">
              <div className="flex flex-col items-center pt-2">
                <span className="font-semibold text-slate-400 text-sm whitespace-nowrap">
                  Shipped
                </span>
                <span className="text-slate-500 text-xs mt-1">
                  Wed, 11th Jan
                </span>
              </div>
            </li>
            <li className="step" data-content="">
              <div className="flex flex-col items-center pt-2">
                <span className="font-semibold text-slate-400 text-sm whitespace-nowrap">
                  Out For Delivery
                </span>
                <span className="text-slate-500 text-xs mt-1">
                  Wed, 11th Jan
                </span>
              </div>
            </li>
            <li className="step" data-content="">
              <div className="flex flex-col items-center pt-2">
                <span className="font-semibold text-slate-400 text-sm whitespace-nowrap">
                  Delivered
                </span>
                <span className="text-slate-500 text-xs mt-1 text-center">
                  Expected by Mon 16th
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-6 mb-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between pb-6 last:border-0">
              <div className="flex gap-6 items-center">
                <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                  <div className="text-gray-300 text-xs"><Image
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  /></div>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">{item.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{item.color} | {item.cat}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">${item.price.toFixed(2)}</p>
                <p className="text-xs text-gray-400">Qty: {item.qty}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-4 h-[1.5px] bg-gray-300 border-0" />
        <div className="grid md:grid-cols-2 gap-12 text-sm">
          <div className="space-y-10">
            <div>
              <h3 className="font-bold mb-3">Payment</h3>
              <p className="text-gray-500 flex items-center gap-1">
                Visa **56
                <img
                  src="https://sa.visamiddleeast.com/content/dam/VCOM/global/about-visa/images/visa-brandmark-blue-1960x622.png"
                  width={40}
                  height={15}
                  alt="Visa"
                />
              </p>
            </div>
          </div>
          <div className="br-">
            <h3 className="font-bold mb-3">Delivery</h3>
            <p className="text-gray-400 leading-relaxed">
              Address<br />
              847 Jewess Bridge Apt.<br />
              174 London, UK<br />
              474-769-3919
            </p>
          </div>
        </div>
        <hr className="my-4 h-[1.5px] bg-gray-300 border-0" />
        <div className="space-y-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-bold mb-1">Need Help</h4>
              <p className="text-gray-500 cursor-pointer">ⓘ Order Issues ↗</p>
              <p className="text-gray-500 cursor-pointer w-4xl flex"><TbTruckDelivery className="flex justify-center items-center" /> Delivery Info ↗</p>
              <p className="text-gray-500 cursor-pointer">↩ Returns ↗</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold mb-3">Order Summary</h4>
              <div className="flex justify-between"><span>Discount</span> <span>$5554</span></div>
              <div className="flex justify-between"><span>Discount</span> <span className="text-gray-400">(20%) - $1109.40</span></div>
              <div className="flex justify-between"><span>Delivery</span> <span>$0.00</span></div>
              <div className="flex justify-between"><span>Tax</span> <span className="text-gray-400">+$221.88</span></div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-lg"><span>Total</span> <span>$0.00</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}