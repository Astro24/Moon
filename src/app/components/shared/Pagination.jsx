"use client";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";


export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 4;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center gap-4 text-sm">
        {/* Prev arrow */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center text-2xl disabled:opacity-30 disabled:cursor-not-allowed hover:text-gray-600 cursor-pointer"
          aria-label="Previous page"
        >
          <GoChevronLeft />
        </button>

        {pageNumbers.map((page, i) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${i}`} className="px-1 text-gray-400">
                ...
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 flex items-center justify-center font-semibold cursor-pointer transition-colors ${
                isActive
                  ? "bg-[#3A3845] text-white"
                  : "border border-[#3A3845] text-[#3A3845] hover:bg-gray-100"
              }`}
              aria-label={`Page ${page}`}
              aria-current={isActive ? "page" : undefined}
            >
              {page}
            </button>
          );
        })}

        {/* Next arrow */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center text-2xl disabled:opacity-30 disabled:cursor-not-allowed hover:text-gray-600 cursor-pointer"
          aria-label="Next page"
        >
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
}