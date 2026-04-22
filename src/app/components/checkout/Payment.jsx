"use client";
import { useState } from "react";
import { useCart } from "@/app/contexts/CartContext";

const SHIPPING_COST = 15.0;

export default function Payment() {
  const { subtotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardType, setCardType] = useState("");

  const total = subtotal + SHIPPING_COST;

  // FIX: detect card type from number prefix (Visa, Mastercard, Mada)
  const detectCardType = (e) => {
    const value = e.target.value.replace(/\s+/g, "");
    if (/^4/.test(value)) {
      setCardType("Visa");
    } else if (/^(5[1-5]|2[2-7])/.test(value)) {
      setCardType("Mastercard");
    } else if (
      /^(588845|440647|440795|446404|457865|457997|474491|588846)/.test(value)
    ) {
      setCardType("Mada");
    } else {
      setCardType("");
    }
  };

  return (
    <div className="bg-[#32333d] p-8 text-white">
      <h2 className="text-xl font-bold mb-6">Payment</h2>

      <div className="space-y-6">
        {/* Credit card option */}
        <div className="p-4 border border-gray-700 rounded-lg bg-white/5">
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="radio radio-sm border-white checked:bg-white"
              />
              <span className="text-sm font-medium">Credit card</span>
            </label>
            {/* TODO: change the img to Image and add the images to public folder */}
            <div className="flex gap-1">
              <img
                src="https://sa.visamiddleeast.com/content/dam/VCOM/global/about-visa/images/visa-brandmark-blue-1960x622.png"
                alt="Visa"
                className="h-4 px-1 rounded-sm"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1280px-Mastercard_2019_logo.svg.png"
                alt="Mastercard"
                className="h-4 px-1 rounded-sm"
              />
              <img
                src="https://www.mada.com.sa/sites/mada/files/inline-images/logo-white.svg"
                alt="Mada"
                className="h-4 px-1"
              />
            </div>
          </div>

          {paymentMethod === "card" && (
            <div className="space-y-4">
              <div className="relative">
                <input
                  name="cardNumber"
                  type="text"
                  placeholder="Card number"
                  defaultValue="4111111111111111"
                  required={paymentMethod === "card"}
                  onChange={detectCardType}
                  className="w-full bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white rounded"
                />
                {cardType && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase text-white opacity-80 bg-black/20 px-1 rounded">
                    {cardType}
                  </span>
                )}
              </div>
              <input
                type="text"
                name="cardName"
                placeholder="Name on card"
                defaultValue="John Doe"
                required={paymentMethod === "card"}
                className="w-full bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white rounded"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="expiration"
                  placeholder="Expiration (MM/YY)"
                  defaultValue="12/28"
                  className="bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white rounded"
                  required={paymentMethod === "card"}
                  pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                  title="Please use the format MM/YY (e.g., 01/26)"
                  maxLength={5}
                  inputMode="numeric"
                />
                <input
                  type="text"
                  name="securityCode"
                  placeholder="Security code"
                  defaultValue="123"
                  required={paymentMethod === "card"}
                  className="bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white rounded"
                />
              </div>
            </div>
          )}
        </div>

        {/* STC Pay option */}
        <div className="p-4 border border-gray-700 rounded-lg bg-white/5">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="stc"
              checked={paymentMethod === "stc"}
              onChange={() => setPaymentMethod("stc")}
              className="radio radio-sm border-white checked:bg-white"
            />
            <img
              src="https://stcbank.com.sa/o/stc-theme/images/logos/stc-inverted.svg"
              alt="STC Bank"
              className="h-5 brightness-200"
            />
          </label>

          {paymentMethod === "stc" && (
            <div className="mt-4">
              <input
                name="stcPhoneNumber"
                type="tel"
                placeholder="Phone Number"
                defaultValue="0501234567"
                required={paymentMethod === "stc"}
                className="w-full bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white rounded"
              />
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full border border-white py-4 mt-6 text-sm font-bold tracking-widest hover:bg-white hover:text-[#32333d] transition-colors cursor-pointer"
      >
        PLACE ORDER (${total.toFixed(2)})
      </button>
    </div>
  );
}
