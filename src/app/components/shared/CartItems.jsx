import Image from "next/image";
import { CiTrash } from "react-icons/ci";
import { useCart } from "@/app/contexts/CartContext";

export default function CartItems() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalItems,
  } = useCart();

  return (
    <section>
      {/* Desktop table header */}
      <div className="hidden md:grid grid-cols-[44px_110px_1.3fr_170px_150px_120px] items-center text-center bg-[#363347] text-white text-[13px] py-3 px-2">
        <button
          onClick={() => {
            if (confirm("Remove all items from your cart?")) {
              clearCart();
            }
          }}
          aria-label="Clear cart"
          className="flex justify-center cursor-pointer hover:text-[#c89a73] transition-colors"
        >
          <CiTrash size={18} />
        </button>
        <div>PHOTO</div>
        <div>PRODUCT</div>
        <div>PRICE</div>
        <div>QUANTITY</div>
        <div>SUBTOTAL</div>
      </div>

      {/* Cart items */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="border border-[#d8d8d8] md:border-0 md:border-b-2 md:border-[#797575] p-4 md:px-2 md:py-3 mb-4 md:mb-0 flex flex-col gap-4 md:grid md:grid-cols-[44px_110px_1.9fr_120px_150px_120px] md:items-center md:text-center md:min-h-37.5"
        >
          {/* Remove button */}
          <div className="flex justify-end md:justify-center order-1 md:order-0">
            <button
              onClick={() => removeFromCart(item.id)}
              aria-label="Remove item"
              type="button"
              className="cursor-pointer"
            >
              <CiTrash
                size={24}
                className="text-[#4a4a4a] hover:text-[#c89a73]"
              />
            </button>
          </div>

          {/* Photo + mobile name */}
          <div className="flex items-center gap-4 md:block order-2 md:order-0">
            <div className="w-25 h-30 bg-[#f7f4ef] flex items-center justify-center overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={110}
                height={110}
                className="object-contain scale-[1.20]"
              />
            </div>

            <div className="flex-1 md:hidden">
              <p className="text-xs font-semibold text-[#3a3a3a] leading-normal">
                {item.name}
              </p>
            </div>
          </div>

          {/* Desktop name */}
          <div className="hidden md:flex md:justify-center">
            <p className="text-[13px] font-medium text-black max-w-60 leading-normal text-center">
              {item.name}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between md:block order-3 md:order-0">
            <span className="md:hidden text-[13px] text-[#8b8b8b]">Price</span>
            <span className="text-sm font-semibold text-[#303030]">
              ${item.price}
            </span>
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-between md:justify-center order-4 md:order-0">
            <span className="md:hidden text-[13px] text-[#8b8b8b]">
              Quantity
            </span>

            <div className="flex items-center justify-between w-23 h-9 border-2 border-[#797575] px-2 bg-white">
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                aria-label="Decrease quantity"
                className="text-lg text-[#555] cursor-pointer"
              >
                -
              </button>
              <span className="text-sm text-[#303030]">{item.quantity}</span>
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                aria-label="Increase quantity"
                className="text-lg text-[#555] cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Subtotal */}
          <div className="flex items-center justify-between md:block order-5 md:order-0">
            <span className="md:hidden text-[13px] text-[#8b8b8b]">
              Subtotal
            </span>
            <span className="text-sm font-semibold text-[#c89a73]">
              ${(item.price * item.quantity).toFixed(0)}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
