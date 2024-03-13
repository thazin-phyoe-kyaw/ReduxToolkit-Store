import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allItems: [],
  items: [],
  status: null,
  currentPage: 1,
  pageSize: 10,
  sortOrder: "asc",
  selectedCategory: null,
};

export const fetchProducts = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    sortByPrice: (state, action) => {
      state.sortOrder = action.payload;
      state.items = [...state.items].sort((a, b) => {
        if (action.payload === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    },

    setCategoryFilter(state, action) {
      state.selectedCategory = action.payload;
      state.items = state.allItems.filter(
        (item) => item.category === action.payload
      );
    },

    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.items = state.items.filter((item) => {
        return (
          item.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.allItems = action.payload; // Update allItems with fetched items
        state.status = "success";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});
export const { sortByPrice, setCategoryFilter, setSearchTerm } =
  productSlice.actions;
export default productSlice.reducer;
