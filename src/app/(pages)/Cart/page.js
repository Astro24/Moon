"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CiTrash } from "react-icons/ci";
import Link from "next/link"; 

const initialCartItems = [
  {
    id: 1,
    name: "PORCELAIN DINNER PLATE (27CM)",
    price: 59,
    quantity: 2,
    image: "/ImageOne.svg",
  },
  {
    id: 2,
    name: "OPHELIA MATTE NATURAL VASE",
    price: 168,
    quantity: 1,
    image: "/ImageTwo.svg",
  },
  {
    id: 3,
    name: "PORCELAIN DINNER PLATE",
    price: 70,
    quantity: 1,
    image: "/ImageThree.svg",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const router = useRouter();

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-5 md:px-3">
        <div className="flex items-center gap-2 text-[13px] md:text-[14px] text-[#8b8b8b] mb-5 md:mb-6">
          <span
            onClick={() => router.push("/Homepage")}
            className="cursor-pointer transition-colors duration-200 hover:text-blue-500"
          >
            Home
          </span>
          <span>/</span>
          <span>Shopping Cart</span>
        </div>

        <h1 className="text-[26px] md:text-[30px] font-semibold text-[#222] mb-6 md:mb-8">
          Cart ({cartItems.length} item)
        </h1>

        <div className="hidden md:grid grid-cols-[44px_110px_1.3fr_170px_150px_120px] items-center text-center bg-[#363347] text-white text-[13px] py-3 px-2">
          <div className="flex justify-center">
            <CiTrash size={18} />
          </div>
          <div>PHOTO</div>
          <div>PRODUCT</div>
          <div>PRICE</div>
          <div>QUANTITY</div>
          <div>SUBTOTAL</div>
        </div>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border border-[#d8d8d8] md:border-0 md:border-b-2 md:border-[#797575] p-4 md:px-2 md:py-3 mb-4 md:mb-0 flex flex-col gap-4 md:grid md:grid-cols-[44px_110px_1.9fr_120px_150px_120px] md:items-center md:text-center md:min-h-[150px]"
          >
            <div className="flex justify-end md:justify-center order-1 md:order-none">
              <button
                className="cursor-pointer"
                onClick={() => removeItem(item.id)}
                aria-label="Remove item"
                type="button"
              >
                <CiTrash
                  size={24}
                  className="text-[#4a4a4a] hover:text-[#c89a73]"
                />
              </button>
            </div>

            <div className="flex items-center gap-4 md:block order-2 md:order-none">
              <div className="w-[100px] h-[120px] bg-[#f7f4ef] flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={110}
                  height={110}
                  className="object-contain scale-[1.20]"
                />
              </div>

              <div className="flex-1 md:hidden">
                <p className="text-[12px] font-semibold text-[#3a3a3a] leading-[1.5]">
                  {item.name}
                </p>
              </div>
            </div>

            <div className="hidden md:flex md:justify-center">
              <p className="text-[13px] font-medium text-[#000000] max-w-[240px] leading-[1.5] text-center">
                {item.name}
              </p>
            </div>

            <div className="flex items-center justify-between md:block order-3 md:order-none">
              <span className="md:hidden text-[13px] text-[#8b8b8b]">Price</span>
              <span className="text-[14px] font-semibold text-[#303030]">
                ${item.price}
              </span>
            </div>

            <div className="flex items-center justify-between md:justify-center order-4 md:order-none">
              <span className="md:hidden text-[13px] text-[#8b8b8b]">
                Quantity
              </span>

              <div className="flex items-center justify-between w-[92px] h-[36px] border-2 border-[#797575] px-2 bg-white">
                <button
                  type="button"
                  onClick={() => decreaseQuantity(item.id)}
                  aria-label="Decrease quantity"
                  className="text-[18px] text-[#555]"
                >
                  -
                </button>
                <span className="text-[14px] text-[#303030]">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => increaseQuantity(item.id)}
                  aria-label="Increase quantity"
                  className="text-[18px] text-[#555]"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between md:block order-5 md:order-none">
              <span className="md:hidden text-[13px] text-[#8b8b8b]">
                Subtotal
              </span>
              <span className="text-[14px] font-semibold text-[#c89a73]">
                ${(item.price * item.quantity).toFixed(0)}
              </span>
            </div>
          </div>
        ))}

        <div className="flex flex-col items-stretch md:items-end mt-8">
          <div className="flex flex-col sm:flex-row gap-2 mb-5 w-full md:w-auto">
            <input
              type="text"
              placeholder="Coupon code"
              className="w-full sm:w-[165px] h-[42px] border border-[#000000] px-3 text-[12px] outline-none"
            />
            <button
              type="button"
              className="h-[42px] px-5 bg-[#363347] text-white text-[11px] font-bold hover:bg-[#4a465f]"
            >
              APPLY COUPON
            </button>
          </div>

          <div className="bg-[#363347] text-white p-5 md:p-6 w-full md:w-[330px]">
            <h2 className="text-[24px] md:text-[28px] font-semibold mb-5">
              Cart total
            </h2>

            <div className="flex justify-between mb-3 text-[14px]">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-3 text-[14px]">
              <span>Cart total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <Link href="/Checkout" className="block w-full">
              <button
                type="button"
                className="w-full h-[44px] mt-4 border border-[#8f8c9e] text-[10px] font-bold hover:bg-white hover:text-[#363347] hover:border-white transition-colors duration-200"
              >
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
