'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [VisaOrMasterCard, setVisaOrMasterCard] = useState('');
  const router = useRouter();

  const [products] = useState([
    { id: 1, name: 'Porcelain Dinner Plate (27cm)', price: 59.00 },
    { id: 2, name: 'Ophelia Matte Natural Vase', price: 168.00 },
    { id: 3, name: 'Luana Bowl', price: 49.00 },
  ]);

  const shippingCost = 15.00;

  const subtotal = useMemo(() => {
    return products.reduce((acc, item) => acc + item.price, 0);
  }, [products]);

  const total = subtotal + shippingCost;

  const countryData = {
    US: [
      { code: 'NY', name: 'New York' },
      { code: 'CA', name: 'California' },
      { code: 'TX', name: 'Texas' },
      { code: 'FL', name: 'Florida' },
      { code: 'IL', name: 'Illinois' },
      { code: 'PA', name: 'Pennsylvania' },
      { code: 'OH', name: 'Ohio' },
      { code: 'GA', name: 'Georgia' },
      { code: 'NC', name: 'North Carolina' },
      { code: 'MI', name: 'Michigan' },
      { code: 'NJ', name: 'New Jersey' },
      { code: 'VA', name: 'Virginia' },
    ],
    SA: [
      { code: 'RIY', name: 'Riyadh Region' },
      { code: 'MAKKAH', name: 'Makkah Region' },
      { code: 'EASTERN', name: 'Eastern Province' },
      { code: 'ASIR', name: 'Asir Region' },
      { code: 'HAIL', name: 'Hail Region' },
      { code: 'MADINAH', name: 'Madinah Region' },
      { code: 'QASSIM', name: 'Al-Qassim Region' },
      { code: 'TABUK', name: 'Tabuk Region' },
      { code: 'NORTHERN', name: 'Northern Borders Region' },
      { code: 'JIZAN', name: 'Jazan Region' },
      { code: 'NAJRAN', name: 'Najran Region' },
      { code: 'BAHAH', name: 'Al-Bahah Region' },
      { code: 'JAWF', name: 'Al-Jawf Region' },
    ],
    UAE: [
      { code: 'AUH', name: 'Abu Dhabi' },
      { code: 'DXB', name: 'Dubai' },
      { code: 'SHJ', name: 'Sharjah' },
      { code: 'AJM', name: 'Ajman' },
      { code: 'UMM', name: 'Umm Al-Quwain' },
      { code: 'RAK', name: 'Ras Al Khaimah' },
      { code: 'FUJ', name: 'Fujairah' },
    ],
    MR: [
      { code: 'NKC', name: 'Nouakchott' },
      { code: 'NDB', name: 'Nouadhibou' },
      { code: 'KED', name: 'Kaédi' },
      { code: 'ZOU', name: 'Zouérat' },
      { code: 'ROS', name: 'Rosso' },
      { code: 'AIO', name: 'Atar' },
      { code: 'EMN', name: 'Néma' },

    ]
  }

  const regions = countryData[selectedCountry] || [];

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const orderData = Object.fromEntries(formData.entries());

    orderData.paymentMethod = paymentMethod;
    localStorage.setItem('recentOrder', JSON.stringify(orderData));

    router.push('/OrderDetails');
  };

  const VorM = (e) => {
    const value = e.target.value.replace(/\s+/g, '');
    if (/^4/.test(value)) {
      setVisaOrMasterCard('Visa')
    } else if (/^(5[1-5]|2[2-7])/.test(value)) {
      setVisaOrMasterCard('Mastercard')
    } else if (/^(588845|440647|440795|446404|457865|457997|474491|588846)/.test(value)) {
      setVisaOrMasterCard('Mada')
    } else {
      setVisaOrMasterCard('');
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">

      <div className="text-sm text-gray-500 mb-8">
        <Link href="/Cart" className='hover:underline'>Cart</Link> /{' '}
        <Link href="/shipping" className='hover:underline'>Shipping</Link> /{' '}
        <span className="text-black font-semibold underline">Payment</span>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-16">

        <div className="lg:col-span-7">
          <h1 className="text-2xl font-bold mb-6">Billing Details</h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">First Name *</label>
              <input name="firstName" type="text" placeholder="Samatha" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" required />
            </div>
            <div>
              <label className="block mb-1">Last Name *</label>
              <input name="lastName" type="text" placeholder="Clarken" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" required />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Company</label>
              <input name="company" type="text" placeholder="Moon" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Country / Region *</label>
              <select
                name="country"
                className="select border-2 border-black w-full bg-white rounded-none focus:outline-none"
                required
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="SA">Saudi Arabia</option>
                <option value="UAE">United Arab Emirates</option>
                <option value="MR">mauritania</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Street address *</label>
              <input name="address" type="text" placeholder="Address" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" required />
            </div>
            <div className="col-span-1">
              <label className="block mb-1">Town / City *</label>
              <input name="city" type="text" placeholder="City" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" required />
            </div>
            <div className="col-span-1">
              <label className="block mb-1">State / Region *</label>
              <select
                name='state'
                className="select border-2 border-black w-full bg-white rounded-none focus:outline-none"
                required
                disabled={!selectedCountry}
              >
                <option value="">Select a state</option>
                {regions.map((region) => (
                  <option key={region.code} value={region.code}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-1">
              <label className="block mb-1">ZIP Code</label>
              <input name='ZIPcode' type="text" placeholder="Zip code" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" />
            </div>
            <div className="col-span-1">
              <label className="block mb-1">Phone *</label>
              <input name='phone' type="tel" placeholder="(123) 456 - 7890" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" required />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Email</label>
              <input name='email' type="email" placeholder="example@youremail.com" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" required />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Order notes</label>
              <textarea name='note' placeholder="Type your message here..." className="textarea border-2 border-black w-full bg-white rounded-none focus:outline-none h-32"></textarea>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="mb-10">
            <div className="flex justify-between font-bold border-b-2 border-black pb-2 mb-4">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <div className="space-y-3 text-gray-700">
              {products.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 mt-6 pt-4 space-y-2">
              <div className="flex justify-between font-bold">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t-2 border-black mt-6 pt-4 text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="bg-[#32333d] p-8 text-white">
            <h2 className="text-xl font-bold mb-6">Payment</h2>

            <div className="space-y-6">
              <div className="p-4 border border-gray-700 rounded-lg bg-white/5">
                <div className="flex items-center justify-between mb-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="radio radio-sm border-white checked:bg-white"
                    />
                    <span className="text-sm font-medium">Credit card</span>
                  </label>
                  <div className="flex gap-1">
                    <img src="https://sa.visamiddleeast.com/content/dam/VCOM/global/about-visa/images/visa-brandmark-blue-1960x622.png" alt="Visa" className="h-4 px-1 rounded-sm" />

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1280px-Mastercard_2019_logo.svg.png" alt="Mastercard" className="h-4 px-1 rounded-sm" />

                    <img src="https://www.mada.com.sa/sites/mada/files/inline-images/logo-white.svg" alt="Mada" className="h-4 px-1" />
                  </div>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        name="cardNumber"
                        type="text"
                        placeholder="Card number"
                        required={paymentMethod === 'card'}
                        onChange={VorM}
                        className="w-full bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white rounded"
                      />

                      {VisaOrMasterCard && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase text-white opacity-80 bg-black/20 px-1 rounded">
                          {VisaOrMasterCard}
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      name="cardName"
                      placeholder="Name on card"
                      required={paymentMethod === 'card'}
                      className="w-full bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white rounded"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Expiration (MM/YY)"
                        className="bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white rounded"
                        required={paymentMethod === 'card'}
                        pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                        title="Please use the format MM/YY (e.g., 01/26)"
                        maxLength={5}
                        inputMode="numeric"
                      />
                      <input
                        type="text"
                        placeholder="Security code"
                        required={paymentMethod === 'card'}
                        className="bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white rounded"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 border border-gray-700 rounded-lg bg-white/5">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="stc"
                    checked={paymentMethod === 'stc'}
                    onChange={() => setPaymentMethod('stc')}
                    className="radio radio-sm border-white checked:bg-white"
                  />
                  <img src="https://stcbank.com.sa/o/stc-theme/images/logos/stc-inverted.svg" alt="STC Bank" className="h-5 brightness-200" />
                </label>

                {paymentMethod === 'stc' && (
                  <div className="mt-4">
                    <input
                      name="stcPhoneNumber"
                      type="tel"
                      placeholder="Phone Number"
                      required={paymentMethod === 'stc'}
                      className="w-full bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white rounded"
                    />
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="w-full border border-white py-4 mt-6 text-sm font-bold tracking-widest hover:bg-white hover:text-[#32333d] transition-colors">
              PLACE ORDER (${total.toFixed(2)})
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}