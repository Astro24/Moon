const priceRanges = [
  { label: "$0 - $10", min: 0, max: 10 },
  { label: "$10 - $50", min: 10, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "> $200", min: 200, max: Infinity },
];

const colors = ["#ffffff", "#d9bba9", "#c6d8d3", "#a34a4a", "#8e8e9e"];
const tags = ["Dinnerware", "Ceramic", "Furniture", "Decor Art", "Gifts sets"];

export default function FilterContent({
  selectedPrices,
  setSelectedPrices,
  selectedTags,
  setSelectedTags,
  toggleFilter,
}) {
  return (
    <>
      <hr className="border-black mb-7" />

      <div className="mb-6">
        <h3 className="text-[12px] font-bold uppercase tracking-widest mb-3">
          Price Range
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-2 text-[12px] text-gray-600 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-black"
                checked={selectedPrices.includes(range.label)}
                onChange={() =>
                  toggleFilter(range.label, selectedPrices, setSelectedPrices)
                }
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      <hr className="border-black mb-6" />

      <div className="mb-6">
        <h3 className="text-[12px] font-bold uppercase tracking-widest mb-3">
          Color
        </h3>
        <div className="flex gap-2">
          {colors.map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 border border-gray-200 cursor-pointer"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        {/* TODO: wire up color filter once products have color data */}
      </div>

      <hr className="border-black mb-6" />

      <div className="mb-6">
        <h3 className="text-[12px] font-bold uppercase tracking-widest mb-3">
          Tags
        </h3>
        <div className="space-y-4">
          {tags.map((tag) => (
            <label
              key={tag}
              className="flex items-center gap-2 text-[12px] cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-black"
                checked={selectedTags.includes(tag)}
                onChange={() =>
                  toggleFilter(tag, selectedTags, setSelectedTags)
                }
              />
              <span className="text-[#2A254B]">{tag}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}