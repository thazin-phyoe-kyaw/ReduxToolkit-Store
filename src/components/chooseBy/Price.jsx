import React, { useState } from "react";

const Price = () => {
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const handlePriceChange = (e) => {
    setPriceRange([parseInt(e.target.value), priceRange[1]]);
  };

  return (
    <div>
      <label
        htmlFor="price-range"
        className="block  text-gray-900 dark:text-white font-extrabold lg:text-xl  mb-4"
      >
        Price Range
      </label>
      <div className="flex justify-between">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
      <input
        id="price-range"
        type="range"
        min="0"
        max="2000"
        value={priceRange[0]}
        onChange={handlePriceChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default Price;
