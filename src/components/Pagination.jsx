import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { setCurrentPage } from "../features/product/productSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, pageSize, items } = useSelector(
    (state) => state.product
  );

  const totalPages = Math.ceil(items.length / pageSize);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </button>
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
