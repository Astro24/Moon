import navbar from "daisyui/components/navbar";
import footer from "daisyui/components/footer";

export default function Checkout() {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <navbar />

      <div className="text-sm text-gray-500 mb-8">
        Cart / Shipping / <span className="text-black font-semibold">Payment</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <h1 className="text-2xl font-bold mb-6">Billing Details</h1>
          <form className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">First Name *</label>
              <input type="text" placeholder="Samatha" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" />
            </div>
            <div>
              <label className="block mb-1">Last Name *</label>
              <input type="text" placeholder="Clarken" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Company</label>
              <input type="text" placeholder="Moon" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Country / Region *</label>
              <select className="select border-2 border-black w-full bg-white rounded-none focus:outline-none">
                <option>United States</option>
                <option>Saudi Arabia</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Street address *</label>
              <input type="text" placeholder="Address" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" />
            </div>
            <div className="col-span-1">
              <label className="block mb-1">Town / City *</label>
              <input type="text" placeholder="City" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" />
            </div>
            <div className="col-span-1">
              <label className="block mb-1">State *</label>
              <select className="select border-2 border-black w-full bg-white rounded-none focus:outline-none">
                <option>New York (NY)</option>
                <option>California (CA)</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="block mb-1">ZIP Code</label>
              <input type="text" placeholder="Zip code" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" />
            </div>
            <div className="col-span-1">
              <label className="block mb-1">Phone *</label>
              <input type="text" placeholder="(123) 456 - 7890" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Email</label>
              <input type="email" placeholder="example@youremail.com" className="input border-2 border-black w-full bg-white rounded-none focus:outline-none" />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Order notes</label>
              <textarea placeholder="Type your message here..." className="textarea border-2 border-black w-full bg-white rounded-none focus:outline-none h-32"></textarea>
            </div>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="mb-10">
            <div className="flex justify-between font-bold border-b-2 border-black pb-2 mb-4">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Porcelain Dinner Plate (27cm)</span>
                <span>$59.00</span>
              </div>
              <div className="flex justify-between">
                <span>Ophelia Matte Natural Vase</span>
                <span>$168.00</span>
              </div>
              <div className="flex justify-between">
                <span>Luana Bowl</span>
                <span>$49.00</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-6 pt-4 space-y-2">
              <div className="flex justify-between font-bold">
                <span>Subtotal</span>
                <span>$475.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$15.00</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t-2 border-black mt-6 pt-4 text-xl font-bold">
              <span>Total</span>
              <span>$490.00</span>
            </div>
          </div>

          <div className="bg-[#32333d] p-8 text-white">
            <h2 className="text-xl font-bold mb-6">Payment</h2>
            
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" className="radio radio-sm border-white checked:bg-white" checked readOnly />
                <span className="text-sm">Credit card</span>
              </label>
              <div className="flex gap-1">
                <img src="https://sa.visamiddleeast.com/content/dam/VCOM/global/about-visa/images/visa-brandmark-blue-1960x622.png" alt="Visa" className="h-4 bg-white px-1" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 bg-white px-1" />
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <input type="text" placeholder="Card number" className="w-full bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white" />
              <input type="text" placeholder="Name on card" className="w-full bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Expiration date (MM/YY)" className="bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white" />
                <input type="text" placeholder="Security code" className="bg-transparent border border-gray-500 p-3 text-sm focus:outline-none focus:border-white" />
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8 cursor-pointer">
              <input type="radio" name="payment" className="radio radio-sm border-white checked:bg-white" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5 brightness-200" />
            </div>

            <button className="w-full border border-white py-4 text-sm font-bold tracking-widest hover:bg-white hover:text-[#32333d] transition-colors">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>

      <footer />
    </div>
  );
}