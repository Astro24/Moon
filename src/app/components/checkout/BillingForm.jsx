"use client";
import { useState } from "react";
import { countryData } from "../../../../lib/data";

export default function BillingForm() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const regions = countryData[selectedCountry]?.regions || [];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Billing Details</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">First Name *</label>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            defaultValue="John"
            className="input border-2 border-black w-full bg-white rounded-none focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Last Name *</label>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            defaultValue="Doe"
            className="input border-2 border-black w-full bg-white rounded-none focus:outline-none"
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block mb-1">Company</label>
          <input
            name="company"
            type="text"
            placeholder="Company"
            defaultValue="Moon"
            className="input border-2 border-black w-full bg-white rounded-none focus:outline-none"
          />
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
            {Object.entries(countryData).map(([code, country]) => (
              <option key={code} value={code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="block mb-1">Street address *</label>
          <input
            name="address"
            type="text"
            placeholder="Address"
            defaultValue="123 Main St"
            className="input border-2 border-black w-full bg-white rounded-none focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Town / City *</label>
          <input
            name="city"
            type="text"
            placeholder="City"
            defaultValue="Riyadh"
            className="input border-2 border-black w-full bg-white rounded-none focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-1">State / Region *</label>
          <select
            name="state"
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
        <div>
          <label className="block mb-1">ZIP Code</label>
          <input
            name="ZIPcode"
            type="text"
            placeholder="Zip code"
            defaultValue="12345"
            className="input border-2 border-black w-full bg-white rounded-none focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-1">Phone *</label>
          <input
            name="phone"
            type="tel"
            placeholder="(123) 456 - 7890"
            defaultValue="0501234567"
            className="input border-2 border-black w-full bg-white rounded-none focus:outline-none"
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            placeholder="example@youremail.com"
            defaultValue="test@moon.com"
            className="input border-2 border-black w-full bg-white rounded-none focus:outline-none"
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block mb-1">Order notes</label>
          <textarea
            name="note"
            placeholder="Type your message here..."
            defaultValue="Please handle with care"
            className="textarea border-2 border-black w-full bg-white rounded-none focus:outline-none h-32"
          />
        </div>
      </div>
    </div>
  );
}
