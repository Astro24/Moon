"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,FaStar, FaPlus, FaMinus, FaRegHeart} from 'react-icons/fa';
import styles from '@/app/styles/Product.module.css';

export default function CombinedProductPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('blue');
  const router = useRouter();


  //  مصفوفة المنتجات
  const products = [
    { img: "Image (2).svg", title: "SMALL ECRU CERAMIC COMPOTE", price: "$49.00", desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." },
    { img: "Image (3).svg", title: "PORCELAIN DINNER PLATE", price: "$49.00", desc: "Lorem ipsum dolor sit amet conse bolli tetur ." },
    {
      img: "Image (4).svg", title: "WARRICK WHITE VASE 20", price: "$68.00", oldPrice: "$90.00", desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu."
    },
    { img: "Image (5).svg", title: "MARIN WHITE DINNER PLATE", price: "$49.00", desc: "Lorem ipsum dolor sit amet conse." },
    {
      img: "Image (6).svg", title: "TALL CREAM CERAMIC VASE", price: "$79.00", oldPrice: "$90.00", desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
    },
    { img: "Image (7).svg", title: "LUANA BOWL", price: "$49.00", desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu." },
    { img: "Image (8).svg", title: "OPHELIA MATTE NATURAL VASE", price: "$149.00", oldPrice: "$169.00", desc: "Lorem ipsum dolor sit amet conse bolli tetur." },
    { img: "Image (9).svg", title: "LUANA BOWL", price: "$49.00", desc: "Lorem ipsum dolor sit amet conse." },
    { img: "Image (10).svg", title: "PORCELAIN DINNER PLATE", price: "$49.00", desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu." }
  ];

  
  const productId = params.id;
  const currentProduct = products[productId];

  // وضع الصورة الكبيرة (تتحدث لما اغير المنتج)
  const [mainImage, setMainImage] = useState(currentProduct ? `/${currentProduct.img}` : null);
  useEffect(() => {
    if (currentProduct) {
      setMainImage(`/${currentProduct.img}`);
    }
  }, [currentProduct]);

  
  if (!currentProduct) {
    return <div className="p-20 text-center font-bold">Product Loading or Not Found...</div>;
  }

  //  الصور المصغرة
  const productImages = [
    `/${currentProduct.img}`,
    "/b2plate.svg",
    "/b3plate.svg",
    "/b4plate.svg",
    "/b5plate.svg",
    "/b6plate.svg"
  ];

  const colors = [
    { name: 'blue', class: 'bg-[#b8cbd6]' },
    { name: 'white', class: 'bg-white border' },
    { name: 'orange', class: 'bg-[#c6893d]' },
    { name: 'navy', class: 'bg-[#2c3e50]' },
    { name: 'peach', class: 'bg-[#e5c1b1]' },
    { name: 'sage', class: 'bg-[#a3b19c]' },
  ];

  const similarProducts = [
    { id: 1, title: "33Porcelain Dinner Plate", price: "$49.00", desc: "Lorem ipsum dolor sit amet conse bolli tetur.", image: "/s1.svg" },
    { id: 2, title: "Ophelia Matte Natural Vase", price: "$70.00", desc: "Lorem ipsum dolor sit amet conse bolli tetur.", image: "/s2.svg" },
    { id: 3, title: "Porcelain Dinner Plate", price: "$49.00", desc: "Lorem ipsum dolor sit amet conse bolli tetur.", image: "/s3.svg" },
    { id: 4, title: "Luana Bowl", price: "$68.00", desc: "Lorem ipsum dolor sit amet conse.", image: "/s4.svg" },
  ];

  return (
    <div className={styles.productPageWrapper}>
     
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-10">
        <button onClick={() => router.push('/')} className="hover:text-black transition-colors">
          Home
        </button>
        <span className="text-gray-300">/</span>
        <button onClick={() => router.push('/Shop')} className="hover:text-black transition-colors">
          Shop
        </button>
        <span className="text-gray-300">/</span>
        <span className="text-slate-800 font-semibold truncate max-w-[200px] md:max-w-none">
          {currentProduct.title}
        </span>
      </nav>
      <div className={styles.productPageWrapper}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

          
          <div className="space-y-4">
            
            <div className={styles.imgMainContainer}>
              {mainImage ? (
                <img src={mainImage} alt="Main" className="w-full h-full object-contain p-4" />
              ) : (
                <div className="animate-pulse bg-gray-200 w-full h-full" /> 
              )}
            </div>
            <div className={styles.imgGridThumbnails}>
              {productImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`${styles.imgThumbItem} ${mainImage === img ? 'border-slate-800' : 'border-transparent'}`}
                >
                  <img src={img} className="w-full h-full object-contain p-1" alt="thumb" />
                </div>
              ))}
            </div>
          </div>

          {/* تفاصيل المنتج */}
          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-2xl font-semibold uppercase tracking-wide">{currentProduct.title}</h1>
              <div className="flex items-center mt-2 space-x-2">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4].map(s => <FaStar key={s} size={16} />)}
                  <FaStar size={16} className="text-gray-300" />
                </div>
                <span className="text-sm text-gray-500">(1256 Reviews)</span>
                <span className={styles.stockStatus}>Stock: <span className={styles.stockBadge}>In stock</span></span>
              </div>
              <div className="flex items-baseline space-x-3 mt-4">
                <span className="text-3xl font-light text-slate-900">{currentProduct.price}</span>

                
                {currentProduct.oldPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {currentProduct.oldPrice}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                {currentProduct.desc}
              </p>
            </div>

            {/* اختيار اللون */}
            <div>
              <p className="text-sm font-medium mb-3">Color: <span className="capitalize text-gray-600">{selectedColor}</span></p>
              <div className="flex space-x-3">
                {colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 ${color.class} ${selectedColor === color.name ? 'ring-2 ring-black ring-offset-1' : ''}`}
                  />
                ))}
              </div>
            </div>

            {/* الكمية والأزرار */}
            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className={styles.qtyBox}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className={styles.qtyBtn}><FaMinus size={12} /></button>
                  <span className="px-6 py-2 border-x border-gray-300 font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className={styles.qtyBtn}><FaPlus size={12} /></button>
                </div>
                <button className={styles.btnCartMain}>Add to Cart</button>
              </div>
              <div className="flex space-x-2">
                <button className={styles.btnBuyNow}>Buy Now</button>
                <button className={styles.btnWishlist}><FaRegHeart size={20} className="text-slate-700" /></button>
              </div>
            </div>

            {/* مشاركة  */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
              <span className="text-sm font-medium text-gray-500">Share this:</span>
              <div className="flex space-x-5 text-[#c69c7c]">
                <a href="#" className={styles.socialLink}><FaFacebookF size={18} /></a>
                <a href="#" className={styles.socialLink}><FaTwitter size={18} /></a>
                <a href="#" className={styles.socialLink}><FaInstagram size={18} /></a>
                <a href="#" className={styles.socialLink}><FaLinkedinIn size={18} /></a>
              </div>
            </div>

            {/* القوائم  */}
            <div className="border-t border-gray-200">
              {['Details', 'Dimensions', 'Reviews'].map((item) => (
                <div key={item} className={styles.accordionItem}>
                  <span className={styles.accordionText}>{item}</span>
                  <FaPlus size={14} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* المنتجات المشابهة */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-serif font-bold text-[#3a3a4a] uppercase mb-10">Similar Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {similarProducts.map((product) => (
              <div key={product.id} className={`${styles.similarItemCard} group`}>
                <div className={styles.similarImgWrapper}>
                  <img
                    src={product.image}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    alt={product.title}
                  />
                </div>
                <div className={styles.productInfoWrapper}>
                  <h3 className="text-xs font-bold uppercase tracking-widest min-h-[32px]">
                    {product.title}
                  </h3>
                  <p className="text-sm font-medium">{product.price}</p>
                  <p className={styles.similarDesc}>{product.desc}</p>
                </div>
                <button className={styles.btnSimilarAdd}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>  
      );
}