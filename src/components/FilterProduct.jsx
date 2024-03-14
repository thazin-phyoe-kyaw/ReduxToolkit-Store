import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  setCategoryFilter,
  sortByPrice,
} from "../features/product/productSlice";

const FilterProduct = () => {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSortChange = (e) => {
    const selectedSortOrder = e.target.value;
    setSortOrder(selectedSortOrder);
    dispatch(sortByPrice(selectedSortOrder));
  };

  console.log(selectedCategory);
  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    dispatch(setCategoryFilter(selectedCategory));
  };

  return (
    <div className="flex flex-end items-center text-sm text-gray-600 gap-6">
      <div>
        <label htmlFor="sort" className="text-sm ">
          Sort by Price:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={handleSortChange}
          className="px-2 py-1 border border-gray-300 rounded-md"
        >
          <option value="asc">Lowest to Highest</option>
          <option value="desc">Highest to Lowest</option>
        </select>
      </div>
      <div>
        <label htmlFor="filter" className="text-sm text-gray-600">
          Filter by Category:
        </label>
        <select
          id="filter"
          onChange={handleFilterChange}
          className="px-2 py-1 border border-gray-300 rounded-md "
        >
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
    </div>
  );
};

export default FilterProduct;
