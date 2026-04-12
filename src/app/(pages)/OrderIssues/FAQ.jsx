'use client';

import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "What should I do if my ceramic item arrives broken?",
            answer: "Take photos of the damaged item and submit a report within 48 hours."
        },
        {
            question: "How long do replacements take?",
            answer: "Replacements are typically shipped within 3–5 business days."
        },
        {
            question: "Can I cancel my order after placing it?",
            answer: "Orders can be canceled before they are shipped."
        },
        {
            question: "What if my delivery is delayed?",
            answer: "Contact support if your order exceeds the estimated delivery date."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-20">
            <h2 className="text-xl font-bold mb-6 text-[#3D3B48]">FAQ</h2>
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div key={index} className="border border-slate-100 rounded-lg shadow-sm bg-white overflow-hidden">
                        <button 
                            onClick={() => toggleAccordion(index)}
                            className="w-full p-5 flex justify-between items-center text-left focus:outline-none"
                        >
                            <span className="font-bold text-slate-800">{item.question}</span>
                            <svg 
                                className={`w-5 h-5 text-slate-800 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'    }`}>
                            <div className="p-5 pt-0 border-t border-slate-50">
                                <p className="text-slate-600 mb-4 pt-4">
                                    {item.answer}
                                </p>
                                <button className="bg-[#3D3B48] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#2D2B38] transition-colors">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}