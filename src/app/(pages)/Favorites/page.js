"use client";
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

export default function FavoritesPage() {
  const router = useRouter(); 

  const initialProducts = [
    {
      id: 1,
      name: "Porcelain Dinner Plate",
      price: "49.00",
      image: "/Image.svg", 
    },
    {
      id: 2,
      name: "Blue Glazed Plate",
      price: "49.00",
      image: "/Image (1).svg",
    },
    {
      id: 3,
      name: "Tall Cream Ceramic Vase",
      price: "79.00",
      image: "/Image (2).svg",
    }
  ];

  const [favorites, setFavorites] = useState(initialProducts);

  const handleRemove = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  
  const goToHome = () => {
    router.push('/');
  };

  
  const goToShop = () => {
    router.replace('/Shop');
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      
      
      <nav className="border-b border-gray-100 bg-white px-6 py-4 lg:px-20">
        <ol className="flex items-center space-x-4 text-[11px] uppercase tracking-[0.25em]">
          
          
          <li className="flex items-center">
            <button 
              onClick={goToHome}
              className="text-gray-400 font-light hover:text-black transition-colors cursor-pointer"
            >
              HOME
            </button>
          </li>

          <li className="text-gray-300 font-extralight text-lg">/</li>

          
          <li className="flex items-center">
            <button 
              onClick={goToShop}
              className="text-gray-400 font-light hover:text-black transition-colors cursor-pointer"
            >
              SHOP
            </button>
          </li>

          <li className="text-gray-300 font-extralight text-lg">/</li>

          <li className="flex items-center">
            <span className="text-[#1a1a1a] font-medium tracking-[0.3em]">
               FAVORITES
            </span>
          </li>
        </ol>
      </nav>

      
      <main className="px-6 py-12 lg:px-20">
        
        {favorites.length === 0 ? (
          <div className="text-center py-20 uppercase tracking-widest text-gray-400 text-sm font-light">
            Your list is empty
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 max-w-7xl mx-auto">
            {favorites.map((product) => (
              <div key={product.id} className="group flex flex-col relative max-w-xs mx-auto w-full">
                
                
                <div className="relative aspect-[4/5] bg-[#fcfcfc] overflow-hidden border border-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="absolute top-3 right-3 text-red-500 bg-white/90 p-1.5 rounded-full hover:bg-white transition-all shadow-sm z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-5 text-left flex flex-col flex-grow">
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-900 leading-relaxed min-h-[32px]">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 tracking-wide">${product.price}</p>
                  
                  <button className="mt-5 w-full py-2.5 border border-gray-900 text-[9px] uppercase tracking-[0.25em] font-medium hover:bg-black hover:text-white transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}