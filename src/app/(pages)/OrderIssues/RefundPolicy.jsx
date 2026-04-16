export default function RefundPolicy() {
    return (
        <div className="max-w-2xl mx-auto py-12 px-4 text-[#3D3B48]">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-6">Refund & Replacement Policy</h2>
                <hr className="border-slate-200" />
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed">
                <p className="font-medium text-slate-700">Report damaged items within 48 hours of delivery.</p>
                
                <p> We carefully package all ceramic products to ensure safe delivery. <br/>However, if your item arrives damaged, please report the issue within 48 hours of delivery.</p>

                <div>
                    <p className="mb-2">To request a replacement or refund:</p>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Take clear photos of the damaged item</li>
                        <li>Photograph the packaging and outer box</li>
                        <li>Submit a report through the Order Issues form</li>
                        <li>Keep the damaged item and packaging until your case is reviewed</li>
                    </ul>
                </div>

                <div>
                    <p className="mb-2">What Happens Next:</p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Our team will review your request within 1–2 business days</li>
                        <li>If approved, we will offer:
                            <ul className="list-disc ml-6 mt-1">
                                <li>A free replacement, or</li>
                                <li>A full refund, depending on product availability</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-xl font-bold mb-6">Contact Support</h3>
                <hr className="border-slate-200 mb-8" />
                
                <div className="flex justify-center items-center gap-8 text-slate-700">
                    <button className="hover:text-slate-500 transition-colors">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </button>
                    <button className="hover:text-slate-500 transition-colors">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </button>
                    <button className="hover:text-slate-500 transition-colors">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}