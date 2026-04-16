'use client';

import { useEffect, useState } from 'react'; 
import Link from "next/link";
import Image from "next/image";
import { TbFileInvoice } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

export default function OrderDetails() {
  
  const [order, setOrder] = useState(null);


  useEffect(() => {
    const savedOrder = localStorage.getItem('recentOrder');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  const items = [
    { name: "MARIN DINNER PLATE", color: "Space Blue", cat: "Dinner Set", price: 79.0, qty: 1, img: "/orderDetails/Rectangle 1.svg" },
    { name: "PORCELAIN DINNER PLATE", color: "Space Pink", cat: "Tableware", price: 53.0, qty: 1, img: "/orderDetails/Rectangle 1-2.svg" },
    { name: "ROUNDED DUAL HANDLE VASE", color: "Breeze", cat: "Home Decor", price: 42.0, qty: 1, img: "/orderDetails/Rectangle 1-1.svg" },
  ];

  if (!order) {
    return <div className="p-10 text-center">Loading your order details...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 font-sans">
      <div className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 flex flex-wrap gap-1">
        <Link href="/Cart" className="hover:underline">Cart</Link> / 
        <Link href="/" className="hover:underline">Shopping</Link> / 
        <Link href="/Checkout" className="hover:underline">Checkout</Link> / 
        <span className="text-black font-semibold underline">Order Details</span>
      </div>

      <div className="max-w-4xl mx-auto p-0 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <h1 className="text-2xl sm:text-[30px] text-black-600 font-extrabold break-all">
            Order ID: 3354654654526
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="flex justify-center items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 w-full sm:w-auto">
              <TbFileInvoice /> Invoice
            </button>
            <button className="flex justify-center items-center gap-2 px-4 py-2 bg-[#33333b] text-white rounded-md text-sm font-medium hover:bg-black w-full sm:w-auto">
              Track order <CiLocationOn />
            </button>
          </div>
        </div>

        <p className="mb-4 text-lg">Thank you for your order, <strong>{order.firstName}</strong>!</p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm">
          <p className="text-gray-400">
            Order date: <span className="font-bold text-black">Feb 16, 2026</span>
          </p>
          <span className="hidden sm:inline">|</span>
          <p className="text-[#10b981] flex items-center gap-2 font-semibold">
            <FaTruck className="shrink-0" /> Estimated delivery: May 16, 2026
          </p>
        </div>
        <hr className="my-4 h-[1.5px] bg-gray-300 border-0" />

        <div className="space-y-6 mb-8 sm:mb-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-row items-center justify-between pb-6 border-b border-gray-100 last:border-0 gap-4">
              <div className="flex gap-4 sm:gap-6 items-center flex-1">
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                  <Image src={item.img} alt={item.name} width={100} height={100} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xs sm:text-sm tracking-wide line-clamp-2">{item.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{item.color} | {item.cat}</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="font-bold text-sm sm:text-base">${item.price.toFixed(2)}</p>
                <p className="text-xs text-gray-400 mt-1">Qty: {item.qty}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-4 h-[1.5px] bg-gray-300 border-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-sm mt-6 mb-6">
          <div className="space-y-2">
            <h3 className="font-bold mb-3">Payment</h3>
            <p className="text-gray-500 flex items-center gap-2 capitalize">
              {order.paymentMethod === 'card' ? `Credit Card ****${order.cardNumber?.slice(-4)}` : 'STC Bank'}
              <img
                src="https://sa.visamiddleeast.com/content/dam/VCOM/global/about-visa/images/visa-brandmark-blue-1960x622.png"
                width={40} height={15} alt="Visa" className="object-contain"
              />
            </p>
            <p className="text-xs text-gray-400">{order.email}</p>
          </div>
          <div>
            <h3 className="font-bold mb-3">Delivery Address</h3>
            <p className="text-gray-500 leading-relaxed">
              {order.firstName} {order.lastName}<br />
              {order.address}<br />
              {order.city}, {order.state} {order.ZIPcode}<br />
              {order.country}<br />
              {order.phone}
            </p>
          </div>
        </div>

        <hr className="my-4 h-[1.5px] bg-gray-300 border-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mt-6">
            <div className="space-y-3 order-2 md:order-1">
                <h4 className="font-bold mb-2">Need Help?</h4>
                <p className="text-gray-500 cursor-pointer hover:text-black transition-colors flex items-center gap-2">ⓘ Order Issues ↗</p>
                <p className="text-gray-500 cursor-pointer hover:text-black transition-colors flex items-center gap-2"><TbTruckDelivery className="text-lg" /> Delivery Info ↗</p>
                <a href="" className="text-gray-500 cursor-pointer hover:text-black transition-colors flex items-center gap-2">↩ Returns ↗</a>
            </div>
            
            <div className="space-y-3 text-sm sm:text-base order-1 md:order-2">
                <h4 className="font-bold mb-3">Order Summary</h4>
                <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span> 
                    <span className="font-medium">$475.00</span>
                </div>
                <div className="flex justify-between font-extrabold text-lg">
                    <span>Total</span> 
                    <span>$490.00</span> 
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}