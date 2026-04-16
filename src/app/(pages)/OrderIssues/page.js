import BreadCrumb from "./BreadCrumb";
import Report from "./Report";
import FAQ from "./FAQ.jsx";
import RefundPolicy from "./RefundPolicy.jsx"

export default function OrderIssues() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 font-sans">
      <BreadCrumb />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">  
        <div className="lg:col-span-7 space-y-12">
          <Report />
          <FAQ />
        </div>
        <div className="lg:col-span-5">
          <div className="sticky top-8">
             <RefundPolicy />
          </div>
        </div>
      </div>
    </div>
  );
}