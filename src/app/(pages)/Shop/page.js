export default function Shop() {
  return (
    <div className="max-w-[1400px] mx-auto py-8 pl-4 md:pl-10 pr-6 font-sans">

      {/* Navigation */}
      <nav className="flex items-center gap-2 text-[13px] mb-6 text-gray-400">
        <span className="cursor-pointer hover:text-black" onClick={() => router.push('/')}>Home</span>
        <span>/</span>
        <span className="text-black font-medium">Shop</span>
      </nav>
      

      <div className="w-full mb-4 md:hidden flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <button className="text-[12px] font-bold tracking-[0.1em] uppercase flex items-center gap-2">
            <RxFilter size={20} />
            Filter
          </button>
          <div className="flex items-center gap-2 text-[13px] cursor-pointer">
            <span className="text-gray-500">Sort by:</span>
            <span className="text-black flex items-center">
              Name
              <svg width="10" height="6" viewBox="0 0 10 6" className="ml-1">
                <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.2" fill="none" />
              </svg>
            </span>
          </div>
        </div>
        <span className="text-[13px] font-bold text-black">Showing 120 items</span>
      </div>

      <div className="hidden md:flex justify-between items-center mb-5">
        <span className="text-[13px] font-bold text-black">Showing 120 items</span>
        <div className="flex items-center gap-2 text-[13px] cursor-pointer">
          <span className="text-gray-500 ">Sort by:</span>
          <span className="text-black flex items-center">
            Name
            <svg width="10" height="6" viewBox="0 0 10 6" className="ml-1">
              <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.2" fill="none" />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[40px] items-start">
        {/* Sidebar */}
        <aside className="w-[200px] flex-shrink-0 hidden md:block">
          <hr className="border-black mb-7" />
          <div className="mb-6">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map(item => (
                <label key={item} className="flex items-center gap-2 text-[12px] text-gray-600 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-black" /> {item}
                </label>
              ))}
            </div>
          </div>
          <hr className="border-black mb-6" />
          <div className="mb-6">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] mb-3">Price Range</h3>
            <div className="space-y-2">
              {prices.map(item => (
                <label key={item} className="flex items-center gap-2 text-[12px] text-gray-600 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-black" /> {item}
                </label>
              ))}
            </div>
          </div>
          <hr className="border-black mb-6" />
          <div className="mb-6">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] mb-3">Color</h3>
            <div className="flex gap-2">
              {colors.map((color, i) => (
                <div key={i} className="w-4 h-4 border border-gray-200 cursor-pointer" style={{ backgroundColor: color }}></div>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1 flex flex-col">
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[60px]">
              {products.map((product, index) => (
                <div key={index} className="flex flex-col bg-white w-full max-w-[260px] mx-auto h-full">
                  <Link href={`/product/${index}`}>
                    <figure className="bg-[#f2f2f2] w-full aspect-[255/320] flex items-center justify-center cursor-pointer">
                      <img
                        src={`/${product.img}`}
                        alt={product.title}
                        className="object-contain h-full w-full"
                      />
                    </figure>
                  </Link>

                  <div className="flex flex-col py-5 flex-1">
                    <h2 className="text-[13px] font-bold uppercase tracking-widest leading-tight">
                      {product.title}
                    </h2>
                    <p className="text-[13px] font-bold mt-1">{product.price}</p>
                    <p className="text-[13px] text-gray-500 mt-3 line-clamp-2">{product.desc}</p>
                  </div>

                  <button className="w-full border py-3 mt-auto hover:bg-black hover:text-white transition font-bold text-[10px] tracking-[0.2em] uppercase">
                    ADD TO CART
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-2 mt-16 mb-10 justify-center lg:justify-end w-full">
            <button
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              className="p-2 hover:opacity-70"
            >
              ‹
            </button>
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => handlePageChange(num)}
                className={`w-8 h-8 flex items-center justify-center text-[13px]
                  ${num === currentPage
                    ? 'bg-[#3a3a4a] text-white'
                    : 'border border-transparent hover:border-black'
                  }`}
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="p-2 hover:opacity-70"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}