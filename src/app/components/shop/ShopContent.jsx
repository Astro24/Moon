"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RxFilter } from "react-icons/rx";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Products from "@/app/components/shared/Products";
import Pagination from "@/app/components/shared/Pagination";
import FilterContent from "./FilterContent";
import { products as allProducts } from "../../../../lib/data";

const PRODUCTS_PER_PAGE = 9;
const priceRanges = [
  { label: "$0 - $10", min: 0, max: 10 },
  { label: "$10 - $50", min: 10, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "> $200", min: 200, max: Infinity },
];

export default function ShopContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    if (selectedPrices.length > 0) {
      const inPriceRange = selectedPrices.some((label) => {
        const range = priceRanges.find((r) => r.label === label);
        return range && product.price >= range.min && product.price < range.max;
      });
      if (!inPriceRange) return false;
    }

    if (selectedTags.length > 0) {
      if (
        !product.tags ||
        !product.tags.some((t) => selectedTags.includes(t))
      ) {
        return false;
      }
    }

    return true;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  const handlePageChange = (pageNumber) => {
    router.replace(`/Shop?page=${pageNumber}`, { scroll: false });
  };

  const toggleFilter = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((v) => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  return (
    <div className="max-w-350 mx-auto py-8 px-4 md:pl-10 md:pr-6 font-sans">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[13px] mb-6 text-gray-400">
        <span
          className="cursor-pointer hover:text-black"
          onClick={() => router.push("/")}
        >
          Home
        </span>
        <span>/</span>
        <span className="text-black font-medium">Shop</span>
      </nav>

      {/* Mobile header */}
      <div className="w-full mb-4 md:hidden flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="text-[12px] font-bold tracking-widest uppercase flex items-center gap-2 cursor-pointer"
          >
            <RxFilter size={20} />
            Filter
          </button>
          <div className="flex items-center gap-2 text-[13px] cursor-pointer">
            <span className="text-gray-500">Sort by:</span>
            <span className="text-black flex items-center gap-1">
              Name
              <FaChevronDown size={10} />
            </span>
          </div>
        </div>
        <span className="text-[13px] font-bold text-black">
          Showing {filteredProducts.length} items
        </span>
      </div>

      {/* Desktop header */}
      <div className="hidden md:flex justify-between items-center mb-5">
        <span className="text-[13px] font-bold text-black">
          Showing {filteredProducts.length} items
        </span>
        <div className="flex items-center gap-2 text-[13px] cursor-pointer">
          <span className="text-gray-500">Sort by:</span>
          <span className="text-black flex items-center gap-1">
            Name
            <FaChevronDown size={10} />
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Desktop sidebar */}
        <aside className="w-50 shrink-0 hidden md:block">
          <FilterContent
            selectedPrices={selectedPrices}
            setSelectedPrices={setSelectedPrices}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            toggleFilter={toggleFilter}
          />
        </aside>

        {/* Main product area */}
        <div className="flex-1 flex flex-col w-full">
          <Products items={visibleProducts} columns={3} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 bottom-0 w-70 bg-white z-50 p-6 overflow-y-auto md:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[14px] font-bold uppercase tracking-widest">
                  Filters
                </h2>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  aria-label="Close filters"
                  className="cursor-pointer"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              <FilterContent
                selectedPrices={selectedPrices}
                setSelectedPrices={setSelectedPrices}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                toggleFilter={toggleFilter}
              />

              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full mt-4 bg-[#3A3845] text-white py-3 font-bold text-[11px] tracking-[0.2em] uppercase cursor-pointer"
              >
                Apply Filters
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
