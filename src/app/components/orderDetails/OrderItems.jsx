import Image from "next/image";

export default function OrderItems({ items }) {
  if (!items || items.length === 0) {
    return (
      <p className="text-gray-400 text-center py-8">No items in this order.</p>
    );
  }

  return (
    <div className="space-y-6 mb-8 sm:mb-12">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-row items-center justify-between pb-6 border-b border-gray-100 last:border-0 gap-4"
        >
          <div className="flex gap-4 sm:gap-6 items-center flex-1">
            <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xs sm:text-sm tracking-wide line-clamp-2 uppercase">
                {item.name}
              </h3>
              {item.quantity > 1 && (
                <p className="text-xs text-gray-400 mt-1">
                  Qty: {item.quantity}
                </p>
              )}
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="font-bold text-sm sm:text-base">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            {item.quantity > 1 && (
              <p className="text-xs text-gray-400 mt-1">
                ${item.price}.00 each
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
