import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  // const { items: products, selectedCategory } = useSelector(
  //   (state) => state.product
  // );
  console.log(selectedCategory);
  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    dispatch(setCategoryFilter(selectedCategory));
  };

  return (
    <div>
      <label htmlFor="sort">Sort by Price:</label>
      <select id="sort" value={sortOrder} onChange={handleSortChange}>
        <option value="asc">Lowest to Highest</option>
        <option value="desc">Highest to Lowest</option>
      </select>
      <label htmlFor="filter">Filter by Category:</label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="all">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
};

export default FilterProduct;
