import React from "react";
import { Search } from "lucide-react";

const SearchItem = ({ onChange }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-sm">
      <div className=" md:p-0 md:ml-2">
        <Search className="w-4 h-4 md:w-8 md:h-8" />
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="block w-full py-2 px-4 text-gray-800 border border-transparent focus:outline-none focus:border-gray-300 rounded-lg"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchItem;
