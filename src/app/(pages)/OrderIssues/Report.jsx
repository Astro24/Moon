export default function Report() {
    return (
        <div className="lg:col-span-7">
            <h1 className="text-2xl font-bold mb-6">Report An Issue</h1>
            
            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-semibold text-slate-700">Order Number</label>
                        <input name="OrderNumber" type="text" placeholder="134467878944343" className="w-full p-3 border-2 border-slate-400 bg-white focus:border-slate-800 outline-none transition-colors" required />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-slate-700">Issue Type</label>
                        <select name="IssueType" className="w-full p-3 border-2 border-slate-400 bg-white focus:border-slate-800 outline-none transition-colors appearance-none" required defaultValue="">
                            <option value="" disabled>Please Select Issue Type</option>
                            <option value="delivery">Delivery Issue</option>
                            <option value="damage">Damaged Item</option>
                            <option value="return">Return Request</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-semibold text-slate-700">Contact Phone</label>
                        <input name="ContactPhone" type="tel" placeholder="+966 325 1233 452" className="w-full p-3 border-2 border-slate-400 bg-white focus:border-slate-800 outline-none transition-colors" required />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-slate-700">Contact Email</label>
                        <input name="ContactEmail" type="email" placeholder="user@example.com" className="w-full p-3 border-2 border-slate-400 bg-white focus:border-slate-800 outline-none transition-colors" required />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
                    <button type="button" className="w-full md:w-auto bg-[#3D3B48] text-white px-10 py-4 rounded-lg font-medium hover:bg-[#2D2B38] transition-colors">
                        Upload Images
                    </button>
                    <button type="submit" className="w-full md:w-auto bg-[#3D3B48] text-white px-16 py-4 rounded-lg font-medium hover:bg-[#2D2B38] transition-colors">
                        Submit
                    </button>
                </div>

            </div>
        </div>
    )
}