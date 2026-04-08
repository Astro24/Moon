"use client";

import React from 'react';

export default function ContactDetailsPage() {
  return (
    <div className="w-full bg-white">
      

      <section className="relative w-full h-auto md:h-[550px] overflow-hidden bg-[#23242A]">
        <img 
          src="/hero-plates.svg" 
          alt="Contact Background"
          className="relative md:absolute inset-0 w-full h-[300px] md:h-full object-cover object-center z-0"
        />

        <div className="relative md:absolute md:top-0 md:left-12 w-full md:w-[32%] h-auto md:h-full bg-[#32333E] flex flex-col items-center justify-center text-white px-8 py-16 md:py-0 z-10">
          <div className="flex flex-col items-center w-full">
            <img src="/logoLight.svg" alt="Logo" className="w-14 h-14 md:w-16 md:h-16 mb-10" />
            <h1 className="text-3xl md:text-4xl font-serif tracking-[0.25em] uppercase mb-5 text-center leading-tight">
              Contact Us
            </h1>
            <div className="w-24 h-[1px] bg-white/20 mb-10" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-10 text-center">
              Follow us on social media
            </p>
            <div className="flex gap-7 text-[#C29D7D]">
               <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
               <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
               <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
               <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 md:py-24 w-full flex flex-col items-center bg-white">
        
        
        <div className="w-full flex flex-col items-center text-center px-6 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6 text-[#23242A] leading-tight">
            Get in touch with us
          </h2>
          <p className="text-gray-500 max-w-lg leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
          </p>
        </div>

        <div className="flex flex-col items-center w-full px-6 gap-10 md:gap-12 mb-16 md:mb-24 text-center">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[#23242A] mb-2 uppercase tracking-tighter text-xs md:text-sm">Office Hours :</h3>
            <p className="text-[#C29D7D] text-sm md:text-base">Monday - Friday 8:00 am to 5:00 pm</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[#23242A] mb-2 uppercase tracking-tighter text-xs md:text-sm">Email :</h3>
            <p className="text-[#C29D7D] text-sm md:text-base">contact@company.com</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[#23242A] mb-2 uppercase tracking-tighter text-xs md:text-sm">Phone :</h3>
            <p className="text-[#C29D7D] text-sm md:text-base">(414) 687 - 5892</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[#23242A] mb-2 uppercase tracking-tighter text-xs md:text-sm">Location :</h3>
            <p className="text-[#C29D7D] text-sm md:text-base leading-relaxed">59 Middle Point Rd, San Francisco, 80412</p>
          </div>
        </div>

        <form className="w-full max-w-4xl px-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-[11px] font-bold uppercase text-[#23242A]">Name</label>
              <input type="text" placeholder="Samatha Clarken" className="border border-gray-300 p-4 rounded-sm outline-none focus:border-[#C29D7D] text-sm" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[11px] font-bold uppercase text-[#23242A]">Email</label>
              <input type="email" placeholder="example@youremail.com" className="border border-gray-300 p-4 rounded-sm outline-none focus:border-[#C29D7D] text-sm" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-[11px] font-bold uppercase text-[#23242A]">Phone</label>
              <input type="text" placeholder="(123) 456 - 7890" className="border border-gray-300 p-4 rounded-sm outline-none focus:border-[#C29D7D] text-sm" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[11px] font-bold uppercase text-[#23242A]">Company</label>
              <input type="text" placeholder="Moon" className="border border-gray-300 p-4 rounded-sm outline-none focus:border-[#C29D7D] text-sm" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[11px] font-bold uppercase text-[#23242A]">Message</label>
            <textarea placeholder="Type your message here..." rows={6} className="border border-gray-300 p-4 rounded-sm outline-none focus:border-[#C29D7D] resize-none text-sm w-full"></textarea>
          </div>

          <button className="w-full bg-[#32333E] text-white py-5 px-10 uppercase tracking-[0.2em] font-bold text-[11px] md:text-xs hover:bg-[#23242A] transition-all flex items-center justify-center gap-2 rounded-sm shadow-md">
            Send Message 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </form>
      </section>

      <section className="w-full h-[400px] md:h-[500px] bg-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d158858.473398706!2d-0.1015987!3d51.5286416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1689123456789!5m2!1sen!2suk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}